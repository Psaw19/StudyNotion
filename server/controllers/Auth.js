const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Profile = require("../models/Profile");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");
require("dotenv").config();

//sendOTP
exports.sendOTP = async (req, res) => {
  console.log("---------------INSIDE SEND OTP CONTROLLER-------------------");
  try {
    const { email } = req.body;

    // Check if user is already present
    // Find user with provided email
    const checkUserPresent = await User.findOne({ email });
    // to be used in case of signup

    // If user found with provided email
    if (checkUserPresent) {
      // Return 403 forbidden status code with error message
      return res.status(403).json({
        success: false,
        message: `User is Already Registered`,
      });
    }

    //generate otp
    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    //check whether the generated otp already exists in db or not
    let result = await OTP.findOne({ otp: otp });
    // console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);

    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//signUp
exports.signup = async (req, res) => {
  console.log("---------------INSIDE SIGN UP CONTROLLER-------------------");
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      otp,
    } = req.body;

    // console.log('signup api backend ', req.body)
    //check if all the essential details are present
    if (!otp) {
      return res.status(400).json({
        success: false,
        message: "Please enter OTP",
      });
    }
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check passwords match or not
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password are different",
      });
    }

    //check user already exits or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "User already exists",
      });
    }

    //fint most recent OTP generated and stored in db
    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);

    //validate if we got otp from db
    if (recentOtp.length === 0) {
      return res.status(401).json({
        success: false,
        message: "OTP not found",
      });
    }
    //check whether otp entered by user is correct
    else if (otp !== recentOtp[0].otp) {
      return res.status(400).json({
        success: false,
        message: "Incorrect OTP",
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create entry in db
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}`,
    });

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again",
    });
  }
};

//login
exports.login = async (req, res) => {
  console.log("---------------INSIDE LOGIN CONTROLLER-------------------");
  try {
    //get data from request body
    const { email, password } = req.body;

    //validate data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "Please fill details properly",
      });
    }
    //check if user exists
    const user = await User.findOne({ email }).populate("additionalDetails");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not registered ",
      });
    }
    //check credentials and generate jwt
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user.token = token;
      user.password = undefined;

      //create cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error occured while logging in",
    });
  }
};

//changePassword
exports.changePassword = async (req, res) => {
  console.log(
    "---------------INSIDE CHANGE PASSWORD CONTROLLER-------------------"
  );
  try {
    //fetch data from request body
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    //get user details from db
    const userDetails = await User.findOne(req.user.id);

    //validate password
    const isPasswordMatch = await bcrypt.compare(
      userDetails.password,
      oldPassword
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Please enter correct password",
      });
    }

    //check if new passwords are same
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    //hash new password
    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    //update password in db
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: newHashedPassword },
      { new: true }
    );

    //send mail for password changed
    try {
      const mailResponse = await mailSender(
        updatedUserDetails.email,
        passwordUpdated(
          updatedUserDetails.email,
          `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        )
      );

      console.log("mail==>", mailResponse.response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: true,
        message: "Error occured while sending mail for changing password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Password changed and mail sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      message: "Error occured while changing password",
    });
  }
};

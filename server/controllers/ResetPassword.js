const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { passwordUpdated } = require("../mail/templates/passwordUpdate")
const { resetPasswordLink } = require("../mail/templates/resetPasswordLink")

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
    console.log('---------------INSIDE RESET PASS TOKEN-------------------')
    try {
        //get email from req body
        const email = req.body.email;
        //check user from email
        const user = User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Email not registered",
            })
        }

        //generate token
        const token = crypto.randomUUID();
        //update user by adding token and expiration time
        // const updateDetails 
        const userDetails = await User.findOneAndUpdate(
            { email: email },
            {
                token: token,
                resetPasswordExpires: Date.now() + 5 * 60 * 1000,
            },
            { new: true }
        );

        // console.log('==>', userDetails);
        const name = userDetails.firstName + " " + userDetails.lastName;
        // console.log(name)
        //create url
        const url = `http://localhost:3000/update-password/${token}`
        //send mail with url
        await mailSender(email,
            "Reset Password",
            resetPasswordLink(name, url),
        )

        //return response
        return res.status(200).json({
            success: true,
            message: "Email sent Successfully"
        })

    } catch (error) {

        return res.status(500).json({
            success: true,
            message: "Error while sending mail to reset password"
        })
    }
}

//resetPassword
exports.resetPassword = async (req, res) => {
    console.log('---------------INSIDE UPDATE PASSWORD-------------------')
    try {
        //fetch data
        const { password, confirmPassword, token } = req.body;
        //validate user
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password not matcing",
            })
        }
        //get user details
        const userDetails = await User.findOne({ token: token });
        //if no entry - invalid token
        if (!userDetails) {
            return res.status(400).json({
                success: false,
                message: "Invalid token",
            })
        }
        //check expiration time
        if (userDetails.resetPasswordexpires < Date.now()) {
            return res.status(400).json({
                success: false,
                message: "token expired",
            })
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //update password
        await User.findOneAndUpdate(
            { token: token },
            { password: hashedPassword },
            { new: true }
        )

        const { email, firstName, lastName } = userDetails
        const name = firstName + ' ' + lastName

        //sending mail
        await mailSender(email, "Password updated successfully", passwordUpdated(email, name))

        //return response
        return res.status(200).json({
            success: true,
            email: email,
            message: "Password reset successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while resetting password",
        })
    }
}
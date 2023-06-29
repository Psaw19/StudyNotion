const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {

    try {
        //get email from req body
        const email = req.body.email;
        //check user from email
        const user = User.findOne({ email: email });
        if (!user) {
            return res.json({
                success: false,
                message: "Email not registered",
            })
        }

        //generate token
        const token = crypto.randomUUID();
        //update user by adding token and expiration time
        // const updateDetails =
        await User.findOneAndUpdate(
            { email: email },
            {
                token: token,
                resetPasswordExpires: Date.now() + 5 * 60 * 1000,
            },
            { new: true }
        );
        //create url
        const url = `http://localhost:3000/update-password/${token}`
        //send mail with url
        await mailSender(email,
            "Reset Password",
            `Password Reset Link: ${url}`
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

    try {
        //fetch data
        const { password, confirmPassword, token } = req.body;
        //validate user
        if (password !== confirmPassword) {
            return res.json({
                success: false,
                message: "Password not matcing",
            })
        }
        //get user details
        const userDetails = await User.findOne({ token: token });
        //if no entry - invalid token
        if (!userDetails) {
            return res.json({
                success: false,
                message: "invalid token",
            })
        }
        //check expiration time
        if (userDetails.resetPasswordexpires < Date.now()) {
            return res.json({
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

        //return response
        return res.json({
            success: true,
            message: "Password reset successfully",
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went wrong while resetting password",
        })
    }
}
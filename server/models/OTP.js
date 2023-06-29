const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { otpTemplate } = require("../mail/templates/emailVerificationTemplate");
const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60,
    },
})

async function sendVerificationEmail(email, otp) {
    try {
        console.log("Sending Verification mail .....")
        const mailResponse = await mailSender(
            email,
            "Verification mail from Studynotion",
            otpTemplate(otp)
        );
        console.log("Email Sent Successfully: ", mailResponse.response);

    } catch (error) {
        console.log("error occured while sending mail:", error);
        throw error;
    }
}

OTPSchema.pre("save", async function (next) {
    console.log("New document saved to database");

    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp);
    }
    next();
})

const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;
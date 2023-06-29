const { instance } = require("../config/razorpay")
const Course = require("../models/Course")
const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const { courseEnrollmentEmail } = require("../mail/templates/courseEnrollmentEmail")
const { default: mongoose } = require("mongoose")
const crypto = require("crypto");

exports.capturePayment = async (req, res) => {

    //get courseId and userId 
    const { course_id } = req.body
    const userId = req.user.id

    //validate data 
    if (!course_id) {
        return res.status(400).json({
            success: false,
            message: "Invalid courseId",
        })
    }

    //validate course detail
    let course;
    try {
        course = await Course.findById(course_id)

        if (!course) {
            return res.status(400).json({
                success: false,
                message: "Course not found",
            })
        }

        //check whether user has already purchased
        const uid = new mongoose.Types.ObjectId(userId)
        if (course.studentEnrolled.includes(uid)) {
            return res.status(200).json({
                success: false,
                message: "Student already enrolled",
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }

    //create order
    const amount = course.prices;
    const currency = "INR";

    const options = {
        amount: amount * 100,
        currency,
        receipt: Math.random(Date.now()).toString,
        notes: {
            courseId: course_id,
            userId,
        }
    }

    try {

        //initiate payment using razorpay
        const paymentResponse = instance.orders.create(options);
        console.log(paymentResponse);

        return res.status(200).json({
            success: true,
            courseName: course.courseName,
            courseDescription: course.courseDescription,
            thumbnail: course.thumbnail,
            orderId: paymentResponse.id,
            currency: paymentResponse.currency,
            amount: paymentResponse.amount,
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: "Unable to initiate order"
        })
    }

}

//verify signature of razorpay and signature
exports.verifySignature = async (req, res) => {

    const webhookSecret = "12345678";
    const signature = req.headers["x-razorpay-signature"];

    const hmac = crypto.createHmac("sha256", webhookSecret);
    hmac.update(JSON.stringify(req.body));
    const digest = hmac.digest("hex");

    if (signature === digest) {
        console.log("Payment Authorized")

        const { courseId, userId } = req.body.payload.payment.entity.notes;

        try {

            //fulfil the action
            //find course and enroll the student

            const enrolledCourse = await Course.findOneAndUpdate(
                { _id: courseId },
                { $push: { studentEnrolled: userId } },
                { new: true }
            )

            if (!enrolledCourse) {
                return res.status(500).json({
                    success: false,
                    message: "Course not found"
                })
            }
            console.log(enrolledCourse);

            const enrolledStudent = await User.findOneAndUpdate(
                { _id: userId },
                { $push: { courses: courseId } },
                { new: true }
            )
            console.log(enrolledStudent)

            //send confirmation mail
            const emailResponse = await mailSender(
                enrolledStudent.email,
                courseEnrollmentEmail(enrolledCourse.courseName, enrolledStudent.firstName)
            )

            console.log(emailResponse)

            return res.status(200).json({
                success: true,
                message: "Signature verified and Course Added"
            })

        } catch (error) {

            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }

    } else {
        return res.status(400).json({
            success: false,
            message: "Invalid request",
        })
    }
}
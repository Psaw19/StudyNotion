const RatingAndReview = require("../models/RatingAndReview")
const Course = require("../models/Course")
const { default: mongoose } = require("mongoose")

//createRating
exports.createRating = async (req, res) => {
    try {

        //get user id
        const userId = req.user.id

        //fetchdata from req body
        const { rating, review, courseId } = req.body

        //check whether user is enrolled or not
        const courseDetails = await Course.findOne(
            {
                _id: courseId,
                studentEnrolled: { $elemMatch: { $eq: userId } }
            })

        if (!courseDetails) {
            return res.status(404).json({
                success: false,
                message: "User not enrolled"
            })
        }

        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
            user: userId,
            course: courseId
        })

        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: "Course is already reviewed"
            })
        }

        //create RatingAndReview
        const ratingReview = await RatingAndReview.create({
            rating,
            review,
            course: courseId,
            user: userId
        })

        //update course with ratingReview
        const upatedCourseDetail = await Course.findByIdAndUpdate(courseId,
            {
                $push: {
                    ratingAndReviews: ratingReview._id
                }
            },
            { new: true }
        )
        console.log(upatedCourseDetail)

        //return response
        return res.status(200).json({
            success: true,
            message: "Rating and review created successfully"
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//getAverageRating
exports.getAverageRating = async (req, res) => {
    try {

        //get courseId
        const { courseId } = req.body;
        //calculate average rating

        const result = await RatingAndReview.aggregate({
            $match: {
                course: new mongoose.Types.ObjectId(courseId),
            }
        },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: "$rating" },
                }
            }
        )
        //return rating
        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                averageRating: result[0].averageRating,
            })
        }

        //if no rating/review exist
        return res.status(200).json({
            success: true,
            message: "No ratings",
            averageRating: 0,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//getAllratingAndReviews
exports.getAllratingAndReviews = async (req, res) => {
    try {

        const allReviews = await RatingAndReview.find({})
            .sort("desc")
            .populate({
                path: "user",
                select: "firstName lastName email image",
            })
            .populate({
                path: "course",
                select: "courseName"
            })
            .exec();

        return res.status(200).json({
            success: true,
            message: "All reviews fetched successfully",
            data: allReviews
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
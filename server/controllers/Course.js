const Course = require("../models/Course")
const Category = require("../models/Category");
const User = require("../models/User")

const { uploadImageToCloudinary } = require('../utils/imageUploader')

exports.createCourse = async (req, res) => {
    console.log('---------------INSIDE CREATE COURSE CONTROLLER-------------------')
    try {

        //get user id
        const userId = req.user.id;

        //fetch data
        let {
            courseName,
            courseDescription,
            whatYouWillLearn,
            price,
            category,
            status,
            instructions,
            tag
        } = req.body

        //get thumbnail
        const thumbnail = req.files.thumbnailImage;

        //validation
        if (
            !courseName ||
            !courseDescription ||
            !category ||
            !whatYouWillLearn ||
            !thumbnail ||
            !price ||
            !tag) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        if (!status || status === undefined) {
            status = "Draft"
        }

        // Check if the user is an instructor
        const instructorDetails = await User.findById(userId, { accountType: "Instructor" });
        console.log("Instructor Details: ", instructorDetails);

        if (!instructorDetails) {
            return res.status(404).json({
                success: false,
                message: "Instructor details not found"
            })
        }

        const categoryDetails = await Category.findById(category);
        if (!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: "category details not found"
            })
        }

        //uploadImageToCloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);
        console.log(thumbnailImage)

        //create an entry for new Course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn: whatYouWillLearn,
            price,
            tag: tag,
            category: categoryDetails._id,
            thumbnail: thumbnailImage.secure_url,
            status: status,
            instructions: instructions,
        })

        //add new course to userSchema of instructor

        await User.findByIdAndUpdate(
            { _id: instructorDetails._id },
            {
                $push: {
                    courses: newCourse._id,
                }
            },
            { new: true }
        )

        //TODO: update category Schema 
        await Category.findByIdAndUpdate(
            { _id: categoryDetails._id },
            {
                $push: {
                    courses: newCourse._id,
                }
            },
            { new: true }
        )

        return res.status(200).json({
            success: true,
            message: "Course created successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to create course",
            error: error.message
        })
    }
}

exports.getAllCourses = async (req, res) => {
    console.log('---------------INSIDE GET ALL COURSES CONTROLLER-------------------')
    try {

        const allCourses = await Course.find({},
            {
                courseName: true,
                price: true,
                thumbnail: true,
                instructor: true,
                ratingAndReviews: true,
                studentEnrolled: true,
            })
            .populate("instructor")
            .exec();

        return res.status(200).json({
            success: true,
            message: "All courses fetched successfully",
            data: allCourses,
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Cannot fetch course data",
            error: error.message,
        })
    }
}

//getCourseDetails
exports.getCourseDetails = async (req, res) => {
    console.log('---------------INSIDE GET COURSE DETAILS CONTROLLER-------------------')
    try {

        //get id
        const { courseId } = req.body

        //find course details
        const courseDetails = await Course.find(
            { _id: courseId })
            .populate({
                path: "instructor",
                populate: {
                    path: "additionalDetails",
                }
            })
            .populate("category")
            .populate("ratingAndReviews")
            .populate({
                path: "courseContent",
                populate: {
                    path: "subSection"
                }
            })
            .exec();

        //validation
        if (!courseDetails) {
            return res.status(400).json({
                success: false,
                message: `Could not find the course with id -> ${courseId}`
            })
        }

        // return response
        return res.status(200).json({
            success: true,
            message: "Course Details fetched successfully",
            courseDetails
        })



    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            message: error.message,
        })

    }
}
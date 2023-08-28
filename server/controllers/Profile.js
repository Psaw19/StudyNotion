const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader")

exports.updateProfile = async (req, res) => {
    console.log('---------------INSIDE UPDATE PROFILE CONTROLLER-------------------')
    try {
        //fetch data
        const { dateOfBirth = "", gender, about = "", contactNumber } = req.body

        //get User Id
        const userId = req.user.id

        //find user
        const userDetails = await User.findById(userId);

        //find profile 
        const profileDetails = await Profile.findById(userDetails.additionalDetails);

        //update profile
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;
        profileDetails.about = about;
        profileDetails.dateOfBirth = dateOfBirth;

        await profileDetails.save();

        //return response
        return res.status(200).json({
            success: true,
            message: "Profile update successfully",
            profileDetails
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: " Error while updating Profile",
            error: error.message,
        })
    }
}

exports.deleteAccount = async (req, res) => {
    console.log('---------------INSIDE DELETE ACCOUNT CONTROLLER-------------------')
    try {

        const userId = req.user.id

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            })
        }

        const userDetails = await User.findById(userId);

        await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails })

        // TODO: HW --> unenroll the uder from courses and schedule deletion operation

        await User.findByIdAndDelete({ _id: userId })

        return res.status(200).json({
            success: true,
            message: "Profile deleting successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: " Error while deleting Profile",
            error: error.message,
        })
    }
}

exports.getAllUserDetails = async (req, res) => {
    console.log('---------------INSIDE GET ALL USER DETAILS CONTROLLER-------------------')
    try {

        const userId = req.user.id
        const userDetails = await User.findById(userId).populate("additionalDetails").exec();


        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            userDetails,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: " Error while getting Profile",
            error: error.message,
        })
    }
}

exports.updateDisplayPicture = async (req, res) => {
    console.log('---------------INSIDE UPDATE DISPLAY PICTURE CONTROLLER-------------------')
    try {
        const displayPicture = req.files.displayPicture
        const userId = req.user.id
        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        console.log(image)
        const updatedProfile = await User.findByIdAndUpdate(
            { _id: userId },
            { image: image.secure_url },
            { new: true }
        )
        res.send({
            success: true,
            message: `Image Updated successfully`,
            data: updatedProfile,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

exports.getEnrolledCourses = async (req, res) => {
    console.log('---------------INSIDE GET ENROLLED COURSES CONTROLLER-------------------')
    try {
        const userId = req.user.id
        const userDetails = await User.findOne({
            _id: userId,
        })
            .populate("courses")
            .exec()
        if (!userDetails) {
            return res.status(400).json({
                success: false,
                message: `Could not find user with id: ${userDetails}`,
            })
        }
        return res.status(200).json({
            success: true,
            data: userDetails.courses,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};
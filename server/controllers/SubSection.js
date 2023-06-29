const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
require("dotenv").config();
const { uploadImageToCloudinary } = require("../utils/imageUploader")

exports.createSubSection = async (req, res) => {
    try {

        //fetch data
        const { sectionId, title, timeDuration, description } = req.body;

        //extract video
        const video = req.files.videoFile;

        //validate data
        if (!sectionId || !timeDuration || !title || !description || !video) {
            return res.status(404).json({
                success: false,
                message: "insufficient data",

            })
        }

        //upload video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME);

        //create subsection
        const newSubSection = await SubSection.create({
            title: title,
            timeDuration: timeDuration,
            description: description,
            videoUrl: uploadDetails.secure_url,
        })

        //update Section
        const updatedSection = await Section.findByIdAndUpdate({ _id: sectionId },
            {
                $push: {
                    subSection: newSubSection._id,
                }
            },
            { new: true })

        //TODO:
        //HW: log update section here , after adding populate
        // return response

        return res.status(200).json({
            success: true,
            message: "subSection created successfully"
        })


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wong while creating subsection",
            error: error.message,
        })
    }
}

exports.updateSubSection = async (req, res) => {
    try {

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wong while updating subsection",
            error: error.message,
        })
    }
}

exports.deleteSubSection = async (req, res) => {
    try {

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wong while deleting subsection",
            error: error.message,
        })
    }
}
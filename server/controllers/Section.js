const Section = require("../models/Section");
const Course = require("../models/Course")

exports.createSection = async (req, res) => {
    try {
        //fetch data
        const { sectionName, courseId } = req.body;
        //validate data
        if (!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message: "Invalid Data"
            })
        }
        //create new section
        const newSection = await Section.create({ sectionName });
        //update course with section body
        const updatedCourseDetails = await Course.findByIdAndUpdate(courseId,
            {
                $push: {
                    courseContent: newSection._id
                }
            },
            { new: true }
        )

        //HW: Use populate to replace sections/subSection both in updatedCourseDetails
        //return response
        return res.status(200).json({
            success: true,
            message: "New Section create successfully",
            updatedCourseDetails,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "unable to create section, please try again",
            error: error.message,
        })
    }
}

exports.updateSection = async (req, res) => {
    try {

        //fetch data
        const { sectionName, sectionId } = req.body
        //validate data
        if (!sectionId || !sectionName) {
            return res.status(400).json({
                success: false,
                message: "Invalid Data"
            })
        }

        //update section
        await Section.findByIdAndUpdate(sectionId, { sectionName }, { new: true })

        //return response
        return res.status(200).json({
            success: true,
            message: "Section updated successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "unable to update section, please try again",
            error: error.message,
        })
    }
}

exports.deleteSection = async (req, res) => {
    try {

        const { sectionId } = req.params

        if (!sectionId) {
            return res.status(400).json({
                success: false,
                message: "Invalid Data"
            })
        }

        //TODO: do we need to delete sectionId from course Schema

        await Section.findByIdAndDelete(sectionId);

        return res.status(200).json({
            success: true,
            message: "Section deleted successfully",
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "unable to delete section, please try again",
            error: error.message,
        })
    }
}
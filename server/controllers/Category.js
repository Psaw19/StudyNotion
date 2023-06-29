const Category = require("../models/Category")

exports.createCategory = async (req, res) => {
    try {

        //fetch data
        const { name, description } = req.body;

        //validate data
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "fill all fields"
            })
        }

        //create entry in db
        const categoryDetails = await Category.create({
            name: name,
            description: description
        });
        console.log(categoryDetails);

        //return response
        return res.status(200).json({
            success: true,
            message: "category created successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.showAllCategories = async (req, res) => {
    try {

        const allcategorys = await Category.find({}, { name: true, description: true });

        res.status(200).json({
            success: true,
            message: "All categories returned successfully",
            allcategorys,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.categoryPageDetails = async (req, res) => {
    try {

        //get categoryId
        const { categoryId } = req.body

        //get courses for specified categoryId
        const selectedCategory = await Category.findById(categoryId).populate("courses").exec()

        //validate
        if (!selectedCategory) {
            return res.status(404).json({
                success: false,
                message: "Data not found",
            })
        }

        //get courses of different categories
        const differentCategories = await Category.find({
            _id: { $ne: categoryId },
        })
            .populate("courses")
            .exec();

        //get top 10 selling courses
        //HW - write it on your own

        // return response
        res.status(200).json({
            success: true,
            message: "Category details returned successfully",
            data: {
                selectedCategory,
                differentCategories
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
const jwt = require("jsonwebtoken");
require("dotenv").config();

//auth
exports.auth = (req, res, next) => {
    console.log('-----------------INSIDE AUTH MIDDLEWARE-----------------')
    try {
        //extract token
        const token = req.cookies.token
            || req.body.token
            || req.header("Authorisation").replace("Bearer ", "");

        //if token is missing return response
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            })
        }

        //verify token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log('JWT =>', decode);
            req.user = decode;

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }
        next();

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Unable to verify token",
        })
    }
}

//isStudent
exports.isStudent = async (req, res, next) => {
    console.log('-----------------INSIDE IS STUDENT MIDDLEWARE-----------------')
    try {
        if (req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "Protected routes for student"
            })
        }
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to verify student role"
        })
    }
}

//isInstructor
exports.isInstructor = async (req, res, next) => {
    console.log('-----------------INSIDE IS INSTRUCTOR MIDDLEWARE-----------------')
    try {
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "Protected routes for Instructor"
            })
        }

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to verify Instructor role"
        })
    }
}

//isAdmin
exports.isAdmin = async (req, res, next) => {
    console.log('-----------------INSIDE IS ADMIN MIDDLEWARE-----------------')
    try {

        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "Protected routes for Admin"
            })
        }
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to verify Admin role"
        })
    }
}
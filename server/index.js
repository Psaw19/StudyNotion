const express = require('express');
const app = express();

const userRoutes = require("./routes/User")
const profileRoutes = require("./routes/Profile")
const courseRoutes = require("./routes/Course")
const paymentRoutes = require("./routes/Payment")
const contactRoutes = require("./routes/Contact")
const dotenv = require("dotenv")
const database = require("./config/database")
const cookieParser = require("cookie-parser")
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload")

dotenv.config();
const port = process.env.PORT || 4000;

//database connect
database.connect();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
)

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
)

//cloudinary connect
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/profile", profileRoutes)
app.use("/api/v1/course", courseRoutes)
app.use("/api/v1/payment", paymentRoutes)
app.use("/api/v1", contactRoutes)

app.get('/', (req, res) => res.send('<h1>Hello World!<h1>'))
app.listen(port, () => console.log(`Server is running on port ${port}!`))
const express = require('express')
const router = express.Router()

const { ContactUsController } = require('../controllers/ContactUs')

router.post('/contact', ContactUsController)

module.exports = router
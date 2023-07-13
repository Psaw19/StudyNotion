const { contactUsEmail } = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender")

exports.ContactUsController = async (req, res) => {
    try {

        const { firstName, lastName, email, phoneNumber, message, countryCode } = req.body

        const mailResponse = await mailSender(
            email,
            "Thankyou for contacting us",
            contactUsEmail(email, firstName, lastName, message, phoneNumber, countryCode)
        );

        console.log(mailResponse)

        if (!mailResponse) {
            return res.json({
                success: false,
                message: 'Unable to submit'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Thankyou for contacting'
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
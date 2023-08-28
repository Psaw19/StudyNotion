import React from 'react'
import ReviewSlider from '../components/common/ReviewSlider'
import Footer from '../components/common/Footer'
import ContactDetails from '../components/core/ContactPage/ContactDetails'
import ContactUs from '../components/core/ContactPage/ContactUs'


const Contact = () => {
    return (
        <div className='bg-richblack-900'>

            <div className='flex flex-col gap-14 layout'>
                <ContactDetails />
                <ContactUs />
            </div>

            <ReviewSlider />
            <Footer />

        </div>
    )
}

export default Contact
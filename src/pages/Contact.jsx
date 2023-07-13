import React from 'react'
import ReviewSlider from '../components/common/ReviewSlider'
import Footer from '../components/common/Footer'
import ContactDetails from '../components/core/ContactPage/ContactDetails'
import ContactUs from '../components/core/ContactPage/ContactUs'


const Contact = () => {
    return (
        <div className='bg-richblack-900'>

            <div className='flex gap-14 mx-auto px-[120px] py-16 max-w-[1440px]'>
                <ContactDetails />
                <ContactUs />
            </div>

            <ReviewSlider />
            <Footer />

        </div>
    )
}

export default Contact
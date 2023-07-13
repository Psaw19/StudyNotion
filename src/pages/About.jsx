import React from 'react'
import Footer from '../components/common/Footer'
import HeroSection from '../components/core/AboutPage/HeroSection'
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from '../components/core/AboutPage/FoundingStory'
import VisionAndMission from '../components/core/AboutPage/VisionAndMission'
import ReviewSlider from '../components/common/ReviewSlider'
import Stats from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactUs from '../components/core/AboutPage/ContactUs'

const About = () => {
    return (
        <div className='text-richblack-5 bg-richblack-900 font-inter'>
            {/* Section 1 */}
            <HeroSection />

            {/* Section 2 */}
            <div className='h-20' />
            <Quote />

            {/* Section 3 */}
            <FoundingStory />
            <VisionAndMission />

            {/* Section 4 */}
            <Stats />
            <LearningGrid />


            {/* Section 5 */}
            <ContactUs />


            {/* Section6 */}
            <ReviewSlider />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default About
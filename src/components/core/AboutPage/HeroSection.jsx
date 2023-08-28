import React from 'react'
import HighlightText from '../../common/HighlightText'
import banner1 from '../../../assets/Images/aboutus1.webp'
import banner3 from '../../../assets/Images/aboutus3.webp'
import banner2 from '../../../assets/Images/aboutus2.webp'

const HeroSection = () => {
    return (
        <div className='bg-richblack-900'>
            <div className='relative flex flex-col items-center space-y-4 lg:pb-56 layout'>

                <div className='mx-auto space-y-4'>
                    <h1 className='text-4xl font-semibold text-center'>
                        Driving Innovation in Online Education for a
                        <HighlightText text={'Brighter Future'} />
                    </h1>
                    <p className='text-base font-medium text-center text-richblack-300'>
                        Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                    </p>
                </div>
                <div className='flex flex-col justify-center gap-4 p-2 mx-auto lg:absolute lg:-bottom-20 lg:flex-row'>
                    <img src={banner1} alt="banner1" className='lg:h-64' />
                    <img src={banner2} alt="banner2" className='lg:h-64' />
                    <img src={banner3} alt="banner3" className='lg:h-64' />
                </div>
            </div>
        </div>

    )
}

export default HeroSection
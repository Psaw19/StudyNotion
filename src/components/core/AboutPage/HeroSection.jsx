import React from 'react'
import HighlightText from '../../common/HighlightText'
import banner1 from '../../../assets/Images/aboutus1.webp'
import banner3 from '../../../assets/Images/aboutus3.webp'
import banner2 from '../../../assets/Images/aboutus2.webp'

const HeroSection = () => {
    return (
        <div className='bg-richblack-900'>
            <div className='relative pt-16 pb-72 px-[120px] space-y-4 max-w-[1440px] flex flex-col mx-auto '>

                <div className='w-8/12 mx-auto space-y-4'>
                    <h1 className='text-4xl font-semibold text-center'>
                        Driving Innovation in Online Education for a
                        <HighlightText text={'Brighter Future'} />
                    </h1>
                    <p className='text-base font-medium text-center text-richblack-300'>
                        Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                    </p>
                </div>
                <div className='absolute flex justify-center gap-4 mx-auto -bottom-20'>
                    <img src={banner1} alt="banner1" />
                    <img src={banner2} alt="banner2" />
                    <img src={banner3} alt="banner3" />
                </div>
            </div>
        </div>

    )
}

export default HeroSection
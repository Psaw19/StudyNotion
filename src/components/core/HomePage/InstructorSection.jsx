import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from '../../common/HighlightText'
import CTAbutton from './CTAbutton'
import { FaArrowRight } from 'react-icons/fa'

function InstructorSection() {
    return (
        <div className='flex flex-col gap-10 lg:flex-row md:gap-16 xl:gap-24 layout'>
            <div className='px-5 sm:px-20 lg:px-0 lg:w-1/2'>
                <img src={Instructor} alt="Instructor" className='w-full shadow-white shadow-[-15px_-15px_0_0]' />
            </div>

            <div className='flex flex-col justify-center gap-3 lg:w-1/2 sm:px-10'>
                <div className='text-4xl font-semibold'>
                    <p className='text-richblack-5'>Become an</p>
                    <HighlightText text={'Instructor'} />
                </div>
                <p className='text-base font-medium tracking-wider text-richblack-300'>
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>
                <div className='mt-[52px]'>
                    <CTAbutton active={true} linkTo={'/signup'}>Start Teaching Today <FaArrowRight className='ml-2' /></CTAbutton>
                </div>

            </div>
        </div>
    )
}

export default InstructorSection
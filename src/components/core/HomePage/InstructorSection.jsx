import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from '../../common/HighlightText'
import CTAbutton from './CTAbutton'
import { FaArrowRight } from 'react-icons/fa'

function InstructorSection() {
    return (
        <div className='max-w-[1440px] px-[120px] py-20 flex mx-auto gap-[98px]'>
            <div className='shadow-white shadow-[-20px_-20px_0_0] w-[1200px]'>
                <img src={Instructor} alt="Instructor" className='w-full' />
            </div>

            <div className='flex flex-col justify-center gap-3'>
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
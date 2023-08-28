import React from 'react'
import HighlightText from '../../common/HighlightText'
import CTAbutton from './CTAbutton'
import know_your_progress from '../../../assets/Images/Know_your_progress.svg'
import compare_with_others from '../../../assets/Images/Compare_with_others.svg'
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.svg'

function LearningLanguageSection() {
    return (
        <div className='flex flex-col layout'>

            <div className='w-full space-y-3'>

                <h1 className='w-full text-4xl font-semibold text-center text-richblack-900'>
                    Your swiss knife for <HighlightText text={"learning any language"} />
                </h1>
                <p className='w-full text-base font-medium text-center sm:px-10 font-inter'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </p>
            </div>
            <div className='relative flex flex-col items-center justify-center lg:flex-row h-[230vw] sm:h-[1200px] lg:h-fit'>

                <img src={know_your_progress} alt="know_your_progress" className='absolute z-10 -translate-y-[75%] lg:translate-y-0 lg:-translate-x-[75%]' />

                <img src={compare_with_others} alt="compare_with_others" className='z-20' />

                <img src={plan_your_lessons} alt="plan_your_lessons" className='absolute z-30 translate-y-[75%] lg:translate-y-0 lg:translate-x-[65%]' />
            </div>

            <div className='flex justify-center'>
                <CTAbutton active={true} linkTo={"/signup"}>Learn More</CTAbutton>
            </div>

        </div>
    )
}

export default LearningLanguageSection
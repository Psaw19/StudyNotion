import React from 'react'
import HighlightText from '../../common/HighlightText'
import CTAbutton from './CTAbutton'
import know_your_progress from '../../../assets/Images/Know_your_progress.svg'
import compare_with_others from '../../../assets/Images/Compare_with_others.svg'
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.svg'

function LearningLanguageSection() {
    return (
        <div className='max-w-[1440px] px-[120px] py-20 flex flex-col mx-auto'>

            <div className='w-full px-[220px] space-y-3'>
                <h1 className='w-full text-4xl font-semibold text-center text-richblack-900'>
                    Your swiss knife for <HighlightText text={"learning any language"} />
                </h1>
                <p className='w-full px-10 text-base font-medium text-center font-inter'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </p>
            </div>
            <div className='relative flex items-center justify-center'>
                <img src={know_your_progress} alt="know_your_progress" className='absolute z-10 left-10' />

                <img src={compare_with_others} alt="compare_with_others" className='z-20' />

                <img src={plan_your_lessons} alt="plan_your_lessons" className='absolute right-0 z-30' />
            </div>

            <div className='flex justify-center'>
                <CTAbutton active={true} linkTo={"/signup"}>Learn More</CTAbutton>
            </div>

        </div>
    )
}

export default LearningLanguageSection
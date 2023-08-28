import React from 'react'
import { LearningGridArray } from '../../../data/learning-grid'
import CTAbutton from '../HomePage/CTAbutton'

const LearningGrid = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 layout'>
                <div className='flex flex-col gap-8 mb-5 lg:mb-0 lg:col-span-2 mr-14'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='heading'>
                            World-Class Learning for <span className='highlight bg-gradient-to-br from-[#5433FF] via-[#20BDFF] to-[#38f188]'>Anyone, Anywhere</span>
                        </h1>
                        <p className='text-base font-medium text-richblack-300'>
                            Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
                        </p>
                    </div>
                    <CTAbutton active={true} linkTo={'/login'}>Learn More</CTAbutton>

                </div>

                {
                    LearningGridArray.map((element) => (
                        <div key={element.order}
                            className={`p-8 flex flex-col gap-5
                        ${element.order === 3 && 'lg:col-start-2'}
                        ${element.order % 2 !== 0 ? 'bg-richblack-700' : 'bg-richblack-800'}
                        `}
                        >
                            <h1 className='text-lg font-semibold text-richblack-5'>
                                {element.heading}
                            </h1>
                            <p className='text-sm text-richblack-100'>
                                {element.description}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LearningGrid
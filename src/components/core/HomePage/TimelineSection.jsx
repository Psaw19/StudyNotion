import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import TimelineImage from '../../../assets/Images/TimelineImage.png'

function TimelineSection() {

    const data = [
        {
            logo: Logo1,
            heading: "Leadership",
            subheading: "Fully committed to the success company",
        },
        {
            logo: Logo2,
            heading: "Responsibility",
            subheading: "Fully committed to the success company",
        },
        {
            logo: Logo3,
            heading: "Flexibility",
            subheading: "Fully committed to the success company",
        },
        {
            logo: Logo4,
            heading: "Solve the problem",
            subheading: "Fully committed to the success company",
        }
    ]

    return (
        <div className='flex justify-between'>

            <div className='relative flex flex-col gap-8 my-auto'>

                <div className='border-l w-[1px] border-dashed h-10 border-richblack-100 absolute left-[38px] top-[80px]'></div>
                <div className='border-l w-[1px] border-dashed h-10 border-richblack-100 absolute left-[38px] top-[195px]'></div>
                <div className='border-l w-[1px] border-dashed h-10 border-richblack-100 absolute left-[38px] top-[310px]'></div>

                {
                    data.map((val, index) => {
                        return (
                            <div key={index} className='flex items-center gap-6 px-3 py-4'>
                                <div className='bg-white h-[52px] w-[52px] rounded-full flex justify-center items-center p-1'>
                                    <img src={val.logo} alt="logo" />
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>{val.heading}</p>
                                    <p className='text-sm'>{val.subheading}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className='relative'>

                <div className=''>
                    <img src={TimelineImage} alt="TimelineImage" className='h-[545px]' />
                </div>

                {/* <div className='w-[700px] h-[700px] bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] absolute top-0 left-0 -rotate-45 skew-x-12 skew-y-12 rounded-full blur-3xl'></div> */}

                <div className='absolute z-50 flex p-10 -bottom-14 left-[118px] bg-caribbeangreen-700'>
                    <div className='flex flex-wrap gap-6'>
                        <p className='flex items-center justify-center text-3xl font-bold text-white'>
                            10
                        </p>
                        <div className='text-sm uppercase text-caribbeangreen-300'>

                            <p>Years</p>
                            <p>Experiences</p>

                        </div>
                    </div>

                    <div className='w-[1px] border border-caribbeangreen-500 mx-[52px]'></div>

                    <div className='flex flex-wrap gap-6'>
                        <p className='flex items-center justify-center text-3xl font-bold text-white' >
                            250
                        </p>
                        <div className='text-sm uppercase text-caribbeangreen-300'>

                            <p>Type of</p>
                            <p>Courses</p>

                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default TimelineSection
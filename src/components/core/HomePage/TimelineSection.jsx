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
        <div className='flex flex-col gap-10 lg:flex-row'>

            <div className='flex flex-col gap-8 mx-auto'>

                {
                    data.map((val, index) => {
                        return (
                            <div key={index} className='flex items-center py-4 gap-6 xl:px-3 w-full max-w-[375px]'>
                                <div className='bg-white h-[52px] w-[52px] rounded-full flex justify-center items-center p-1 relative'>
                                    <img src={val.logo} alt="logo" />
                                    {
                                        index !== 3 &&
                                        <div className='border-l w-[1px] border-dashed h-10 border-richblack-100 absolute -bottom-[100%]' />
                                    }
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

            <div className='relative mx-auto'>

                <div >
                    <img src={TimelineImage} alt="TimelineImage" className='w-full' />
                </div>

                <div className='absolute top-0 left-0 z-50 bg-caribbeangreen-700'>

                    <div className='grid grid-cols-2 p-3 sm:p-5'>
                        <p className='flex items-center justify-center text-3xl font-bold text-white'>
                            10
                        </p>
                        <div className='text-sm uppercase text-caribbeangreen-300'>

                            <p>Years</p>
                            <p>Experiences</p>

                        </div>
                    </div>

                    {/* <div className='w-[1px] border border-caribbeangreen-500 mx-[52px]'></div> */}

                    <div className='grid grid-cols-2 p-3 sm:p-5'>
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
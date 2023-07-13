import React from 'react'

const Stats = () => {

    const data = [
        {
            stats: '5K',
            title: 'Active Students'
        },
        {
            stats: '10+',
            title: 'Mentors'
        },
        {
            stats: '20+',
            title: 'Courses'
        },
        {
            stats: '50+',
            title: 'Awards'
        },
    ]

    return (
        <div className='bg-richblack-800'>
            <div className='max-w-[1440px] mx-auto flex px-[120px] py-16 justify-evenly'>
                {
                    data.map((stat, index) => (
                        <div key={index} className='flex flex-col items-center justify-center gap-3'>
                            <p className='text-3xl font-bold text-richblack-5'>
                                {stat.stats}
                            </p>
                            <p className='text-base font-semibold text-richblack-500'>
                                {stat.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Stats
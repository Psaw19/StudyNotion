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
            <div className='grid grid-cols-4 layout'>
                {
                    data.map((stat, index) => (

                        <div key={index} className='flex flex-col items-center justify-center gap-3'>
                            <p className='text-2xl font-bold sm:text-3xl text-richblack-5'>
                                {stat.stats}
                            </p>
                            <p className='text-sm font-semibold text-center sm:text-base text-richblack-500'>
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
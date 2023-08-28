import React from 'react'
import { HiUsers } from "react-icons/hi2";
import { ReactComponent as ChartLogo } from '../../../assets/Images/fi-sr-chart-tree.svg'


function CourseCard({ data, currentCard, setCurrentCard }) {
    return (
        <div
            onClick={() => setCurrentCard(data.heading)}
            className={`w-11/12 max-w-xs font-inter cursor-pointer ${currentCard === data.heading ? 'bg-pure-greys-5 shadow-[10px_10px_0_0] shadow-brown-50' : 'bg-richblack-800'}`}>

            <div className='border-b border-dashed px-6 pt-8 pb-[52px] flex flex-col gap-3 border-richblack-400'>

                <h1 className={`text-xl font-semibold ${currentCard === data.heading ? 'text-richblack-800' : 'text-richblack-25'}`}>
                    {data.heading}
                </h1>
                <p className={` ${currentCard === data.heading ? 'text-richblack-500' : 'text-richblack-400'}`}>
                    {data.description}
                </p>
            </div>
            <div className={`flex justify-between px-6 py-4 font-medium  ${currentCard === data.heading ? 'text-blue-500' : 'text-richblack-300'}`}>
                <div className='flex items-center gap-2'>
                    <HiUsers className='text-xl' />{data.level}
                </div>
                <div className='flex items-center gap-2'>
                    <ChartLogo fill={`${currentCard === data.heading ? '#0A5A72' : '#838894'}`} />{data.lessonNumber} lessons
                </div>
            </div>
        </div>
    )
}

export default CourseCard
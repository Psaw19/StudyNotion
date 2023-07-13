import React, { useState } from 'react'
import HighlightText from '../../common/HighlightText'
import CTAbutton from './CTAbutton'
import { FaArrowRight } from 'react-icons/fa'
import { HomePageExplore } from '../../../data/homepage-explore'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'

function ExploreMore() {

    const tabnames = [
        "Free",
        "New to coding",
        "Most popular",
        "Skills paths",
        "Career paths"
    ]

    const [currentTab, setCurrentTab] = useState(tabnames[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCard = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((courses) => courses.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }


    return (
        <div className='w-full px-[120px] pb-24 flex flex-col gap-9 -mb-72'>
            <div>

                <h1 className='w-full text-4xl font-semibold text-center text-richblack-5'>Unlock the <HighlightText text={"Power of Code"} /> </h1>
                <p className='w-full mt-2 text-base font-medium text-center text-richblack-300'>Learn to Build Anything You Can Imagine</p>

            </div>
            <div className='flex gap-3 p-1 mx-auto rounded-full bg-richblack-800 w-fit text-richblack-500'>
                {
                    tabnames.map((element, index) => {
                        return (
                            <div
                                onClick={() => { setMyCard(element) }}
                                className={`px-6 py-2 cursor-pointer hover:text-richblack-5 hover:bg-richblack-900 transition-all duration-200 rounded-full 
                                ${currentTab === element ? 'bg-richblack-900 text-richblack-5' : ''}`}
                                key={index}>
                                {element}
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-9 py-8 px-[52px] '>
                {
                    courses.map((course, index) => {
                        return (
                            <CourseCard
                                key={index}
                                data={course}
                                currentCard={currentCard}
                                setCurrentCard={setCurrentCard}
                            />
                        )
                    })
                }

            </div>

            <div className='flex justify-center w-full '>
                <div className='flex gap-6'>
                    <CTAbutton active={true} linkTo={"/signup"}>
                        Explore Full Catalog
                        <FaArrowRight className='ml-2' />
                    </CTAbutton>

                    {/* <CTAbutton active={false} linkTo={"/login"}>
                        Learn More
                    </CTAbutton> */}

                    <Link to='/signup' className={`w-fit px-6 py-3 text-[13px] flex items-center rounded-md hover:scale-95 transition-all duration-300 font-semibold bg-richblack-900`}>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ExploreMore
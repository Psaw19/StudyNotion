import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAbutton from '../components/core/HomePage/CTAbutton'
import Footer from '../components/Footer'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'

const Home = () => {
    return (
        <div className='font-inter'>

            {/* Section 1 */}

            <div className='flex flex-col items-center justify-between w-11/12 mx-auto max-w-maxContent gap-9'>
                <Link to="/signup" >
                    <div className='mt-16 transition-all duration-300 rounded-full hover:scale-110 bg-richblack-800 group'>
                        <div className='flex items-center gap-2 px-5 py-2 text-xs font-bold text-richblack-100 group-hover:text-richblack-5'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='flex flex-col items-center gap-2'>
                    <div className='text-4xl font-semibold'>
                        Empower Your Future With
                        <HighlightText text={"Coding Skills"} />
                    </div>
                    <div className='w-[70%] text-base font-bold text-center text-richblack-300'>
                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                    </div>
                </div>


                <div className='flex gap-6'>
                    <CTAbutton linkTo={"/signup"} active={true}>
                        Learn More
                    </CTAbutton>
                    <CTAbutton linkTo={"/login"} active={false}>
                        Book a Demo
                    </CTAbutton>
                </div>

                <div>
                    <video
                        loop
                        muted
                        autoPlay
                        className='w-[1035px] shadow-white shadow-[20px_20px_0_0]'
                    >
                        <source src={Banner} type='video/mp4' />
                    </video>
                </div>

                <div className='max-w-[1440px] px-[120px] py-20 flex flex-col gap-10'>


                    <CodeBlocks
                        position={"flex-row"}
                        heading={
                            <p className='text-4xl font-semibold tracking-tighter font-inter'>
                                Unlock your
                                <HighlightText text={"coding potential "} />
                                with our online courses.
                            </p>
                        }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

                        ctabtn1={
                            {
                                text: "Try it Yourself",
                                active: true,
                                linkTo: "/signup",
                            }
                        }

                        ctabtn2={
                            {
                                text: "Learn More",
                                active: false,
                                linkTo: "/login",
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a><ahref="three/">Three</a>\n</nav>`}

                        color={"from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF]"}

                    />

                </div>

                <div className='max-w-[1440px] px-[120px] py-20 flex flex-col gap-10'>

                    <CodeBlocks
                        position={"flex-row-reverse"}
                        heading={
                            <p className='w-5/12 text-4xl font-semibold tracking-tighter font-inter'>
                                Start
                                <HighlightText text={"coding in seconds"} />
                            </p>
                        }
                        subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}

                        ctabtn1={
                            {
                                text: "Continue Lesson",
                                active: true,
                                linkTo: "/signup",
                            }
                        }

                        ctabtn2={
                            {
                                text: "Learn More",
                                active: false,
                                linkTo: "/login",
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a><ahref="three/">Three</a>\n</nav>`}

                        color={'from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'}
                    />
                </div>

            </div>


            {/* Section 2 */}


            {/* Section 3 */}


            {/* Section 4 */}

            <Footer />

        </div>
    )
}

export default Home
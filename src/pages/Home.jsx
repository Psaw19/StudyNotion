import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import HighlightText from '../components/common/HighlightText'
import CTAbutton from '../components/core/HomePage/CTAbutton'
import Footer from '../components/common/Footer'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
    return (
        <div className='font-inter bg-richblack-900'>


            {/* Section 1 */}

            <div className='flex flex-col items-center justify-between mx-auto text-white w-[1440px] gap-9'>

                <Link to="/signup" >
                    <div className='p-1 mt-16 transition-all duration-300 rounded-full hover:scale-95 bg-richblack-800 group shadow-[0_1px_0_0] shadow-richblack-700 hover:shadow-none'>
                        <div className='flex items-center gap-2 px-8 py-2 text-xs font-bold rounded-full text-richblack-100 hover:bg-richblack-900'>
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
                    <CTAbutton linkTo={"/signup"} active={true} >
                        Learn More
                    </CTAbutton>
                    <CTAbutton linkTo={"/login"} active={false} >
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


                <div className='w-full'>
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

                        textcolor={"text-brown-100"}
                        bg_gradient_color={"from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF]"}

                    />

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

                        textcolor={"text-richblack-50"}

                        bg_gradient_color={'from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'}
                    />

                </div>
                <ExploreMore />
            </div>


            {/* Section 2 */}

            <div className='w-full bg-pure-greys-5'>

                <div className='flex items-center justify-center bg_homepage h-80'>

                </div>


                <div className='max-w-[1440px] px-[120px] py-20 flex flex-col gap-14 mx-auto'>

                    <div className='flex w-full gap-3'>
                        <div className='w-1/2 text-4xl font-semibold'>
                            <p>
                                Get the skills you need for a
                                <HighlightText text={"job that is in demand."} />
                            </p>
                        </div>

                        <div className='flex flex-col w-1/2 gap-12 pl-32'>
                            <p>
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </p>
                            <CTAbutton active={true} linkTo={"/signup"}>Learn More</CTAbutton>
                        </div>
                    </div>

                    <TimelineSection />

                </div>

                <LearningLanguageSection />

            </div>

            {/* Section 3 */}
            <div className='w-full bg-richblack-900'>
                <InstructorSection />
                <ReviewSlider />
            </div>

            {/* Section 4 */}

            <Footer />

        </div>
    )
}

export default Home
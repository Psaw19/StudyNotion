import React from 'react'
import { FooterLink2 } from "../../data/footer-links"
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo/Logo-Full-Light.png'
import { FaGoogle, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {

    const company = [
        {
            title: "About",
            linkto: "/about",
        },
        {
            title: "Careers",
            linkto: "/careers",
        },
        {
            title: "Affiliates",
            linkto: "/affiliates",
        },

    ]

    const resources = [
        {
            title: "Articles",
            linkto: "/articles",
        },
        {
            title: "Blogs",
            linkto: "/blogs",
        },
        {
            title: "Charge Sheet",
            linkto: "/charge-sheet",
        },
        {
            title: "Code Challenges",
            linkto: "/code-challenges",
        },
        {
            title: "Docs",
            linkto: "/docs",
        },
        {
            title: "Projects",
            linkto: "/projects",
        },
        {
            title: "Videos",
            linkto: "/videos",
        },
        {
            title: "Workspaces",
            linkto: "/workspaces",
        },

    ]

    const support = [
        {
            title: "Help Center",
            linkto: "/help=center",
        },
    ]

    const plans = [
        {
            title: "Paid Membership",
            linkto: "/paid-membership",
        },
        {
            title: "For Students",
            linkto: "/for-students",
        },
        {
            title: "Business Solutions",
            linkto: "/business-solutions",
        },

    ]
    const community = [
        {
            title: "Forums",
            linkto: "/forums",
        },
        {
            title: "Chapters",
            linkto: "/chapters",
        },
        {
            title: "Events",
            linkto: "/events",
        },

    ]
    return (
        <div className='w-full bg-richblack-800 font-inter'>

            <div className='grid grid-cols-1 lg:grid-cols-2 layout border-richblack-600'>

                <div className='grid grid-cols-2 md:grid-cols-3'>

                    <div className='flex flex-col gap-6'>

                        <img src={Logo} alt="Logo" className='w-40' />

                        <div className='space-y-3'>
                            <h1 className='font-semibold text-richblack-100'>Company</h1>
                            <div className='flex flex-col gap-2 text-sm text-richblack-400'>
                                {
                                    company.map((element, index) => {
                                        return (
                                            <Link key={index} to={element.linkto}> {element.title} </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='flex gap-3 text-2xl text-richblack-400'>
                            <FaFacebook />
                            <FaGoogle />
                            <FaTwitter />
                            <FaYoutube />
                        </div>

                    </div>

                    <div className='space-y-5 mt-14'>
                        <div className='space-y-3'>
                            <h1 className='font-semibold text-richblack-100'>Resources</h1>
                            <div className='flex flex-col gap-2 text-sm text-richblack-400'>
                                {
                                    resources.map((element, index) => {
                                        return (
                                            <Link key={index} to={element.linkto}> {element.title} </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='font-semibold text-richblack-100'>Support</h1>
                            <div className='flex flex-col gap-2 text-sm text-richblack-400'>
                                {
                                    support.map((element, index) => {
                                        return (
                                            <Link key={index} to={element.linkto}> {element.title} </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 col-span-2 mt-5 md:col-span-1 md:grid-cols-1 md:mt-14'>
                        <div className='space-y-3'>
                            <h1 className='font-semibold text-richblack-100'>Plans</h1>
                            <div className='flex flex-col gap-2 text-sm text-richblack-400'>
                                {
                                    plans.map((element, index) => {
                                        return (
                                            <Link key={index} to={element.linkto}> {element.title} </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <h1 className='font-semibold text-richblack-100'>Community</h1>
                            <div className='flex flex-col gap-2 text-sm text-richblack-400'>
                                {
                                    community.map((element, index) => {
                                        return (
                                            <Link key={index} to={element.linkto}> {element.title} </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 border-richblack-700 lg:border-l lg:pl-12'>
                    {
                        FooterLink2.map((val) => {
                            return (
                                <div key={val.title} className='mt-5 space-y-2 text-base font-semibold text-richblack-100'>
                                    <h1>{val.title}</h1>
                                    {
                                        val.links.map((element) => {
                                            return (
                                                <Link
                                                    key={element.title}
                                                    to={element.link}
                                                    className='block text-sm font-normal text-richblack-400 hover:text-richblack-300'
                                                >
                                                    {element.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>


            </div>


            <div className='flex flex-col items-center justify-around gap-2 py-10 font-medium border-t lg:flex-row text-richblack-300 layout border-richblack-700'>

                <div className='flex justify-between divide-x divide-richblack-700'>
                    <div className='pr-3'>
                        Privacy Policy
                    </div>
                    <div className='px-3'>
                        Cookie Policy
                    </div>
                    <div className='pl-3'>
                        Terms
                    </div>

                </div>
                <div>
                    Made with ❤️ Codehelp ©️ 2023 StudyNotion
                </div>

            </div>

        </div>
    )
}

export default Footer
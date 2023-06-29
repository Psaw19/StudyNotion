import React from 'react'
import { FooterLink2 } from "../data/footer-links"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full mt-10 bg-richblack-800 font-inter'>

            <div className='flex w-full py-10 mx-auto border-b max-w-maxContent border-richblack-600'>

                <div className='w-1/2'>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>



                <div className='flex justify-between w-1/2 pl-10 border-l border-richblack-700'>
                    {
                        FooterLink2.map((val) => {
                            return (
                                <div key={val.title} className='text-base font-semibold text-richblack-100'>
                                    {val.title}
                                    {
                                        val.links.map((sub) => {
                                            return (
                                                <Link
                                                    key={sub.title}
                                                    to={sub.link}
                                                    className='block text-sm font-normal text-richblack-400 hover:text-richblack-300'
                                                >
                                                    {sub.title}
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
            <div className='flex justify-between w-full py-10 mx-auto font-medium max-w-maxContent text-richblack-300'>

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
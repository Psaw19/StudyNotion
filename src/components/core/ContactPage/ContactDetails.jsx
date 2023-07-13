import React from 'react'
import { contactDetails } from '../../../data/contactDetails'
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const ContactDetails = () => {
    return (
        <div className='p-5 rounded-lg bg-richblack-800 h-fit'>
            {
                contactDetails.map((val, idx) => {
                    let Icon = Icon1[val.icon] || Icon2[val.icon] || Icon3[val.icon]
                    return (

                        <div key={idx} className='flex gap-2 px-10 py-5 text-sm font-medium text-richblack-200'>
                            <Icon size={25} />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold text-richblack-5'>
                                    {val.heading}
                                </h1>
                                <p>
                                    {val.description}
                                </p>
                                <p>
                                    {val.details}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ContactDetails
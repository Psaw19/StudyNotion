
import React from 'react'
import { Link } from 'react-router-dom'

const CTAbutton = ({ children, active, linkTo }) => {
    return (
        <Link to={linkTo}
            className=
            {`w-fit
            px-6 
            py-3 
            text-[13px] 
            flex 
            items-center 
            rounded-md 
            ${active ? "bg-yellow-50 text-richblack-800" : "bg-richblack-800 text-white shadow-richblack-700 shadow-[2px_2px_0_0]"} 
            hover:scale-95
            hover:shadow-none
            transition-all 
            duration-300 
            font-semibold
            `}
        >
            {children}
        </Link>
    )
}

export default CTAbutton
import React from 'react'

const IconBtn = ({ children, onclick, active, type }) => {
    return (
        <button
            type={type}
            onClick={onclick}
            className={`${active ? 'bg-yellow-50' : 'bg-richblack-400'} px-5 py-2 rounded text-richblack-900 text-base font-medium`}>
            {children}
        </button>
    )
}

export default IconBtn
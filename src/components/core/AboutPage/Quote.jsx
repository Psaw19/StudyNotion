import React from 'react'
import HighlightText from '../../common/HighlightText'

const Quote = () => {
    return (
        <div className='py-[90px] px-[120px] max-w-[1440px] mx-auto text-richblack-100 text-4xl text-center font-semibold'>
            " We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={'combines technology'} />, <span className='highlight gradient6'>expertise</span>, and community to create an <span className='highlight gradient8'>unparalleled educational experience.</span>
        </div>
    )
}

export default Quote
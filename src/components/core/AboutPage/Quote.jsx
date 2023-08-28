import React from 'react'
import HighlightText from '../../common/HighlightText'

const Quote = () => {
    return (
        <div className='text-center lg:mt-12 text-richblack-100 heading layout'>
            " We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={'combines technology'} />, <span className='highlight gradient6'>expertise</span>, and community to create an <span className='highlight gradient8'>unparalleled educational experience.</span>
        </div>
    )
}

export default Quote
import React from 'react'
import CTAbutton from './CTAbutton'
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

function CodeBlocks({ position, heading, subheading, ctabtn1, ctabtn2, codeblock, color }) {

    return (
        <div className={`flex w-full h-full gap-[98px] ${position}`}>
            <div className='flex flex-col w-1/2 gap-3'>
                {heading}
                <p className='text-base text-richblack-300'>
                    {subheading}
                </p>

                <div className='flex gap-6 mt-[52px]'>
                    <CTAbutton active={ctabtn1.active} linkTo={ctabtn1.linkTo} >
                        {ctabtn1.text}
                        <FaArrowRight className='ml-2' />
                    </CTAbutton>

                    <CTAbutton active={ctabtn2.active} linkTo={ctabtn2.linkTo}>
                        {ctabtn2.text}
                    </CTAbutton>
                </div>
            </div>
            <div className='relative w-1/2 p-8 font-mono text-sm'>

                <div
                    className={`absolute -top-8 -left-1 w-3/4 h-3/4 -rotate-45 skew-x-12 skew-y-12 rounded-full bg-gradient-to-b ${color} blur-3xl opacity-30`}
                >
                </div>

                <div className='flex bg-richblack-800'>
                    <div className='z-10 p-2 text-richblack-400'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>

                    </div>
                    <div className='z-10 py-2 pr-2 font-bold'>
                        <TypeAnimation
                            sequence={[codeblock, 2000, ""]}
                            repeat={Infinity}
                            omitDeletionAnimation={true}
                            style={{ display: "block", whiteSpace: "pre-line" }}
                            className='text-brown-100'
                        />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CodeBlocks
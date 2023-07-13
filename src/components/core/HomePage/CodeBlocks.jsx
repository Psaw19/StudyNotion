import React from 'react'
import CTAbutton from './CTAbutton'
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

function CodeBlocks({ position, heading, subheading, ctabtn1, ctabtn2, bg_gradient_color, textcolor }) {

    return (
        <div className={`flex w-full h-full gap-[98px] ${position} justify-center px-[120px] py-[90px] items-center`}>

            {/* Section 1 */}
            <div className='flex flex-col w-[486px] gap-3'>
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

            {/* Section 2 */}

            <div className='relative w-[45%] p-8 font-mono text-sm'>

                <div
                    className={`
                    absolute -top-5
                    w-[270px] h-[270px] 
                    -rotate-45 skew-x-12 skew-y-12 rounded-full 
                    bg-gradient-to-b ${bg_gradient_color} blur-2xl opacity-20`}
                >
                </div>

                <div className='flex p-2 border-2 bg-richblack-800 border-richblack-700'>
                    <div className='px-1 text-richblack-400'>
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
                    <div className='pl-2 font-bold'>
                        <TypeAnimation
                            sequence={['<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>', 2000, ""]}
                            repeat={Infinity}
                            omitDeletionAnimation={true}
                            style={{ display: "block", whiteSpace: "pre-line" }}
                            className={textcolor}
                        />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CodeBlocks
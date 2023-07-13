import React from 'react'
import Image from '../../../assets/Images/FoundingStory.png'

const FoundingStory = () => {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto flex gap-32 px-[120px] py-16'>
                <div className='flex flex-col w-1/2 gap-6 pl-8'>
                    <h1 className='text-4xl font-semibold highlight gradient4'>
                        Our Founding Story
                    </h1>
                    <div className='flex flex-col gap-4 text-base font-medium text-richblack-300'>
                        <p>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                        </p>
                        <p>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                        </p>
                    </div>

                </div>
                <div className='w-1/2 p-8 pr-16'>
                    <img src={Image} alt="FoundingStory" />
                </div>

            </div>
        </div>
    )
}

export default FoundingStory
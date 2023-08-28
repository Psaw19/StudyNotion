import React from 'react'
import Image from '../../../assets/Images/FoundingStory.png'

const FoundingStory = () => {
    return (
        <div>
            <div className='flex flex-col gap-10 lg:flex-row lg:gap-16 layout'>
                <div className='flex flex-col gap-6 lg:w-1/2'>
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
                <div className='flex items-center justify-center'>
                    <img src={Image} alt="FoundingStory" />
                </div>

            </div>
        </div>
    )
}

export default FoundingStory
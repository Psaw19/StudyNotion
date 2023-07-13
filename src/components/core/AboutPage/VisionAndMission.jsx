import React from 'react'

const VisionAndMission = () => {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto flex gap-32 px-[120px] py-16'>
                <div className='flex flex-col gap-6 pl-8'>
                    <h1 className='text-4xl font-semibold highlight gradient8'>
                        Our Vision
                    </h1>
                    <p className='text-base font-medium text-richblack-300'>
                        With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                    </p>
                </div>

                <div className='flex flex-col gap-6 pr-8 '>
                    <h1 className='text-4xl font-semibold highlight gradient5'>
                        Our Mission
                    </h1>
                    <p className='text-base font-medium text-richblack-300'>
                        our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default VisionAndMission
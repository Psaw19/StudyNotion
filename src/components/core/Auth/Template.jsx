import React from 'react'
import bgImage from '../../../assets/Images/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({ heading, description1, description2, image, formType }) => {
    return (
        <div className='w-full bg-richblack-900 grow'>
            <div className='max-w-[1440px] px-[120px] mx-auto h-full flex justify-between'>
                <div className='w-[550px] p-8 flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold tracking-wide text-richblack-5'>
                        {heading}
                    </h1>
                    <div>
                        <p className='text-lg text-richblack-100'>
                            {description1}
                        </p>
                        <p className='italic font-bold text-blue-100 font-edu-sa'>
                            {description2}
                        </p>
                    </div>
                    <div className='pt-5'>
                        {
                            formType === 'signup' ? <SignupForm /> : <LoginForm />
                        }
                    </div>

                </div>

                <div className='flex items-center justify-end grow'>
                    <div className='relative'>
                        <img src={image} alt="banner" className='absolute -translate-x-5 -translate-y-5' loading='lazy' />
                        <img src={bgImage} alt="bgImage" loading='lazy' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Template
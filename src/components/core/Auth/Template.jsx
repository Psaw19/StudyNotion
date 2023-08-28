import React from 'react'
import bgImage from '../../../assets/Images/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({ heading, description1, description2, image, formType }) => {
    return (
        <div className='w-full bg-richblack-900 grow'>
            <div className='flex flex-col-reverse items-center h-full layout lg:flex-row'>

                <div className='max-w-[500px] w-full flex flex-col gap-2 mx-auto justify-center'>
                    <h1 className='text-3xl heading text-richblack-5'>
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

                <div className='flex items-center justify-center p-5 md:p-8'>
                    <div className='relative w-full max-w-[500px]'>
                        <img
                            src={image}
                            alt="banner"
                            loading='lazy'
                            className='absolute z-10 w-auto -translate-x-2 -translate-y-2 md:-translate-x-3 md:-translate-y-3'
                        />

                        <img
                            src={bgImage}
                            alt="bgImage"
                            loading='lazy'
                            className='w-auto translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3'

                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Template
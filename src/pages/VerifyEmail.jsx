import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { RxCounterClockwiseClock } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sendOtp, signUp } from '../services/operations/authApi'


const Otp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [otp, setOtp] = useState('');
    const { signupData } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signUp(signupData, otp, navigate))
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(signUp(signupData, otp, navigate))
        }
    };

    const resendOtp = () => {
        dispatch(sendOtp(signupData.email, navigate))
    }

    return (
        <div className='flex justify-center h-full text-richblack-5'>
            <div className='flex flex-col gap-6 w-[508px] p-8 mt-20'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-4xl font-semibold'>
                        Verify Email
                    </h1>
                    <p className='text-lg text-richblack-100'>
                        A verification code has been sent to you. Enter the code below
                    </p>
                </div>
                <form onSubmit={handleSubmit} onKeyDown={handleKeyPress} className='flex flex-col gap-6'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType='tel'
                        renderSeparator={<span ></span>}
                        renderInput={(props) => <input {...props} className='w-16 py-4 shadow-richblack-700 text-base font-medium shadow-[0_2px_0_0] text-center rounded-lg text-richblack-5 bg-richblack-800' style={{}} placeholder='-' />}
                        containerStyle={'justify-between flex'}
                        onKeyDown={handleKeyPress}
                    />
                    <button
                        type='submit'
                        className='flex items-center justify-center w-full p-3 text-base font-medium rounded-md bg-yellow-50 text-richblack-900'>
                        Create Account
                    </button>

                </form>
                <div className='flex justify-between text-base font-medium'>
                    <Link to='/login' className='flex items-center gap-2 cursor-pointer'>
                        <HiOutlineArrowNarrowLeft className='text-xl' />
                        <p>Back to login</p>
                    </Link>
                    <div
                        onClick={() => { resendOtp() }}
                        className='flex items-center gap-2 text-blue-100 cursor-pointer'>
                        <RxCounterClockwiseClock />
                        <p>Resend OTP</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Otp
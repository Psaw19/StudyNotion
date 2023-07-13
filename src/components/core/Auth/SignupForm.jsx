import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ACCOUNT_TYPE } from '../../../utils/constant'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '../../../store/slices/authSlice';
import { sendOtp } from '../../../services/operations/authApi';
import { toast } from 'react-hot-toast';

const SignupForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { loading } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined,
        accountType: ACCOUNT_TYPE.STUDENT
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log('Printing from signup form formdata', formData)
            dispatch(setSignupData(formData))
            dispatch(sendOtp(formData.email, navigate))
        } else {
            toast.error('Passwords do not match')
        }
    }

    const setUserAccountType = (role) => {
        setFormData((prev) => ({
            ...prev,
            accountType: role
        }))
    }

    return (
        <div className='relative flex flex-col gap-4 text-richblack-5 font-inter'>

            {loading && <div className='absolute top-0 left-0 z-10 w-full h-full opacity-5 bg-richblack-900' />}

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex rounded-full shadow-[0_1px_0_0] bg-richblack-800 shadow-richblack-700 w-fit p-1'>
                    <div
                        onClick={() => setUserAccountType(ACCOUNT_TYPE.STUDENT)}
                        className={`px-[18px] py-[6px] ${formData.accountType === ACCOUNT_TYPE.STUDENT ? 'text-richblack-5 bg-richblack-900' : 'text-richblack-200'}  rounded-full cursor-pointer`}>
                        {ACCOUNT_TYPE.STUDENT}
                    </div>
                    <div
                        onClick={() => setUserAccountType(ACCOUNT_TYPE.INSTRUCTOR)}
                        className={`px-[18px] py-[6px] ${formData.accountType === ACCOUNT_TYPE.INSTRUCTOR ? 'text-richblack-5 bg-richblack-900' : 'text-richblack-200'}  rounded-full cursor-pointer`}>
                        {ACCOUNT_TYPE.INSTRUCTOR}
                    </div>
                </div>
                <div className='flex w-full gap-4'>
                    <label className='grow'>
                        <p className='mb-1.5 text-sm font-normal'>
                            First Name<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name='firstName'
                            placeholder='Enter first name'
                            onChange={handleChange}
                            className='p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 placeholder:text-richblack-200 placeholder:text-base placeholder:font-medium focus:outline-none bg-richblack-800 w-full' />
                    </label>
                    <label className='grow'>
                        <p className='mb-1.5 text-sm font-normal'>
                            Last Name<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name='lastName'
                            placeholder='Enter last name'
                            onChange={handleChange}
                            className='p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 placeholder:text-richblack-200 placeholder:text-base placeholder:font-medium focus:outline-none bg-richblack-800 w-full' />
                    </label>
                </div>
                <label>
                    <p className='mb-1.5 text-sm font-normal'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        name='email'
                        placeholder='Enter email address'
                        onChange={handleChange}
                        className='p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 placeholder:text-richblack-200 placeholder:text-base placeholder:font-medium focus:outline-none bg-richblack-800 w-full' />
                </label>

                <div className='flex gap-4'>
                    <label>
                        <p className='mb-1.5 text-sm font-normal'>
                            Password<sup className='text-pink-200'>*</sup>
                        </p>
                        <div className='flex items-center p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 bg-richblack-800 '>
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter Password'
                                onChange={handleChange}
                                className='placeholder:text-richblack-200 placeholder:text-base placeholder:font-medium focus:outline-none grow bg-richblack-800'

                            />
                            {
                                showPassword ?
                                    <AiOutlineEyeInvisible
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className='cursor-pointer' />
                                    :
                                    <AiOutlineEye
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className='cursor-pointer' />
                            }
                        </div>
                    </label>
                    <label>
                        <p className='mb-1.5 text-sm font-normal'>
                            Confirm Password<sup className='text-pink-200'>*</sup>
                        </p>
                        <div className='flex items-center p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 bg-richblack-800 '>
                            <input
                                required
                                type={showConfirmPassword ? 'text' : 'password'}
                                name='confirmPassword'
                                placeholder='Re-enter Password'
                                onChange={handleChange}
                                className='placeholder:text-richblack-200 placeholder:text-base placeholder:font-medium focus:outline-none grow bg-richblack-800'
                            />
                            {
                                showConfirmPassword ?
                                    <AiOutlineEyeInvisible
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className='cursor-pointer ' />
                                    :
                                    <AiOutlineEye
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className='cursor-pointer' />
                            }
                        </div>
                    </label>
                </div>
                <button
                    disabled={loading}
                    type='submit'
                    className={`flex items-center justify-center w-full p-3 text-base font-medium rounded-md text-richblack-900 ${loading ? 'bg-yellow-400' : 'bg-yellow-50'}`}>
                    Create Account
                </button>

                <div className='text-sm'>
                    Already Registered? <Link className='text-blue-100' to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
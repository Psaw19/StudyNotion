import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { login } from '../../../services/operations/authApi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { loading } = useSelector((state) => state.auth)

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData)
        dispatch(login(formData, navigate))
    }

    return (
        <div className='relative text-richblack-5'>
            {loading && <div className='absolute top-0 left-0 z-10 w-full h-full bg-richblack-900 opacity-5' />}
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <label >
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
                <label className='flex flex-col gap-1.5'>
                    <p className='text-sm font-normal'>
                        Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <div
                        className='flex items-center w-full p-3 rounded-md shadow-[0_1px_0_0] shadow-richblack-600 bg-richblack-800 '>
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
                                    className='cursor-pointer'
                                    onClick={() => setShowPassword((prev) => !prev)}
                                />
                                :
                                <AiOutlineEye
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className='cursor-pointer' />
                        }
                    </div>
                    <div className='flex justify-end'>
                        <Link
                            to={'/reset-password-token'}
                            className='text-xs text-blue-100 cursor-pointer w-fit'>
                            Forgot Password
                        </Link>
                    </div>
                </label>

                <button
                    disabled={loading}
                    type='submit'
                    className={`flex items-center justify-center w-full p-3 text-base font-medium rounded-md text-richblack-900 ${loading ? 'bg-yellow-400' : 'bg-yellow-50'}`}>
                    Sign In
                </button>

                <div className='text-sm'>
                    Not yet registered? <Link className='text-blue-100' to='/signup'>Sign Up</Link>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
import React, { useState } from 'react'
import { VscDashboard, VscSignOut, VscTriangleDown } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../services/operations/authApi'

function ProfileDropDown() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const { user } = useSelector((state) => state.profile)

    // console.log('user=====>>>>', user)

    return (
        <div className='relative cursor-pointer'>

            <div className='flex items-center gap-1' onClick={() => setShow((prev) => !prev)}>
                <div className=''>
                    <img src={user?.image} alt="dp" className='w-8 rounded-full' />
                </div><VscTriangleDown />
            </div>

            {show &&
                <div className='absolute z-50 -translate-x-20 translate-y-2 border divide-y rounded-md bg-richblack-800 border-richblack-700 divide-richblack-700'>
                    <Link
                        to={'/dashboard/my-profile'}
                        className='flex items-center gap-1 px-4 py-2 transition-all duration-200 hover:scale-105 hover:text-richblack-25'>
                        <VscDashboard />
                        Dashboard
                    </Link>

                    <button
                        className='flex items-center w-full gap-1 px-4 py-2 transition-all duration-200 hover:text-richblack-25 hover:scale-105'
                        onClick={() => dispatch(logout(navigate))}
                    >
                        <VscSignOut />
                        Logout
                    </button>
                </div>
            }
        </div>
    )
}

export default ProfileDropDown
import React from 'react'
import Sidebar from '../components/core/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='flex w-full text-richblack-5 grow'>
            <Sidebar />
            <div className='w-full text-richblack-5'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
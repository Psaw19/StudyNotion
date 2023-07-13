import React from 'react'
import { NavLink, matchPath, useLocation } from 'react-router-dom'
import * as Icons from 'react-icons/vsc'

const SidebarLinks = ({ text, path, icon }) => {

    const Icon = Icons[icon]
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }

    return (
        <NavLink
            to={path}
            className={`flex items-center gap-3 px-6 py-2 text-base font-medium
            ${matchRoute(path) ? 'text-yellow-50 bg-yellow-800 border-l-2 border-yellow-50' : 'text-richblack-300'}
            `}
        >
            <Icon className='text-lg' />
            {text}
        </NavLink>
    )
}

export default SidebarLinks
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Logo/Logo-Full-Light.png'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiconnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { BsChevronDown } from 'react-icons/bs'
import { ACCOUNT_TYPE } from '../../utils/constant'

const Navbar = () => {

    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { totalItems } = useSelector((state) => state.cart)
    const [subLinks, setSubLinks] = useState([]);

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }

    // console.log('user-----------------', user)
    // console.log('token---------', token)

    const fetchSubLinks = async () => {
        try {
            // console.log("fetching sublinks.....");
            const result = await apiconnector('GET', categories.CATEGORIES_API);
            const { allcategories } = result.data;
            setSubLinks(allcategories);
            // console.log('Printing sub links result --> ', allcategories);

        } catch (error) {
            console.log('error while getting Catalog list')
        }
    }

    useEffect(() => {
        fetchSubLinks();
    }, [])


    return (
        <div className='w-full border-b border-richblack-700 bg-richblack-800'>
            <div className='w-[1440px] mx-auto px-[120px] py-3 flex gap-8 justify-between'>
                <Link to={'/'}>
                    <img src={Logo} alt="Logo" className='w-40 h-8' />
                </Link>

                <div className={`flex items-center gap-4`}>
                    {
                        NavbarLinks.map((link, index) => {
                            return (
                                <div key={index} className='text-richblack-25'>
                                    {
                                        link?.title === 'Catalog' ?
                                            <div className='relative group'>
                                                <p className='flex items-center gap-1 cursor-pointer'>{link.title}<BsChevronDown /></p>

                                                <div className='absolute rotate-45 rounded-md translate-x-[183%] w-7 h-7 bg-richblack-5 invisible group-hover:visible'></div>

                                                <div className='absolute translate-x-[-30%] translate-y-3 flex flex-col w-[300px] p-3 rounded-lg bg-richblack-5 text-richblack-900 group-hover:visible invisible'>
                                                    {
                                                        subLinks.map((link, index) => (
                                                            <Link key={index} className='p-3 rounded-lg hover:bg-richblack-100'>
                                                                {link.name}
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <Link to={link?.path}>
                                                <p className={`${matchRoute(link?.path) ? 'text-brown-25' : 'text-richblack-25'}`}>
                                                    {link.title}
                                                </p>
                                            </Link>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center gap-4 text-richblack-200'>
                    {
                        user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                            <Link to='/dashboard/cart' className='relative'>
                                <AiOutlineShoppingCart className='text-2xl' />

                                {
                                    totalItems > 0 && (
                                        <span className='absolute top-0 right-0 z-50 text-[8px]'>
                                            {totalItems}
                                        </span>
                                    )
                                }

                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={'/login'} className='px-4 py-2 border rounded-lg border-richblack-700'>
                                Log in
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={'/signup'} className='px-4 py-2 border rounded-lg border-richblack-700'>
                                Sign up
                            </Link>
                        )
                    }
                    {
                        token !== null && (
                            <ProfileDropDown />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
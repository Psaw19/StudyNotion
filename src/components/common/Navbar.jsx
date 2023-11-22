import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiconnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { BsChevronDown } from "react-icons/bs";
import { ACCOUNT_TYPE } from "../../utils/constant";
import { VscSignOut } from "react-icons/vsc";
import { logout } from "../../services/operations/authApi";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const [subLinks, setSubLinks] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // console.log('user-----------------', user)
  // console.log('token---------', token)

  const fetchSubLinks = async () => {
    try {
      console.log("fetching sublinks.....");
      console.log(categories.CATEGORIES_API);
      const result = await apiconnector("GET", categories.CATEGORIES_API);
      const { allcategories } = result.data;
      setSubLinks(allcategories);
      console.log("Printing sub links result --> ", allcategories);
    } catch (error) {
      console.log("error while getting Catalog list");
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubLinks();
  }, []);

  return (
    <div className="relative w-full border-b border-richblack-700 bg-richblack-800">
      <nav className="w-11/12 max-w-[1440px] mx-auto lg:px-[120px] py-3 flex items-center justify-between h-12">
        {/* LOGO */}
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-28 md:w-40 md:h-8" />
        </Link>

        {/* NAVBAR LINKS */}
        <div className={`items-center gap-4 hidden md:flex`}>
          {NavbarLinks.map((link, index) => {
            return (
              <div key={index} className="text-richblack-25">
                {link?.title === "Catalog" ? (
                  <div className="relative group">
                    <p className="flex items-center gap-1 cursor-pointer">
                      {link.title}
                      <BsChevronDown />
                    </p>

                    <div className="absolute rotate-45 rounded-md translate-x-[183%] w-7 h-7 bg-richblack-5 invisible group-hover:visible"></div>

                    <div className="absolute translate-x-[-30%] translate-y-3 flex flex-col w-[300px] p-3 rounded-lg bg-richblack-5 text-richblack-900 group-hover:visible invisible">
                      {subLinks.map((link, index) => (
                        <Link
                          key={index}
                          className="p-3 rounded-lg hover:bg-richblack-100"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-brown-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="items-center hidden gap-4 md:flex text-richblack-200">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl" />

              {totalItems > 0 && (
                <span className="absolute top-0 right-0 z-50 text-[8px]">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link
              to={"/login"}
              className="px-4 py-2 border rounded-lg border-richblack-700"
            >
              Log in
            </Link>
          )}
          {token === null && (
            <Link
              to={"/signup"}
              className="px-4 py-2 border rounded-lg border-richblack-700"
            >
              Sign up
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>

        <div className="flex items-center gap-3 md:hidden text-richblack-5">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-lg" />

              {totalItems > 0 && (
                <span className="absolute top-0 right-0 z-50 text-[8px]">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {!toggle && (
            <AiOutlineMenu onClick={() => setToggle((toggle) => !toggle)} />
          )}
        </div>
      </nav>

      {/* NAVBAR MOBILE VIEW */}
      <nav
        className={`text-richblack-5 flex flex-col h-screen w-screen items-center bg-black/60 backdrop-blur-2xl absolute z-[100] top-0 transition-all duration-300 ${
          toggle ? "right-0" : "-right-full"
        }`}
      >
        {/* NAVLINKS */}
        <div className={`flex flex-col w-full`}>
          <div className="flex justify-end p-5 text-lg">
            <AiOutlineClose onClick={() => setToggle((toggle) => !toggle)} />
          </div>

          {NavbarLinks.map((link, index) => {
            return (
              <div
                key={index}
                className="flex justify-center text-richblack-25"
              >
                {link?.title === "Catalog" ? (
                  <div>
                    <p
                      onClick={() =>
                        setShowCatalog((showCatalog) => !showCatalog)
                      }
                      className="flex items-center justify-center gap-2 px-4 py-2 cursor-pointer"
                    >
                      {link.title}
                      <BsChevronDown />
                    </p>

                    <div
                      className={`flex flex-col ${
                        showCatalog ? "scale-100 h-fit" : "scale-0 h-0"
                      }`}
                    >
                      {subLinks.map((link, index) => (
                        <Link
                          onClick={() => setToggle((toggle) => !toggle)}
                          key={index}
                          className="px-4 py-2 text-xs text-center border-t border-b border-dotted border-richblack-400"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    onClick={() => setToggle((toggle) => !toggle)}
                    to={link?.path}
                  >
                    <p
                      className={`px-4 py-2 ${
                        matchRoute(link?.path)
                          ? "text-brown-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* LOGIN LOGOUT */}
        <div className="flex flex-col">
          {token !== null && (
            <button
              className="flex items-center w-full gap-1 px-4 py-2 transition-all duration-200 hover:text-richblack-25 hover:scale-105"
              onClick={() => dispatch(logout(navigate))}
            >
              <VscSignOut />
              Logout
            </button>
          )}

          {token === null && (
            <Link
              onClick={() => setToggle((toggle) => !toggle)}
              to={"/login"}
              className="px-4 py-2"
            >
              Log in
            </Link>
          )}
          {token === null && (
            <Link
              onClick={() => setToggle((toggle) => !toggle)}
              to={"/signup"}
              className="px-4 py-2"
            >
              Sign up
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

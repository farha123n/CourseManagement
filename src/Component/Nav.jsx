import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { IoLogoYoutube } from "react-icons/io5";
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { toast } from 'react-toastify';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
     console.log(user?.photoURL)
      const handleLogOut = async () => {
        try {
          await logOut();
          toast.success("User successfully Logged Out!");
        } catch (error) {
          toast.error("Logout failed!");
          console.error(error);
        }
      };
    const link = (
        <>
            <NavLink className='text-white mx-2' to="/">Home</NavLink>
            {
                user&&<NavLink to='addCourse'>Add Course</NavLink>
            }
        </>
    );

    return (
        <div>
            <div className="navbar bg-[#dc3545] shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="btn rounded-full text-red-500 text-xl"><IoLogoYoutube /></a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    {link}
                </div>

                <div className="navbar-end">
                    {user ? (
                        <>
                            <div className="relative group inline-block">
                                <img className='w-12 m-4 rounded-full' src={user.photoURL} alt="Profile" />
                                <div className="absolute bottom-full left-1/2 mt-0 top-5  hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded">
                                    {user.displayName}
                                </div>
                            </div>
                            <button onClick={handleLogOut} className='mx-4 text-white'>Log Out</button>
                        </>
                    ) : (
                        <>
                            <NavLink className='mx-4 text-white' to='login'>Login</NavLink>
                            <NavLink className='mx-4 text-white' to='register'>Sign Up</NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;

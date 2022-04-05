import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header bg-indigo-300 p-5   fixed top-0 w-full'>
            <nav className='text-2xl font-bold text-center '>
                    <NavLink to="/ " className="mr-4" > Home </NavLink>
                    <NavLink to="/Reviews " className="mr-4" > Reviews</NavLink>
                    <NavLink to="/Dashbord " className="mr-4" > Dashbord</NavLink>
                    <NavLink to="/Blogs " className="mr-4" > Blogs</NavLink>
                    <NavLink to="/About " className="mr-4" > About</NavLink>                    
            </nav>
        </div>
    );
};

export default Header;
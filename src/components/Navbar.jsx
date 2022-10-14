import React from 'react';
import "../App";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center w-full h-[10vh] bg-[#a67c00]">
      <div>
        <h1 className='text-white p-sm font-medium text-xl'>Book App</h1>
      </div>
      <div>
        <Link to="/favorite" className='no-underline'>
          <h3 className='text-white text-lg'>Your Favorites</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

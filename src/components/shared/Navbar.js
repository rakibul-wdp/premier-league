import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
    </>
  );
  return (
    <div className='navbar bg-secondary px-72 py-4'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52 text-base-100 text-lg font-bold'
          >
            {menuItems}
          </ul>
        </div>
        <Link to={'/'} className='btn btn-ghost normal-case text-xl text-base-100 bg-base-100'>
          <img
            className='w-20'
            src='https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png'
            alt=''
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0 text-base-100 text-lg font-bold'>{menuItems}</ul>
      </div>
      <div className='navbar-end'>
        <Link to={'/login'} className='btn bg-secondary text-base-100 font-fold text-lg'>
          SignUp/LogIn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

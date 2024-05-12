import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Footer() {
  return (
    <footer className='bg-white border-y'>
      <div className='mx-auto w-screen max-w-screen-xl p-4 py-6 lg:py-8 '>
        <div className='md:flex md:justify-around'>
          <div className='mb-6 md:mb-0'>
            <Link to="/">

                <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" className='h-16 mr-3'  />
            
            </Link>
          </div>
          <div className='grid'>

            <h2 className='uppercase text-sm font-semibold text-gray-900 '>Resouces</h2>
            <ul className='text-gray-600 font-medium '>
              <li className='mt-4'>
                <Link to="/" className='hover:underline'>
                  Home
                </Link>
              </li>
              <li className='mt-1'>
                <Link to="/about" className='hover:underline'>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='font-semibold text-gray-900 uppercase text-sm'>follow us</h2>
            <ul className='font-medium text-gray-600'>
              <li className='mt-4'>
                <Link to="/" className='hover:underline'>
                ghithub
                </Link>
              </li>
              <li  className='mt-1'>
                <Link to="/" className='hover:underline'>
                Discord
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='font-semibold text-sm uppercase text-gray-900'>legal</h2>
            <ul className='font-medium text-gray-600'>
              <li className='mt-4'>
                <Link to="#" className='hover:underline'>
                  Privacy Policy
                </Link>
              </li>
              <li className='mt-1'>
                <Link to="#" className='hover:underline'>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between' >
        <span className='text-sm text-gray-500 sm:text-center ml-10'>
          © 2023 Piyush Sharma .All Rights Reserved
        </span>
      </div>
    </footer>
  )
}
export default Footer

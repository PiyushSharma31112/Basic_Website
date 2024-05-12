import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Header() {
  return (
   <>
      <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
          <div style={{width : "100%", backgroundColor : "white", height : "70px", display : "flex", justifyContent : "space-evenly"}}>
            
          
          <Link to="/" style={{display : "flex", placeItems : "center"}} >
            <img className = "h-12" src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo"  style={{marginRight : "3"}} />
          </Link>  

          <div className='flex items-center lg:order-2 gap-4'>
            <Link to="#">
              <button className='shadow p-2 rounded-xl text-sm '>Log in</button>
            </Link>

            <Link to="#" >
              <button className='bg-orange-600 p-2 rounded-xl text-white text-sm'>Get Started</button>
            </Link>
          </div>             

            <div className='hidden items-center lg:w-auto justify-between w-full lg:flex'>
              <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>

                  <NavLink to="/" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover`}>

                    Home

                  </NavLink>
                 
                </li>

                <li>

                  <NavLink to="/about" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover`}>

                    About

                  </NavLink>
                 
                </li>

                <li>

                  <NavLink to="/contact" className={({isActive}) => `block py-2 pr-4 pl-3 duration-20 ${isActive ? "text-orange-700" : "text-gray-700"}  hover`}>

                    Contact

                  </NavLink>
                 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
   </>
  )
}

export default Header

{/* <div className='flex place-items-center w-auto'>
             
             </div> */}


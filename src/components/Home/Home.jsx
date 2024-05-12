import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Home() {
  return (
    <div className='mx-auto w-full max-w-7xl mt-16'>
      <aside className='relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16'>
        <div className='relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-6'>
          <div className='mt-80 sm:mt-1 md:flex flex-col max-w-xl space-y-8 text-center sm:text-right sm:ml-auto'>
              <h2 className='text-4xl font-bold sm:text-5xl'>Download Now</h2>
              <div className='text-4xl'>Lorem ipsum </div>

            <Link to="#">
              <button className='bg-orange-600 p-3 text-xl text-white rounded-2xl cursor-pointer mr-10'>Download Now </button>
            
            </Link>  
            
            <Link className= "inline-flex text-white items-center">
          
              <svg 
                fill='white'
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule='evenodd'
                clipRule="evenodd"
              >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
          
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className='absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full'>
          <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
        </div>
      </aside>

      <div className='grid place-items-center sm:mt-20'>
        <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
      </div>

      <h1 className='text-center mt-7 mb-7 font-bold text-3xl'>Created by Piyush</h1>

    </div>
  )
}

export default Home

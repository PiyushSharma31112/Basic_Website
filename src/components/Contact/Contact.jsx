import React from 'react'

function Contact() {
  return (
   
    <div className='flex mt-10 justify-center h-auto mb-14 w-screen gap-16'>
      

      <div className='bg-gray-100 w-auto h-auto rounded-xl shadow-xl'>

        <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg'>
          <h1 className='font-extrabold text-center text-3xl'>Get in touch : </h1>  
          <p className='font-medium text-gray-600 text-lg p-5'>
            Fill in the form to start a conversation
          </p>
        
          <div className='flex items-center mt-4 text-gray-600'>
             <svg
               fill="none"
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="1.5"
               viewBox="0 0 24 24"
               className="w-8 h-8 text-gray-500"
           >
           <path                       
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                Acme Inc, Street, State, Postal Code
            </div>
          </div>
          <div className='flex items-center mt-4 text-gray-600'>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                +44 1234567890
            </div>
          </div>

          <div className='flex items-center mt-4 text-gray-600'>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
             info@acme.org
            </div>
          </div>
        </div>
      </div>
      
         
      <form action="#">
        <div className='flex flex-col'>

        <input className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" type="name" placeholder='Full Name' />
        
        <input className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" type="email" placeholder='Email' />
        
        <input className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" type="number" placeholder='Number'/>

        <button type='submit' className='md:w-32 font-bold hover:bg-blue-dark text-center ml-14 mt-7 p-2 rounded-xl w-20 bg-orange-600 text-white'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact

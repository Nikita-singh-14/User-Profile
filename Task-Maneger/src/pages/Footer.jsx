import React from 'react'
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <div className=' bottom-0 w-full bg-white border-t border-gray-200 z-10 h-15'>
      <div className='max-w-[1700px] mx-auto px-10 py-4 text-sm sm:flex flex-col justify-center gap-5 items-center'>
        <div className='sm:flex flex-col max-w-[1700px] mx-auto px-10 py-4 text-sm gap-2 items-center justify-center'>
          <p className='order-2 md:order-1 text-gray-700'>@ 2025 Airbnb, Inc.</p>
          <ul className='flex gap-2 order-1 md:order-2 text-gray-700'>
            <li className='hover:underline cursor-pointer'>Privacy</li>
            <li className='hover:underline cursor-pointer'>Terms</li>
            <li className='hover:underline cursor-pointer'>Sidemap</li>
            <li className='hover:underline cursor-pointer'>Company details</li>
          </ul>
        </div>
        <div className='flex items-center justify-center'>
          <CiGlobe />
          <p>English(IN)</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { FaAirbnb } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaGolfBall } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaServicestack } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import DarkMode from '../component/DarkMode';
const Navbar = () => {
  return (
    <div className='h-[10rem] text-sm top-0 sticky shadow-2xl nav' style={{ background: 'var(--bg-color)', zIndex: 1000}}>
        <div className='flex justify-between h-[5rem] items-center'>
            <div className='flex text-red-500 text-2xl items-center'>
                <FaAirbnb />
                <b>Tripforlife</b>
            </div>
            <div className='lg:flex  hidden gap-7'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <IoIosHome className='text-red-500 text-4xl' />
                    <h4 style={{ color: 'var(--text-color)' }}>Homes</h4>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <FaGolfBall className='text-red-500 text-2xl'/>
                    <h4 style={{ color: 'var(--text-color)' }}>Exprences</h4>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <FaServicestack className='text-red-500 text-2xl'/>
                    <h4>services</h4>
                </div>
            </div>
            <div className='sm:flex hidden items-center gap-5'>
                <p className='w-[8rem] h-[2rem] rounded-full items-center flex justify-center hover:bg-gray-200  cursor-pointer'>Become a host</p>
                <div className='w-[2rem] h-[2rem]  rounded-full items-center flex justify-center text-lg hover:bg-gray-200  cursor-pointer'
                style={{ color: 'var(--text-color)' }}><CiGlobe /></div>
                <div className="flex items-center gap-4 text-2xl text-gray-700">
                    <DarkMode/>
                </div>
                
            </div>
            <div className='w-[2rem] h-[2rem] rounded-full items-center flex justify-center text-lg hover:bg-gray-200  cursor-pointer'
                style={{ color: 'var(--text-color)' }}><RxHamburgerMenu /></div>
        </div>

        <div className='flex justify-center '>
        <div className='md:flex hidden border rounded-full w-full max-w-2xl shadow-md p-1 items-center'>
            <div className='flex flex-col justify-center items-center flex-grow px-10 py-4 w-[15rem] h-[3.5rem] hover:bg-gray-200 rounded-full cursor-pointer'>
                <p>Where</p>
                <h6>Search destination</h6>
            </div>
            <div className='flex flex-col justify-center items-center flex-grow px-7 py-4 w-[8rem] h-[3.5rem] hover:bg-gray-200  rounded-full cursor-pointer'>
                <p>Check in</p>
                <h6>Add dates</h6>
            </div>
            <div className='flex flex-col justify-center items-center flex-grow px-7 py-4 w-[8rem] h-[3.5rem] hover:bg-gray-200  rounded-full cursor-pointer'>
                <p>Check out</p>
                <h6>Add dates</h6>
            </div>
            <div className='flex justify-evenly items-center flex-grow px-7 py-4 w-[15rem] h-[3.5rem] hover:bg-gray-200  rounded-full cursor-pointer' >
                <div>
                    <p>Who</p>
                    <h6>Add guests</h6>
                </div>
                <div className='w-[2rem] h-[2rem] bg-red-500 rounded-full items-center flex justify-center text-lg hover:bg-red-600 cursor-pointer'><CiSearch /></div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Navbar
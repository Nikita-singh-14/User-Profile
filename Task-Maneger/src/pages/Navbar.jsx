import React, { useState } from 'react';
// react-icons के बजाय Lucide icons का उपयोग किया गया है
import { Home, Compass, Plane, Layers, Globe, Search, Menu } from 'lucide-react'; 
import DarkMode from '../component/DarkMode'; // अब यह फ़ाइल resolve हो जाएगी
import { Link } from 'react-router-dom';

const Navbar = () => {
    // 1. Menu state for mobile responsiveness
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Common style variables for cleaner JSX
    const textColorStyle = { color: 'var(--text-color)' };
    // Sticky header has zIndex 1000, and the mobile menu is 900 (must be higher than main content)
    const navBgStyle = { background: 'var(--bg-color)', zIndex: 1000 }; 
    const linkClasses = 'flex items-center gap-2 py-3 px-4 w-full border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors';


    return (
        <div className='text-sm top-0 sticky shadow-2xl nav' style={navBgStyle} >
            {/* 1. Main Navigation Row */}
            <div className='flex justify-between h-[5rem] items-center px-4 md:px-8 lg:px-12'>
                
                {/* 1.1 Logo link to the Landing Page (Home) */}
                <Link to="/" className='flex text-red-500 text-2xl items-center cursor-pointer gap-2'>
                    {/* FaAirbnb को Lucide Home Icon से बदला गया है */}
                    <Home size={32} className='text-red-500' /> 
                    <b>Tripforlife</b>
                </Link>

                {/* 1.2 Desktop Links (Hidden on small screens) */}
                <div className='hidden lg:flex gap-7' style={textColorStyle}>
                    <Link to="/ladingPage" className='flex items-center gap-1 cursor-pointer'>
                        {/* GiDetour को Compass से बदला गया है */}
                        <Compass size={24} className='text-red-500' />
                        <h4>Activities</h4>
                    </Link>
                    
                    <Link to="/home" className='flex items-center gap-1 cursor-pointer'>
                        {/* IoIosHome को Home से बदला गया है */}
                        <Home size={24} className='text-red-500' />
                        <h4>Homes</h4>
                    </Link>

                    <Link to="/experiences" className='flex items-center gap-1 cursor-pointer'>
                        {/* FaGolfBall को Plane से बदला गया है (Experiences के लिए उपयुक्त) */}
                        <Plane size={24} className='text-red-500'/>
                        <h4>Exprences</h4>
                    </Link>
                    <Link to="/services" className='flex items-center gap-1 cursor-pointer'>
                        {/* FaServicestack को Layers से बदला गया है */}
                        <Layers size={24} className='text-red-500'/>
                        <h4>Services</h4>
                    </Link>
                </div>

                {/* 1.3 Right Side (Host, Globe, DarkMode) - Visible on sm and up */}
                <div className='hidden sm:flex items-center gap-5' style={textColorStyle}>
                    <Link to="/host" className='w-[8rem] h-[2rem] rounded-full items-center flex justify-center hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer'>
                        Become a host
                    </Link>
                    <div className='w-[2rem] h-[2rem] rounded-full items-center flex justify-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer'>
                        {/* CiGlobe को Globe से बदला गया है */}
                        <Globe size={20} />
                    </div>
                    <div className="flex items-center gap-4 text-gray-700">
                        <DarkMode/>
                    </div>
                </div>
                
                {/* 1.4 Hamburger Menu Toggle (Visible on mobile/tablet) */}
                <div 
                    className='sm:hidden w-[2.5rem] h-[2.5rem] rounded-full items-center flex justify-center text-xl hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer'
                    style={textColorStyle}
                    onClick={toggleMenu} // Click handler added here
                >
                    {/* RxHamburgerMenu को Menu से बदला गया है */}
                    <Menu size={24} />
                </div>
            </div>

            {/* 2. Mobile Dropdown Menu (Fixed Overlay) */}
            {isMenuOpen && (
                <div 
                    // Fixed overlay that appears when the menu is open, covering the screen below the Navbar
                    className='lg:hidden fixed inset-0 top-[5rem] bg-white dark:bg-gray-900 shadow-xl overflow-y-auto pb-4 z-[900] transition-transform duration-300' 
                    style={navBgStyle}
                >
                    <div className='flex flex-col p-4 space-y-2' style={textColorStyle}>
                        
                        {/* Navigation Links - Clicking closes the menu */}
                        <Link to="/ladingPage" onClick={toggleMenu} className={linkClasses}>
                            <Compass size={24} className='text-red-500' />
                            <span>Activities</span>
                        </Link>
                        
                        <Link to="/home" onClick={toggleMenu} className={linkClasses}>
                            <Home size={24} className='text-red-500' />
                            <span>Homes</span>
                        </Link>

                        <Link to="/experiences" onClick={toggleMenu} className={linkClasses}>
                            <Plane size={24} className='text-red-500'/>
                            <span>Exprences</span>
                        </Link>
                        
                        <Link to="/services" onClick={toggleMenu} className={linkClasses}>
                            <Layers size={24} className='text-red-500'/>
                            <span>Services</span>
                        </Link>
                        
                        <hr className='my-2 border-gray-200 dark:border-gray-700'/>

                        {/* Additional Links/Features */}
                        <Link to="/host" onClick={toggleMenu} className={linkClasses}>
                            <span>Become a host</span>
                        </Link>
                        <div className='py-3 px-4 flex items-center justify-between'>
                            <span className="text-base">Dark Mode</span>
                            <DarkMode/>
                        </div>
                    </div>
                </div>
            )}


            {/* 3. The Search Bar Row */}
            {/* Kept outside the mobile menu to maintain the original layout */}
            <div className='flex justify-center mb-4'>
                <div className='md:flex hidden border rounded-full w-full max-w-2xl shadow-md p-1 items-center' style={{borderColor: 'var(--border-color)'}}>
                    {/* Search bar details remain the same, added var(--text-color) for visibility */}
                    <div className='flex flex-col justify-center items-center flex-grow px-10 py-4 w-[15rem] h-[3.5rem] hover:bg-gray-200 rounded-full cursor-pointer'>
                        <p style={textColorStyle}>Where</p>
                        <h6 style={textColorStyle}>Search destination</h6>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-grow px-7 py-4 w-[8rem] h-[3.5rem] hover:bg-gray-200 rounded-full cursor-pointer'>
                        <p style={textColorStyle}>Check in</p>
                        <h6 style={textColorStyle}>Add dates</h6>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-grow px-7 py-4 w-[8rem] h-[3.5rem] hover:bg-gray-200 rounded-full cursor-pointer'>
                        <p style={textColorStyle}>Check out</p>
                        <h6 style={textColorStyle}>Add dates</h6>
                    </div>
                    <div className='flex justify-evenly items-center flex-grow px-7 py-4 w-[15rem] h-[3.5rem] hover:bg-gray-200 rounded-full cursor-pointer' >
                        <div>
                            <p style={textColorStyle}>Who</p>
                            <h6 style={textColorStyle}>Add guests</h6>
                        </div>
                        <div className='w-[2rem] h-[2rem] bg-red-500 rounded-full items-center flex justify-center text-lg hover:bg-red-600 cursor-pointer'>
                            {/* CiSearch को Search Icon से बदला गया है */}
                            <Search size={18} className='text-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

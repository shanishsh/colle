import React from 'react'
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import x from '../Header/twitter.png'
import linkedin from '../Header/linkedin.png'
import chat from '../Header/chat.png'
import insta from '../Header/instagram.png'
const NavBar = () => {
  return (
    <>
          <div className='bg-blue-900 flex justify-between items-center py-2 px-3 w-full'>
        <div className='text-white text-sm flex gap-3 max-md:text-xs max-md:gap-2 flex-wrap'>
          <p>&#9742; +91 9429563256</p>
          <p className='max-md:hidden'>&#9993; CampusInfo@gmail.com</p>
        </div>
        <div  className='flex gap-2 '>
          <button className='bg-white rounded-full px-2 py-1 text-blue-900 font-semibold text-xs'> One Form – Many Colleges</button>
          <button className='bg-green-200 text-xs rounded-full py-1 px-2 font-semibold text-green-800'>&#128737; Free Guidance</button>
        </div>
      </div>
    <div className='bg-white bg-opacity-90 sticky top-0 z-10'>

        <nav className='flex justify-between py-3 px-2 border-b-[1px] items-center w-full'>
            <div className='space-y-[1px]'>
              <h1 className='text-xl font-bold mb-0 p-0'>Campus-Info</h1>
              <p className='mt-0 p-0 text-xs'>Your gateway to Dehradun universities</p>
              
            </div>

            <div>
                <ul className='flex gap-5 text-sm text-gray-800 flex-wrap justify-center max-md:gap-2 max-md:text-xs max-md:hidden'>
                    <NavLink to="/universities"><li>Universities</li></NavLink>
                    <NavLink to="/courses"><li>Courses</li></NavLink>

                    <NavLink to="/works"><li>How it Works</li></NavLink>
                    <NavLink to="/story"><li>Success Stories</li></NavLink>
                    <NavLink to="/admission"><li>Blog</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
            </div>

            <div>
              <ul className='flex gap-5 items-center'>
                <li className='max-md:hidden'><img className='h-4 max-md:h-3' src={chat} alt="" /></li>
                <li className='max-md:hidden'><img className='h-4 max-md:h-3' src={x} alt="" /></li>
                <li className='max-md:hidden'><img className='h-4 max-md:h-3' src={linkedin} alt="" /></li>
                <li className='max-md:hidden'><img className='h-4 max-md:h-3' src={insta} alt="" /></li>
                <li className='max-md:text-xs'><Button name="Apply Now"/></li>
              </ul>
            </div>
        </nav>
    </div>
    </>
  )
}

export default NavBar
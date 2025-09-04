import React from 'react'
import NavBar from '../components/Header/NavBar'
import Left from '../components/Hero/left'
import Form from '../components/Hero/Form'
import calander from '../assets/calendar.png'
import { Link } from 'react-router-dom'

const Guide = () => {
  return (
    <>
    <NavBar/>


 <div className='flex items-center gap-2 p-4'>
                <img className='h-8 max-md:h-5' src={calander} alt="" />
            <h3 className=' text-3xl max-lg:2xl font-bold text-gray-800'>Admission Guides</h3>
            </div>

            <div className='flex flex-wrap gap-3 py-3 px-3 w-full justify-center '>
                <div className='bg-white w-[400px] px-4 py-5 rounded-2xl border-[1px] shadow-sm space-y-6'>
                  <p className='text-xs text-blue-700 font-semibold'>Comparison</p>
                  <h3 className='text-lg font-semibold'>Top Private Universities in Dehradun: 2025 Guide</h3>
                  <p className='my-3 text-sm text-gray-600'>Compare placements, fees, accreditations & unique strengths to pick the right fit.</p>
                  <Link to='/universities'><p className='text-sm mt-2 text-blue-700 font-semibold'>Read more &gt;</p></Link>
                </div>

                <div className='bg-white w-[400px] px-4 py-5 rounded-2xl border-[1px] shadow-sm space-y-3'>
                  <p className='text-xs text-blue-700 font-semibold'>Scholarship</p>
                  <h3 className='text-lg font-semibold'>Scholarship Tips for UG & PG Applicants</h3>
                  <p className='my-3 text-sm text-gray-600'>Documents, deadlines and strategies to maximize your chances of fee waivers.</p>
                  <Link to='/Universities'><p className='text-sm mt-2 text-blue-700 font-semibold'>Read more &gt;</p></Link>
                </div>

                <div className='bg-white w-[400px] px-4 py-5 rounded-2xl border-[1px] shadow-sm space-y-3'>
                  <p className='text-xs text-blue-700 font-semibold'>BBA</p>
                  <h3 className='text-lg font-semibold'>DBS vs Uttaranchal vs GEU — BBA Showdown</h3>
                  <p className='my-3 text-sm text-gray-600'>We break down curriculum, internships, and exposure for management aspirants.</p>
                  <Link to='/Universities'><p className='text-sm mt-2 text-blue-700 font-semibold'>Read more &gt;</p></Link>
                </div>

                </div>


    <div className='flex gap-2 justify-between items-start px-4 mt-24 max-lg:flex-wrap'>

    <Left/>
    <Form/>
    </div>
    </>
  )
}

export default Guide
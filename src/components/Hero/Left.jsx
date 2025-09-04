import React from 'react'
import Button from '../Button'

const Left = () => {
  return (
    <div className='w-1/2 mt-36 space-y-3 max-md:mt-2 max-md:w-full max-lg:mt-4'>
        <h1><span className='text-5xl font-extrabold text-gray-800 max-md:text-3xl'>Get Admission in</span><span className='text-blue-700 text-5xl font-extrabold max-md:text-3xl'> Top Dehradun Universities</span></h1>
        <p className='text-lg text-gray-600 max-md:text-sm'>One smart form. Personal counselling. Scholarships & hostel help. Shortlist from Graphic Era, UPES, Uttaranchal, DBS, Doon University and more.</p>
        <div className='flex gap-3 items-center'>
        <Button name="Start Application"/>
        <p className='text-blue-600 font-semibold max-md:text-sm'>Explore Universities</p>
        </div>
        <div>
            <ul className='flex gap-2 mt-7 flex-wrap w-full'>
                <li className='bg-blue-100 rounded-full py-1 px-3 text-xs font-semibold text-blue-500 w-24'>Free Guidance</li>
                <li className='bg-blue-100 rounded-full py-1 px-3 text-xs font-semibold text-blue-500 w-24'>Tie-ups</li>
                <li className='bg-blue-100 rounded-full py-1 px-3 text-xs font-semibold text-blue-500 w-24'>No Hidden Fees</li>
                <li className='bg-blue-100 rounded-full py-1 px-3 text-xs font-semibold text-blue-500 w-24'>Scholarship Help</li>
                <li className='bg-blue-100 rounded-full py-1 px-3 text-xs font-semibold text-blue-500 w-24'>Hostel Support</li>
                <li className='bg-blue-100 rounded-full py-1 px-3 text-xs font-semibold text-blue-500 w-24'>Fast Processing</li>
            </ul>
        </div>
        <label htmlFor="" className='block font-semibold text-gray-700'>Search by course or university</label>
        <div className='flex items-center border-[1px] rounded-lg'>
            <img className='h-10 rounded-l-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22ocSINLrz4Xdiww0qcqOSvCucWoI09S8hYJf3MjgQsXyYWOLD6VIFJjpVjePz2XNbjw&usqp=CAU" alt="" />
        <input className='rounded-r-lg px-3 py-2 w-full outline-none' type="search" placeholder='e.g., B.Tech CSE, MBA, Law, UPES'/>
        </div>

    </div>
  )
}

export default Left
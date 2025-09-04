import React from 'react'
import star from '../assets/star.png'
import NavBar from '../components/Header/NavBar'
import Left from '../components/Hero/left'
import Form from '../components/Hero/Form'

const Story = () => {
  return (
    <>
    <NavBar/>

 <div className='flex items-center gap-2 p-4 max-md:w-full'>
                <img className='h-8 max-md:h-5' src={star} alt="" />
            <h3 className=' text-3xl max-md:2xl font-bold text-gray-800'>Success Stories</h3>
            </div>

            <div className='flex flex-wrap gap-3 py-3 px-3 w-full justify-center'>
                <div className='bg-white w-[400px] px-4 py-5 rounded-2xl border-[1px] h-36 shadow-sm'>
                   <h3 className='font-semibold text-md'>Aarav Gupta</h3>
                   <p className='text-xs text-gray-500 mb-3'>B.Tech CSE • Graphic Era</p>
                   <p className=' text-sm text-gray-800'>"Campus-Info helped me choose between GEU and UPES for CSE. Smooth process and timely calls!"</p>
                </div>

                <div className='bg-white w-[400px] px-4 py-5 rounded-2xl border-[1px] h-36 shadow-sm '>
                   <h3 className='font-semibold text-md'>Ishita Sharma</h3>
                   <p className='text-xs text-gray-500 mb-3'>MBA • DBS</p>
                   <p className=' text-sm text-gray-800'>"Got MBA admit with scholarship guidance. Very professional counselling."</p>
                </div>

                <div className='bg-white w-[400px] px-4 py-5 rounded-2xl border-[1px] h-36 shadow-sm '>
                   <h3 className='font-semibold text-md'>Rahul Verma</h3>
                   <p className='text-xs text-gray-500 mb-3'>BBA • Uttaranchal University</p>
                   <p className=' text-sm text-gray-800'>"Filled one form and they took care of shortlisting and documentation."</p>
                </div>

                </div>

    <div className='flex gap-2 justify-between items-start px-4 mt-24 max-lg:flex-wrap max-lg:w-full max-lg:justify-center'>
    
    <Left/>
    <Form/>
    </div>
    
    </>
  )
}

export default Story
import React from 'react'
import NavBar from '../components/Header/NavBar'
import Left from '../components/Hero/left'
import Form from '../components/Hero/Form'
import person from '../assets/user.png'
import note from '../assets/notepad.png'
import cloud from '../assets/cloud.png'
import insurance from '../assets/insurance.png'


const Works = () => {
  return (
    <div>
            <NavBar/>
            <div className='flex items-center gap-2 p-4'>
                <img className='h-8' src={note} alt="" />
            <h3 className=' text-3xl font-bold text-gray-800'>How Campus-Info Works</h3>
            </div>

            <div className='flex flex-wrap gap-5 py-3 px-4 w-full'>
                <div className='bg-white w-72 px-4 py-3 rounded-2xl border-[1px] h-36 shadow-sm '>
                    <img className='h-8 mb-3' src={note} alt="" />
                    <h3 className='font-semibold mb-2'>1. Fill Smart Form</h3>
                    <p className='text-sm text-gray-600'>Tell us your course, score & preferences.</p>
                </div>

                <div className='bg-white w-72 px-4 py-3 rounded-2xl border-[1px] h-36 shadow-sm '>
                    <img className='h-8 mb-3' src={person} alt="" />
                    <h3 className='font-semibold mb-2'>1. Fill Smart Form</h3>
                    <p className='text-sm text-gray-600'>Tell us your course, score & preferences.</p>
                </div>

                <div className='bg-white w-72 px-4 py-3 rounded-2xl border-[1px] h-36 shadow-sm '>
                    <img className='h-8 mb-3' src={cloud} alt="" />
                    <h3 className='font-semibold mb-2'>1. Fill Smart Form</h3>
                    <p className='text-sm text-gray-600'>Tell us your course, score & preferences.</p>
                </div>

                <div className='bg-white w-72 px-4 py-3 rounded-2xl border-[1px] h-36 shadow-sm '>
                    <img className='h-8 mb-3' src={insurance} alt="" />
                    <h3 className='font-semibold mb-2'>1. Fill Smart Form</h3>
                    <p className='text-sm text-gray-600'>Tell us your course, score & preferences.</p>
                </div>
            </div>
    <div className='flex gap-2 justify-between items-start px-4 mt-24 max-md:flex-wrap max-md:justify-center'>

    <Left/>
    <Form/>
    </div>
    </div>
  )
}

export default Works
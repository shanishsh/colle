import React from 'react'
import NavBar from '../components/Header/NavBar'
import Left from '../components/Hero/left'
import Form from '../components/Hero/Form'
import chat from '../assets/chat.png'
import location from '../assets/location.png'
import instagram from '../assets/instagram.png'
import x from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import you from '../assets/youtube.png'

const Contact = () => {
  return (
    <>
    <NavBar/>

    <div className='m-3 flex justify-between max-lg:flex-wrap'>
        <div>
            <div className='flex gap-2 items-center w-1/2 max-lg:w-full'>
                <img className='h-6' src={chat} alt="" />
            <h3 className='text-3xl font-bold my-4'>Contact Us</h3>
            </div>
            <p className='text-gray-700 mb-8'>Have questions about eligibility, fees or hostel? Talk to our counsellor now.</p>
            <p className='mb-2 text-gray-700'>&#9742; +91-99999-00000</p>
            <p className='mb-2 text-gray-700'>&#9993; hello@campus-info.in</p>
            <div className='flex gap-2 items-center'>
                <img className='h-4' src={location} alt="" />
            <p className='mb-2 text-gray-700'>Rajpur Road, Dehradun (India)</p>
            </div>

           <div className='flex gap-3 items-center mb-4'>
            <p className='text-gray-700 text-sm'>Follow us:</p>
            <div className='flex gap-2'>
                <div className='bg-green-100 rounded-full p-2'>
                <img className='h-4' src={chat} alt="" />
                </div>
                <div className='bg-pink-100 rounded-full p-2'>
                <img className='h-4' src={instagram} alt="" />
                </div>
                <div className='bg-blue-100 rounded-full p-2'>
                <img className='h-4' src={x} alt="" />
                </div>
                <div className='bg-blue-100 rounded-full p-2'>
                <img className='h-4' src={linkedin} alt="" />
                </div>
                <div className='bg-blue-100 rounded-full p-2'>
                <img className='h-4' src={facebook} alt="" />
                </div>
                <div className='bg-red-200 rounded-full p-2'>
                <img className='h-4' src={you} alt="" />
                </div>

            </div>

           </div>
           <button className='bg-blue-500 rounded-2xl text-sm px-4 py-2 text-white font-semibold mr-3'>Chat on WhatsApp</button>
           <button className='bg-gray-200 text-sm px-4 py-2 rounded-2xl font-semibold'>Apply Now</button>
        </div>


        <div className='m-8 w-1/2 bg-white p-4 max-lg:p-1 border-[1px] rounded-2xl max-lg:w-full'>
            <h3 className='text-2xl font-semibold mb-6'>Quick Query</h3>
            <form action="" onClick={(e)=>e.preventDefault()}>
            <label className="block font-semibold text-sm " htmlFor="" id="name">
          Name
        </label>
        <input
        required
          className="border-[1px] w-full rounded-xl p-2 outline-blue-600 outline-offset-4 mb-4"
          type="text"
          placeholder="Your full name"
        />

<div className="flex w-full gap-3">
            <div className="w-1/2">
              <div className='text-sm font-semibold'>Phone</div>
              <input
              required
                className="w-full p-2 rounded-xl border-[1px] outline-blue-500 outline-offset-4"
                type="text"
              />
            </div>
            <div className="w-1/2">
              <div  className='text-sm font-semibold'>Email</div>
              <input
              required
                className="w-full p-2 rounded-xl border-[1px] outline-blue-500 outline-offset-4"
                type="email"
              />
            </div>
          </div>

          <div className='text-sm font-semibold mt-4 mb-3'>Your Question</div>
          <textarea name="" id="" placeholder='Ask us anything about admission' className='w-full p-3 rounded-xl border-[1px] outline-blue-500 outline-offset-4'></textarea>
         <input type="submit" value="Send Message" className='bg-blue-500 rounded-2xl text-sm px-4 mt-4 py-3 text-white font-semibold mr-3 hover:cursor-pointer' />
            </form>
        </div>
    </div>


    <div className='flex gap-2 justify-between items-start px-4 mt-24 max-lg:flex-wrap'>

    <Left/>
    <Form/>
    </div>
    </>
  )
}

export default Contact
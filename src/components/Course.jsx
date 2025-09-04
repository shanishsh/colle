import React from 'react'

const Course = ({src,course}) => {
  return (
    <div className='w-72 rounded-2xl bg-white hover:shadow-md duration-150 relative max-md:w-full max-md:mx-1'>

          <img src={src} alt=""  className='w-full object-cover h-44 rounded-t-2xl'/>
          <p className='absolute text-white top-36 right-2 font-bold'>{course}</p>
          <div className='py-6 px-4 flex justify-between items-center'>
            <p className='text-xs'>Multiple Universitie</p>
            <button className='bg-blue-50 rounded-full px-3 py-2'>Apply</button>
          </div>
        </div>
  )
}

export default Course
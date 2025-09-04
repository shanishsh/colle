import React from 'react'

const Card = ({src,name,para,greenbtn_1,greenbtn_2,greenbtn_3,btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,button}) => {
  return (
    <div className='border-[1px] max-w-80 rounded-2xl bg-white hover:shadow-md duration-300 relative'>
                <button className='text-blue-800 hover:bg-opacity-80 duration-150 bg-gray-50 py-[2px] px-2 bg-opacity-90 text-xs absolute top-3 right-3 rounded-full font-semibold'>Dehradune</button>

        <img className='object-cover w-full rounded-t-2xl max-h-56' src={src} alt="" />
        <div className='w-full p-7'>
        <h3 className='font-semibold text-lg mb-4'>{name}</h3>
        <p className='text-sm text-gray-600'>{para}</p>
        <ul className='flex gap-5 ml-2 mt-3 w-full text-xs font-semibold text-green-700'>
            <li className='bg-green-100 rounded-full py-1 px-3 hover:bg-blue-200 duration-200 cursor-pointer'>{greenbtn_1}</li>
            <li className='bg-green-100 rounded-full py-1 px-3 hover:bg-blue-200 duration-200 cursor-pointer'>{greenbtn_2}</li>
            <li className='bg-green-100 rounded-full py-1 px-3 hover:bg-blue-200 duration-200 cursor-pointer'>{greenbtn_3}</li>
        </ul>
        <p className='text-xs mt-5 font-medium text-gray-700'>Popular Courses</p>
        <ul className='flex w-full gap-2 mt-2 text-xs font-semibold flex-wrap'>
            <li className='border-[1px] rounded-full py-1 px-3'>{btn_1}</li>
            <li className='border-[1px] rounded-full py-1 px-3'>{btn_2}</li>
            <li className='border-[1px] rounded-full py-1 px-3'>{btn_3}</li>
            <li className='border-[1px] rounded-full py-1 px-3'>{btn_4}</li>
            <li className='border-[1px] rounded-full py-1 px-3'>{btn_5}</li>
            <li className='border-[1px] rounded-full py-1 px-3'>{btn_6}</li>
        </ul>

        <div className='flex gap-3 mt-3'>
        <button className='bg-blue-50 text-sm py-2 px-3 rounded-full font-semibold'>{button}</button>
        <button className='bg-gray-50 w-24 hover:bg-gray-100 text-sm py-2 px-3 rounded-full font-semibold'>Brochure</button>
        </div>
        </div>
    </div>
  )
}

export default Card
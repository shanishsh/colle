import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-blue-500 rounded-xl py-2 px-4 font-semibold text-white max-md:text-sm'>{name}</button>
    </div>
  )
}

export default Button
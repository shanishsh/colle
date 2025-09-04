import React from 'react'
import Form from './Form'
import Left from './left'
import NavBar from '../Header/NavBar'

const Hero = () => {
  return (
    <>
    <NavBar/>
    <div className='flex gap-2 justify-between items-start px-4 mt-24 max-md:flex-wrap'>

    <Left/>
    <Form/>
    </div>
    </>
  )
}

export default Hero
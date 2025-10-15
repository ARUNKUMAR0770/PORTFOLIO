import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Typewriter from './Typewriter';


const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-6 items-center justify-center'>
      <h1 className='text-5xl md:text-7xl font-bold tracking-wide'>
        Hi, I'm <span className='text-yellow'>Arun</span>
      </h1>
      <h3 className='text-3xl font-bree tracking-wide'>
        <Typewriter text="web-developer" delay={100} />
      </h3>
      <p className='text-lg font-bree tracking-wide'>Welcome to my portfolio</p>

      <div>
        <Link to="/about"><button className='transition-all duration-300 ease-in-out border bg-yellow text-black cursor-pointer font-bold rounded-2xl py-2 mx-2 w-[120px] hover:bg-black hover:text-white hover:font-normal border-yellow'>
          Explore more
        </button></Link>
        <Link to="/contact" ><button className='transition-all duration-300 ease-in-out border rounded-2xl mx-2 w-[120px] py-2 bg-black text-yellow cursor-pointer hover:text-white hover:font-normal hover:border-yellow'>
          Contact me
        </button></Link>
        
      </div>
    </div>
  )
}

export default Home

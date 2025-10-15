import React from 'react'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';


const About = () => {

  return (
    <div className="max-w-4xl mt-[80px] mx-auto p-4 flex flex-col gap-10">
      {/* about me  */}
      <div className="max-w-4xl mx-auto px-2 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-center">About <span className='text-yellow'>Me</span></h2>
        <p className="text-lg text-gray-300 leading-relaxed line-clamp-10 rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all duration-300 ease-in-out w-full">I'm <span className='text-yellow'>Arun</span>, a passionate web developer who loves problem-solving and turning complex challenges into elegant solutions. I enjoy building responsive and user-friendly websites, learning new technologies, and constantly improving my skills to create engaging digital experiences.
        </p>
        <div className="w-full flex item-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/arun0707/" target="_blank" className='bg-yellow p-4 text-black rounded-full font-bold'><Linkedin /></a>
          <a href="https://github.com/ARUNKUMAR0770" target="_blank" className='bg-yellow p-4 text-black rounded-full font-bold'><Github /></a>
          <a href="mailto:otkotk0707@gmail.com" target="_blank" className='bg-yellow p-4 text-black rounded-full font-bold'><Mail /></a>
        </div>
      </div>


      {/* Education */}
      <div className="w-full mx-auto flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-center">Education</h2>
        <div className="my-4 rounded-xl text-gray-300 p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h1 className='text-2xl font-bold mb-2 text-yellow'>Schooling</h1>
          <p>Government Boys higher Secondary school, Madurai,othakadai (2018-2023)</p>
          <p>setupathi Higher Secondary School, Madurai, (2023-2025)</p>
          <span>board-Exam-score : <span className='text-yellow'>91.3%</span></span>
          <h1 className='my-4 text-2xl font-bold mb-2 text-yellow'>Higher Education</h1>
          <p>vaigai college of Engineering, Madurai, (2025-2029) - Fresher</p>
          <span>Course: B.E - Electronic and Communication Engineering</span><br />
          <span>Studying With merit Scholarship of <span className='text-yellow'>100% fees concession</span></span>
        </div>


      </div>

    </div>

  )
}

export default About

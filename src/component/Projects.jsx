import React from 'react'
import mathquiz from '../assets/mathquiz-img.jpg'
import qrcode from '../assets/qr-code.jpg'
import passgen from '../assets/passgen.png'
import todo from '../assets/todo.jpg'
import note from '../assets/noteapp.jpeg'


const Projects = () => {
  return (
    <div className='w-[80vw] mt-[80px] mx-auto p-4 '>
      <h1 className='text-4xl font-bold text-center'>Projects</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="w-[350px] flex flex-col items-center">
          <a href="https://arunkumar0770.github.io/MATHROCK/" className='w-full'><img src={mathquiz} alt="Math Quiz" className='w-full rounded-lg shadow-md'/></a>         
          <h2 className='text-2xl font-semibold mt-4'>Math Quiz</h2>
      </div>
      <div className="w-[350px] flex flex-col items-center ">
           <a href="https://arunkumar0770.github.io/QR_CODE/" className='w-full'><img src={qrcode} alt="QR Code Generator" className='w-full rounded-lg shadow-md' /></a>
          <h2 className='text-2xl font-semibold mt-4'>QR Code Generator</h2>
      </div>
        <div className="w-[350px] flex flex-col items-center">
          <a href="https://arunkumar0770.github.io/PASS_GEN/" className='w-full'><img src={passgen} alt="passgen" className='w-full rounded-lg shadow-md' /></a>
          <h2 className='text-2xl font-semibold mt-4'>PassGenerator</h2>
      </div>
        <div className="w-[350px] flex flex-col items-center">
          <a href="https://arunkumar0770.github.io/TODO/" className='w-full'><img src={todo} alt="todo" className='w-full rounded-lg shadow-md' /></a>
          <h2 className='text-2xl font-semibold mt-4'>Todo App</h2>
      </div>
        <div className="w-[350px] flex flex-col items-center">
          <a href="https://note-app-frontend-smnd.onrender.com" className='w-full'><img src={note} alt="todo" className='w-full rounded-lg shadow-md' /></a>
          <h2 className='text-2xl font-semibold mt-4'>Note-app</h2>
      </div>
      </div>
    </div>
  )
}

export default Projects

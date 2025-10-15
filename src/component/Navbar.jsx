import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="w-full px-10 py-4 bg-black backdrop-blur-md fixed top-0 left-0 z-40 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/"><div className="text-yellow text-2xl font-bold">Portfolio</div></Link>
          <div className="max-sm:hidden flex gap-4 font-bold">
            <Link to="/" className="text-white mx-2 line_effect">Home</Link>
            <Link to="/about" className="text-white mx-2 line_effect">About</Link>
            <Link to="/projects" className="text-white mx-2 line_effect">Projects</Link>
            <Link to="/skills" className="text-white mx-2 line_effect">Skills</Link>
            <Link to="/contact" className="text-white mx-2 line_effect">Contact</Link>
          </div>
          <Menu
            className="sm:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-screen h-screen font-semibold tracking-wider bg-black flex flex-col gap-6 items-center justify-center sm:hidden transform transition-transform duration-300 origin-top z-50 ${
    showMenu ? "scale-y-100" : "scale-y-0"
  }`}
        onClick={() => setShowMenu(false)}
      >
        <X className='fixed top-4 right-4 cursor-pointer' onClick={() => setShowMenu(false)}/>
        <Link to="/" className="menu-hover">Home</Link>
        <Link to="/about" className="menu-hover">About</Link>
        <Link to="/projects" className="menu-hover">Projects</Link>
        <Link to="/skills" className="menu-hover">Skills</Link>
        <Link to="/contact" className="menu-hover">Contact</Link>
      </div>
    </>
  )
}

export default Navbar

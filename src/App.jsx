import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Skills from './component/Skills'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

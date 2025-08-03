import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // You can swap these with other icons if you prefer
import { useNavigate } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 sm:px-8 md:px-12 py-4">
      {/* Glassmorphic container */}
      <div className= "">
        
        {/* Header Section */}
        <header className="flex justify-between items-center rounded-4xl mb-6 bg-black/40 backdrop-blur-md border border-white/20 shadow-sm p-4 relative ">
          
          {/* Logo (always left) */}
          <a href="/" className="font-bold text-lg"  >AC</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden  sm:flex gap-6 ">
            <a href="/" className="hover:text-purple-300 transition mr-20 ">Home</a>
            <a href="/" className="hover:text-purple-300 transition mr-20 ">About</a>
            <a onClick={() => navigate('/login')} className="hover:border-amber-100 transition mr-20 border rounded-full px-4 py-1 bg-gradient-to-l from-black to-red-800 text-white cursor-pointer">login</a>
          </nav>

          {/* Mobile Menu Icon (right) */}
          
          <button
            className="sm:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="sm:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md rounded-b-xl border-t border-white/20 shadow-md z-10">
              <div className="flex flex-col items-center py-4 gap-6 ">
                <a href="/" className="hover:text-purple-300 transition" >Home</a>
                <a href="/" className="hover:text-purple-300 transition">About</a>
                <a onClick={() => navigate('/login')} className="hover:text-blue-300  transition mr-20 border rounded-full px-4 py-1 bg-gradient-to-r from-gray-800 to-yellow-800 text-white cursor-pointer 
                ml-20
                ">login</a>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row justify-center items-center gap-8 min-h-[calc(100vh-7rem)]">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-4">
            
            <img  src='/public/robot1.png' className='w-32 h-24 ml-14 mb-6 cursor-pointer  note '  />
            <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">
            Hey, I'm Aneesh Chauhan 
            </h1>
            <p className="mt-4 text-xl sm:text-xl font-light text-center lg:text-left">
             I create impactful web experiences using React and Node.js.
            Let’s build something awesome together. ✨
            </p>
            <button className='border rounded-3xl  pl-4 pr-4 pt-1 pb-1 mt-10  ml-12 bg-gradient-to-br from-gray-400 via-black to-pink-900 text-white  hover:from-red-400 hover:to-blue-600
  transition-colors duration-300 '>Get started</button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-4">
            <img src="/house1.png" alt="House" className="w-full h-auto rounded-4xl slide-in-right" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Header

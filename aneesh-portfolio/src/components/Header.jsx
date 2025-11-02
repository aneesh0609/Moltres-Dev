import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

function Header({ scrollToProjects }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-8 md:px-12 pb-4 sm:py-2">
    

      <main className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 sm:gap-16 min-h-[calc(100vh-7rem)]">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          {/* 🧠 Robot image — visible only on large screens */}
          <img 
            src="/robot1.png"
            className="hidden lg:block w-32 h-24 ml-14 mb-6 cursor-pointer note"
            alt="Robot illustration"
          />

          <h1 className="font-stardom text-5xl sm:text-5xl font-bold text-center lg:text-left tracking-[2px] mb-6 sm:mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hii,
            </motion.span>
          </h1>

          <h1 className="font-stardom text-5xl sm:text-6xl md:text-5xl font-bold text-center lg:text-left tracking-[2px] bg-gradient-to-r from-black to-gray-900 bg-clip-text text-transparent">
            I'm Aneesh Chauhan
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-xl font-light text-center lg:text-left">
            I create impactful web experiences using React and Node.js.
            Let’s build something awesome together. ✨
          </p>

          <div className="w-full flex justify-center lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="px-4 py-1 text-sm sm:px-8 sm:py-2 sm:text-base 
                         bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 
                         text-white rounded-full font-semibold border
                         hover:bg-blue-700 transition-all duration-300 transform 
                         hover:scale-105 hover:shadow-lg sm:mt-6 mt-8 shadow-indigo-500/20"
            >
              view my work
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-48 h-48 lg:w-96 lg:h-96 rounded-full overflow-hidden flex items-center justify-center shadow-lg transform transition-all duration-700 ease-in-out border-2 border-white shadow-indigo-700/80 
                        hover:scale-105 hover:border-gray-300 hover:shadow-gray-800/50 slide-in-right">
          <img 
            src="/hero.png" 
            alt="Hero" 
            className="w-full h-full object-cover" 
          />
        </div>
      </main>
    </div>
  )
}

export default Header

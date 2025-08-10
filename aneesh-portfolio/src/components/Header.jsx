import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // You can swap these with other icons if you prefer
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 sm:px-8 md:px-12 py-4">
      {/* Glassmorphic container */}
      <div className= "">
        
        {/* Main Content */}
        <main className="flex flex-col lg:flex-row justify-center items-center gap-8 min-h-[calc(100vh-7rem)]">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 ">
            
            <img  src='/public/robot1.png' className='w-32 h-24 ml-14 mb-6 cursor-pointer  note '  />

         

            <h1 className="text-3xl sm:text-5xl font-bold text-center lg:text-left">
           <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
           >
                    Hey, I'm Aneesh Chauhan 
           </motion.h1>
            </h1>

            <p className="mt-4 text-xl sm:text-xl font-light text-center lg:text-left">
             I create impactful web experiences using React and Node.js.
            Let’s build something awesome together. ✨
            </p>

            <button className='w-full sm:w-auto bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:mt-6'>
              view my work
            </button>
            
          </div>

         {/* Image Section */}
<div className="w-48 sm:ml-18 h-48 lg:w-96 lg:h-96  rounded-full overflow-hidden flex items-center justify-center  sm:mt-20   shadow-lg transform transition-all duration-700 ease-in-out border-2 border-red-500
                      hover:scale-105 hover:border-pink-500 hover:shadow-pink-500/50 
                      slide-in-right ">
  <img 
    src="house.jpg" 
    alt="House" 
    className="w-full h-full object-cover " 
  />
</div>

        </main>
      </div>
    </div>
  )
}

export default Header

import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, Award, Menu, X } from 'lucide-react';

export default function CurvyNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Projects', icon: Briefcase },
    { name: 'Skills', icon: Award },
    { name: 'Contact', icon: Mail },
  ];

  return (
    <nav className="relative flex flex-col sm:flex-row justify-center items-center">

      {/* 🔹 Navbar container */}
      <div
        className={`${
          isOpen
            ? 'flex flex-col items-center mt-4 space-y-3 bg-white rounded-2xl shadow-lg p-4 border border-white sm:hidden'
            : 'hidden sm:flex'
        } sm:bg-white sm:rounded-full sm:shadow-xl sm:px-6 sm:py-3 sm:flex sm:items-center sm:gap-6 border sm:border-purple-200 transition-all duration-300`}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex flex-col items-center text-sm font-medium group transition-all duration-300 ${
                isActive ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              <Icon
                className={`w-5 h-5 mb-1 ${
                  isActive
                    ? 'text-purple-600 scale-110'
                    : 'group-hover:text-purple-500 group-hover:scale-110'
                } transition-all duration-300`}
              />
              <span>{item.name}</span>
              {isActive && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

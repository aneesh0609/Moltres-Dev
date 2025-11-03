import React, { useEffect, useState } from "react";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";

export default function CurvyNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "About", icon: User, id: "about" },
    { name: "Projects", icon: Briefcase, id: "projects" },
    { name: "Contact", icon: Mail, id: "contact" },
  ];

  // 🔹 Scroll to section on click
  const handleScrollTo = (id, index) => {
    setActiveIndex(index);
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // offset for navbar height
        behavior: "smooth",
      });
    }
  };

  // 🔹 Highlight section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = 0;

      navItems.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollY) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-auto">
      {/* 🔹 Toggle button for mobile */}
      <div className="flex justify-end sm:hidden mb-3 pr-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-white shadow-md border border-purple-200 text-gray-700 hover:text-purple-600 transition-all duration-300"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 🔹 Navbar container */}
      <div
        className={`${
          isOpen
            ? "flex flex-col items-center space-y-3 bg-white rounded-2xl shadow-lg p-4 border border-purple-200 sm:hidden"
            : "hidden sm:flex"
        } sm:flex sm:flex-row sm:items-center sm:gap-8 sm:bg-white sm:rounded-full sm:shadow-lg sm:px-8 sm:py-3 border sm:border-purple-200 transition-all duration-300`}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => handleScrollTo(item.id, index)}
              className={`relative flex flex-col items-center text-sm font-medium group transition-all duration-300 ${
                isActive ? "text-purple-600" : "text-gray-600"
              }`}
            >
              <Icon
                className={`w-6 h-6 mb-1 ${
                  isActive
                    ? "text-purple-600 scale-110"
                    : "group-hover:text-purple-500 group-hover:scale-110"
                } transition-all duration-300`}
              />
              <span className="text-xs sm:text-sm">{item.name}</span>

              {/* Gradient underline when active */}
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

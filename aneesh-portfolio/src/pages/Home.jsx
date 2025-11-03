import React, { useRef, useState } from 'react';
import CurvyNavbar from '../components/Navbar';
import Header from '../components/Header';
import PortfolioProjects from '../components/Projects';
import GetInTouch from '../components/Info';
import About from './About';

function Home() {
  const projectsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* 🔹 Fixed Navbar visible on all scroll */}
      <div className="fixed  left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <CurvyNavbar />
      </div>

      {/* 🔹 Mobile Navbar (Slide-in) */}
      {isMenuOpen && (
        <div className="fixed top-16 right-4 z-50 bg-white shadow-xl rounded-2xl p-4 w-48 md:hidden border border-gray-200 transition-all duration-300">
          <CurvyNavbar />
        </div>
      )}

      <div className="pt-12">
        
        {/* 🏠 Home Section */}
        <section id="home">
          <Header
            scrollToProjects={() =>
              projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </section>

        {/* 👤 About Section */}
        <section id="about">
          <About />
        </section>

        {/* 💼 Projects Section */}
        <section id="projects" ref={projectsRef}>
          <PortfolioProjects />
        </section>

        {/* 📩 Contact Section */}
        <section id="contact">
          <GetInTouch />
        </section>

      </div>
    </div>
  );
}

export default Home;

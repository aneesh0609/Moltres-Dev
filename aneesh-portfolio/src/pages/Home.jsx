import React, { useRef, useState } from 'react';
import CurvyNavbar from '../components/Navbar';
import Header from '../components/Header';
import SkillsTimeline from '../components/Timeline';
import PortfolioProjects from '../components/Projects';
import TataCertificate from '../components/Certificates';
import GetInTouch from '../components/Info';
import { Menu, X } from 'lucide-react';

function Home() {
  const projectsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* 🔹 Fixed Navbar visible on all scroll */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <CurvyNavbar />
      </div>


      {/* 🔹 Mobile Navbar (Slide-in) */}
      {isMenuOpen && (
        <div className="fixed top-16 right-4 z-50 bg-white shadow-xl rounded-2xl p-4 w-48 md:hidden border border-gray-200 transition-all duration-300">
          <CurvyNavbar />
        </div>
      )}

      {/* 🔹 Add padding-top so header content doesn’t hide under navbar */}
      <div className="pt-16">
        <Header
          scrollToProjects={() =>
            projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        />
        <SkillsTimeline />
        <div ref={projectsRef}>
          <PortfolioProjects />
        </div>
        <TataCertificate />
        <GetInTouch />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Github, Award } from "lucide-react";
import { motion } from "framer-motion";

// 🔹 CircleMenu Component with slide-in animation
const CircleMenu = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-64 h-64 mx-auto my-10 px-6 sm:px-0 max-w-xs sm:max-w-none"
    >
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
          .delay-200 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
        `}
      </style>

      {/* Outer Circle Background */}
      <div className="w-full h-full rounded-full bg-[#0d0d12] absolute inset-0 z-0"></div>

      {/* Center Avatar */}
      <div className="absolute w-32 h-32 rounded-full bg-white flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden">
        <img
          src="/hero.png"
          className="w-full h-full object-cover rounded-full"
          alt="Aneesh Chauhan"
        />
      </div>

      {/* Floating Tech Icons */}
      <button className="absolute animate-float w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center left-1/2 top-[-28px] transform -translate-x-1/2 z-20 shadow-md">
        <img src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png" alt="Express.js" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-200 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center right-[-28px] top-[20%] z-20 shadow-md">
        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="Node.js" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-400 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center right-[-28px] bottom-[20%] z-20 shadow-md">
        <img src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" alt="React" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-600 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center left-[-28px] bottom-[20%] z-20 shadow-md">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png" alt="JavaScript" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-800 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center left-[-28px] top-[20%] z-20 shadow-md">
        <img src="https://www.mongodb.design/favicon.ico" alt="MongoDB" className="w-full h-full object-contain" />
      </button>
    </motion.div>
  );
};

// 🔹 About Section
export default function About() {
  const summary = `I’m a MERN Stack Developer passionate about building fast, scalable, and engaging web applications. Skilled in RESTful API integration, frontend optimization, and crafting responsive user interfaces that deliver seamless experiences.`;

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Frontend Optimization"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication"],
    },
    {
      title: "Additional Skills",
      skills: ["Database Design", "Git", "Testing", "Problem Solving"],
    },
  ];

  const certifications = ["Tata Cybersecurity Security Analyst (2024)"];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Circle Menu & Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
          <CircleMenu />

          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
              MERN Stack Developer
            </h1>
          </div>

          {/* Certifications */}
          <div className="w-full mt-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
              Certifications
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 justify-center lg:justify-start"
                >
                  <Award className="w-4 h-4 text-indigo-500" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Summary, Skills & Links */}
        <div className="lg:col-span-2 flex flex-col justify-between space-y-10">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-4xl font-semibold text-gray-800 text-center lg:text-left panchang">
              About
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed text-center lg:text-left">
              {summary}
            </p>
          </motion.div>

          {/* Skills Section */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold text-gray-700 uppercase mb-4 tracking-wide text-center lg:text-left normal">
              Core Skills
            </h3>

            <div className="flex flex-col sm:flex-row gap-4">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg 
                             transition-all duration-300 p-4 sm:p-5"
                >
                  <h4 className="text-gray-800 font-semibold text-sm sm:text-base mb-3 text-center">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gradient-to-br from-pink-100 to-gray-200 text-gray-800 px-2.5 py-1 text-[11px] sm:text-xs rounded-lg 
                                   border border-gray-400 shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
            <a
              href="https://github.com/aneeshchauhan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white 
                         rounded-full text-sm font-medium hover:bg-black transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 
                         rounded-full text-sm font-medium text-gray-800 hover:shadow-md transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

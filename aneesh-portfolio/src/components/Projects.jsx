import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Project data
const projectsData = [
  {
    id: 1,
    title: "Paws-World",
    icon: "🐾",
    description: "A comprehensive web application designed for pet care, adoption management, and community animal welfare.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "JWT authentication - 30% faster login times",
      "Real-time reporting - 35% reduction in response delays", 
      "Optimized APIs - 40% improvement in latency",
      "Responsive design for mobile experience"
    ],
    link: "https://paws-world-moltres.netlify.app/",
    iconBg: "from-red-500 to-orange-500"
  },
  {
    id: 2,
    title: "Code-Mew",
    icon: "💻",
    description: "A dynamic platform for tech enthusiasts to explore cutting-edge articles focused on latest technologies.",
    technologies: ["React.js", "Node.js", "MongoDB", "Mongoose", "Firebase"],  
    features: [
      "RESTful APIs - 40% faster load times",
      "Firebase authentication with real-time profiles",
      "MongoDB optimization - 25% response improvement", 
      "Component-level caching for performance"
    ],
    link: "https://codemew.onrender.com/",
    iconBg: "from-indigo-600 to-purple-600"
  }
];

const skillsData = [
  { title: "Programming Languages", description: "JavaScript, C++" },
  { title: "Frontend Development", description: "React.js, HTML, CSS" },
  { title: "Backend Development", description: "Node.js, Express.js" },
  { title: "Core Concepts", description: "Data Structures & Algorithms" }
];

// Individual Components
const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="group bg-black/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 
                 transition-all duration-300 hover:-translate-y-3 hover:scale-105 
                 hover:shadow-2xl hover:border-white/30 hover:bg-black/90 
                 h-[500px] flex flex-col relative overflow-hidden"
      style={{ animationDelay: `${0.4 + index * 0.2}s` }}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full -translate-y-full w-[200%] h-[200%] 
                      bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      rotate-45 group-hover:translate-x-full group-hover:translate-y-full 
                      transition-transform duration-1000 pointer-events-none" />
      
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 bg-gradient-to-br ${project.iconBg} rounded-xl 
                        flex items-center justify-center mr-4 text-2xl 
                        transition-transform duration-300 group-hover:rotate-[360deg] group-hover:scale-110`}>
          {project.icon}
        </div>
        <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
          {project.title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-white/10 text-white px-3 py-2 rounded-2xl text-xs 
                       border border-white/20 transition-all duration-300 
                       hover:bg-white/20 hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <ul className="mb-6 space-y-2">
        {project.features.map((feature) => (
          <li key={feature} className="text-gray-400 text-sm pl-5 relative leading-snug">
            <span className="absolute left-0 text-yellow-400 font-bold">✦</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-600 
                   text-white px-6 py-3 rounded-full font-bold text-sm 
                   transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                   mt-auto relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                         -translate-x-full group-hover/link:translate-x-full transition-transform duration-500" />
        <span className="relative">View Live Project →</span>
      </a>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-black/60 p-6 rounded-2xl text-center border border-white/10 
                    transition-all duration-300 hover:-translate-y-2 hover:bg-black/80 hover:border-white/20">
      <h3 className="text-white mb-4 text-lg font-semibold">
        {skill.title}
      </h3>
      <p className="text-gray-400 text-sm">
        {skill.description}
      </p>
    </div>
  );
};

const FloatingParticle = ({ particle }) => {
  return (
    <div
      className="fixed w-1 h-1 bg-white/60 rounded-full pointer-events-none z-0"
      style={{
        left: `${particle.left}vw`,
        bottom: '0vh',
        animation: `particleFloat ${particle.duration}s linear infinite`
      }}
    />
  );
};

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-bounce" 
           style={{ animationDuration: '6s' }} />
      <div className="absolute w-30 h-30 bg-white/10 rounded-full top-[60%] right-[10%] animate-bounce" 
           style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute w-15 h-15 bg-white/10 rounded-full top-[80%] left-[20%] animate-bounce" 
           style={{ animationDuration: '6s', animationDelay: '4s' }} />
    </div>
  );
};

// Main Component
const PortfolioProjects = () => {
  const [particles, setParticles] = useState([]);

  // Particle system
  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        duration: 4 + Math.random() * 2
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, newParticle.duration * 1000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.animate-bounce');
      
      parallaxElements.forEach(element => {
        const yPos = -(scrolled * 0.3);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-gray-900 overflow-x-hidden relative">
      {/* Background Elements */}
      <BackgroundElements />

      {/* Floating Particles */}
      {particles.map(particle => (
        <FloatingParticle key={particle.id} particle={particle} />
      ))}

      <div className="max-w-6xl mx-auto px-8 py-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">


          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1 }}
                      >
                            My Projects
                       </motion.h1> 
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Innovative solutions crafted with passion and cutting-edge technologies. 
            Each project represents a journey of learning, problem-solving, and technical excellence.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <div key={project.id} className="opacity-0 animate-[slideInUp_0.8s_ease-out_forwards]">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {  
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default PortfolioProjects;
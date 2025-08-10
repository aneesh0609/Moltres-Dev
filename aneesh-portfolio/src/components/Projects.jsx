import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
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

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const slideDirection = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: slideDirection }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      className="group bg-black/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 
                 transition-all duration-1000 hover:-translate-y-3 hover:scale-105 
                 hover:shadow-2xl hover:border-white/30 hover:bg-black/90 
                 flex flex-col relative overflow-hidden h-full"
    >
      <div className="absolute inset-0 translate-x-[-100%] translate-y-[-100%] w-[150%] h-[150%] 
                      bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      rotate-45 group-hover:translate-x-[100%] group-hover:translate-y-[100%] 
                      transition-transform duration-[1200ms] pointer-events-none" />
      <div className="flex items-center mb-4 sm:mb-6">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${project.iconBg} rounded-xl 
                        flex items-center justify-center mr-4 text-xl sm:text-2xl 
                        transition-transform duration-1000 group-hover:rotate-[360deg] group-hover:scale-110`}>
          {project.icon}
        </div>
        <h2 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-wide">
          {project.title}
        </h2>
      </div>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm leading-relaxed flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {project.technologies.map((tech) => (
          <span key={tech}
            className="bg-white/10 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-2xl text-xs 
                       border border-white/20 transition-all duration-700 
                       hover:bg-white/20 hover:scale-105">
            {tech}
          </span>
        ))}
      </div>
      <ul className="mb-4 sm:mb-6 space-y-2">
        {project.features.map((feature) => (
          <li key={feature} className="text-gray-400 text-xs sm:text-sm pl-5 relative leading-snug">
            <span className="absolute left-0 text-yellow-400 font-bold">✦</span>
            {feature}
          </li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noopener noreferrer"
        className="group/link inline-flex items-center bg-gradient-to-r from-green-600 to-yellow-700 border
                   text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm 
                   transition-all duration-700 hover:-translate-y-1 hover:shadow-lg 
                   mt-auto relative overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                         -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000" />
        <span className="relative">View Live Project →</span>
      </a>
    </motion.div>
  );
};

const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="bg-black/60 p-6 rounded-2xl text-center border border-white/10 
                 transition-all duration-1000 hover:-translate-y-2 hover:bg-black/80 hover:border-white/20"
    >
      <h3 className="text-white mb-4 text-lg font-semibold">{skill.title}</h3>
      <p className="text-gray-400 text-sm">{skill.description}</p>
    </motion.div>
  );
};

const FloatingParticle = ({ particle }) => (
  <div
    className="fixed w-1 h-1 bg-white/60 rounded-full pointer-events-none z-0"
    style={{
      left: `${particle.left}vw`,
      bottom: '0vh',
      animation: `particleFloat ${particle.duration}s linear infinite`
    }}
  />
);

const BackgroundElements = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-bounce"
         style={{ animationDuration: '6s' }} />
    <div className="absolute w-28 h-28 bg-white/10 rounded-full top-[60%] right-[10%] animate-bounce"
         style={{ animationDuration: '6s', animationDelay: '2s' }} />
    <div className="absolute w-16 h-16 bg-white/10 rounded-full top-[80%] left-[20%] animate-bounce"
         style={{ animationDuration: '6s', animationDelay: '4s' }} />
  </div>
);

const PortfolioProjects = () => {
  const [particles, setParticles] = useState([]);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.animate-bounce');
      parallaxElements.forEach(element => {
        const yPos = -(scrolled * 0.2);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-gray-900 overflow-x-hidden overflow-y-auto relative">
      <BackgroundElements />
      {particles.map(particle => (
        <FloatingParticle key={particle.id} particle={particle} />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 relative z-10 overflow-hidden">
        <header className="text-center mb-16">
         <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-7xl md:text-7xl lg:text-7xl font-bold text-center text-white z-10 w-full px-4 break-words py-6"
        >
          Projects
       </motion.h1>

          <p className="text-base sm:text-lg  md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore a collection of projects built with a focus on performance, clean architecture, and responsive design.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div> 

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 via-black to-indigo-900 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-8">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes particleFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default PortfolioProjects;

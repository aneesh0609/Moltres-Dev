import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Paws-World",
    icon: "🐾",
    image: "/paws-world.jpg",
    description:
      "A web app for pet care, adoption, and animal welfare — built to make a difference.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://paws-world-moltres.netlify.app/",
    github: "https://github.com/aneeshchauhan/paws-world",
  },
    {
    id: 2,
    title: "Paws-World",
    icon: "🐾",
    image: "/paws-world.jpg",
    description:
      "A web app for pet care, adoption, and animal welfare — built to make a difference.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://paws-world-moltres.netlify.app/",
    github: "https://github.com/aneeshchauhan/paws-world",
  },
  {
    id: 3,
    title: "Code-Mew",
    icon: "💻",
    image: "/hero.png",
    description:
      "A tech blog for developers to explore, share, and learn the latest in web development.",
    technologies: ["React.js", "Node.js", "MongoDB",  "Firebase"],
    link: "https://codemew.onrender.com/",
    github: "https://github.com/aneeshchauhan/code-mew",
  },
];

const skillsData = [
  { title: "Programming Languages", description: "JavaScript, C++" },
  { title: "Frontend Development", description: "React.js, HTML, CSS" },
  { title: "Backend Development", description: "Node.js, Express.js" },
  { title: "Core Concepts", description: "Data Structures & Algorithms" },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Inner Shadow */}
      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_12px_rgba(0,0,0,0.15)] pointer-events-none"></div>

      {/* ✅ Image Section — Visible on all screens */}
      <div className="w-full h-32 sm:h-34 md:h-34 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* ✅ Inner Content with spacing */}
      <div className="p-4 sm:p-5 bg-white rounded-b-2xl flex flex-col justify-between gap-3 relative z-10">
        {/* Title */}
        <div className="flex items-center mb-1">
          <div className="w-7 h-7 bg-gray-100 rounded-xl flex items-center justify-center text-lg mr-3">
            {project.icon}
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 tracking-wide">
            {project.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-snug line-clamp-3 mb-2">
          {project.description}
        </p>

        {/* Technologies — 2 in a row on mobile */}
        <div className="grid grid-cols-4 sm:flex sm:grid-cols-4 gap-1 sm:gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-center"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons — no gap in mobile, gap in larger screens */}
        <div className="flex justify-start gap-12 sm:justify-start  sm:gap-14 ml-7 pt-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold hover:bg-indigo-700 transition-all duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => (
  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
    <h3 className="text-gray-900 mb-2 text-base font-semibold">{skill.title}</h3>
    <p className="text-gray-600 text-sm">{skill.description}</p>
  </div>
);

const PortfolioProjects = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide mb-2 panchang">
            Projects
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            A collection of modern, performance-optimized web projects.
          </p>
        </header>

        {/* ✅ Project Cards Grid — 1 on mobile, 2 on medium, 3 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default PortfolioProjects;

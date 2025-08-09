import React, { useState, useEffect } from 'react';

// React Component for Tata Certificate
const TataCertificate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  const certificate = {
    title: "Tata Cybersecurity Security Analyst",
    organization: "Tata Consultancy Services",
    year: "2024",
    icon: "🛡️",
    category: "Cybersecurity",
    description:
      "Completed a comprehensive job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.",
    skills: [
      "Identity & Access Management (IAM)",
      "Cybersecurity Best Practices",
      "Strategic Business Alignment"
    ],
    achievements: [
      "Collaborated with Cybersecurity Consulting team",
      "Delivered comprehensive documentation and presentations"
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 3 + 3,
        duration: Math.random() * 2 + 3
      };
      setParticles((prev) => [...prev.slice(-8), newParticle]);
    };

    const interval = setInterval(createParticle, 800);
    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    console.log('Contact button clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-0 bg-white/15 rounded-full"
          style={{
            left: `${particle.left}%`,
            bottom: '-10px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `floatUp ${particle.duration}s linear infinite`
          }}
        />
      ))}

      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-16 relative z-10 flex flex-col justify-center min-h-screen">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Professional Certification
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing expertise in cybersecurity and strategic technology implementation through industry-recognized certification.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div
              className={`group relative bg-gradient-to-br from-gray-900 via-black to-red-900 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:shadow-2xl hover:shadow-pink-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } overflow-hidden min-h-[500px] flex flex-col`}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-red-700 via-gray-600 to-indigo-700 opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 skew-x-12" />

              <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 h-full overflow-auto">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 rounded-2xl flex items-center justify-center text-4xl md:text-5xl shadow-lg mb-4 ">
                      <img src='https://img.freepik.com/premium-photo/security-privacy-icon-illustation-badge_1254992-273441.jpg?semt=ais_hybrid&w=740&q=80' className='w-full h-full object-cover rounded-2xl' />
                    </div>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-sm text-gray-300 border border-white/20 group-hover:bg-white/20 transition-colors duration-300 mb-4">
                      {certificate.year}
                    </span>
                    <span className="inline-block px-4 py-2 rounded-full text-sm bg-gradient-to-r from-pink-500 via-indigo-400 to-red-600 text-white font-medium shadow-lg">
                      {certificate.category}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {certificate.title}
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium">
                      {certificate.organization}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow">
                    {certificate.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs border border-white/20 hover:bg-white/20 hover:scale-105 hover:text-white transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {certificate.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-400 text-xs sm:text-sm pl-4 relative leading-relaxed hover:text-gray-300 transition-colors duration-300">
                            <span className="absolute left-0 top-1 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: `${index * 300}ms` }} />
                            {achievement}
                          </li>
                        ))}
                      </ul> <br></br>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3 py-1  rounded-full border border-white/10 ">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse " />
                <span className="text-xs text-green-400 font-medium">Verified</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TataCertificate;

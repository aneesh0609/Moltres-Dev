import React, { useRef, useEffect, useState } from 'react';
import {
  Code2,
  Database,
  Server,
  Zap,
  Calendar,
  Star,
  Atom,
  Link,
} from 'lucide-react';
import Card from './Circle';

const categories = [
  {
    label: 'Frontend ',
    skills: [
      { name: 'JavaScript', icon: <Code2 className="text-white" />, color: 'from-yellow-400 to-orange-500', level: 90 },
      { name: 'HTML5', icon: <Code2 className="text-white" />, color: 'from-orange-400 to-red-500', level: 95 },
      { name: 'CSS3', icon: <Code2 className="text-white" />, color: 'from-blue-400 to-cyan-500', level: 88 },
    ],
  },
  {
    label: 'Backend ',
    skills: [
      { name: 'Node.js', icon: <Server className="text-white" />, color: 'from-green-400 to-emerald-500', level: 85 },
      { name: 'Express.js', icon: <Server className="text-white" />, color: 'from-blue-600 to-indigo-600', level: 85 },
      { name: 'RESTful APIs', icon: <Link className="text-white" />, color: 'from-red-500 to-pink-500', level: 75 },
    ],
  },
  {
    label: 'Other Tools',
    skills: [
      { name: 'Redux', icon: <Atom className="text-white" />, color: 'from-violet-500 to-red-500', level: 82 },
      { name: 'Git / GitHub', icon: <Code2 className="text-white" />, color: 'from-orange-500 to-red-500', level: 90 },
      { name: 'JWT Auth', icon: <Server className="text-white" />, color: 'from-purple-500 to-pink-500', level: 80 },
    ],
  },
  {
    label: 'Mern‑Stack Tech',
    skills: [
      { name: 'React.js', icon: <Zap className="text-white" />, color: 'from-blue-400 to-cyan-400', level: 88 },
      { name: 'Express.js', icon: <Server className="text-white" />, color: 'from-blue-600 to-gray-800', level: 85 },
      { name: 'MongoDB', icon: <Database className="text-white" />, color: 'from-green-800 to-green-500', level: 88 },
    ],
  },
];

function SkillBadge({ skill, isVisible, delay }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setProgress(skill.level), delay);
      return () => clearTimeout(t);
    } else {
      setProgress(0);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-md p-2 flex items-center space-x-2 border border-gray-700 hover:border-gray-600 hover:scale-105 transition duration-300">
      <div className={`p-1 bg-gradient-to-r ${skill.color} rounded-full shadow-md`}>
        {skill.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-xs mb-0.5">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 h-1 rounded-full">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all ease-out duration-1000`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const refs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.idx);
          setVisibleIndexes((prev) => ({
            ...prev,
            [idx]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-tr from-black via-black to-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-2">
           Skills — Areas of Expertise

          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mt-6 mx-auto">
            These are the core technologies and tools mastered.
          </p>
        </div>

        {/* Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {categories.map((cat, i) => {
            const isVisible = visibleIndexes[i];
            const slideClass = i % 2 === 0 ? 'translate-x-[-40px]' : 'translate-x-[40px]';

            return (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                className={`w-full max-w-md bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700
                  hover:border-gray-600 hover:scale-105 transform transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${slideClass}`}
                `}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-white">{cat.label}</h3>
                </div>
                <div className="space-y-2">
                  {cat.skills.map((sk, j) => (
                    <SkillBadge
                      skill={sk}
                      isVisible={isVisible}
                      delay={j * 100}
                      key={j}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <Card />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { val: '10+', lbl: 'Technologies', icon: <Code2 className="w-6 h-6 text-blue-400  " /> },
            { val: '4+', lbl: 'Skill&nbsp;Categories', icon: <Star className="w-6 h-6 text-blue-400" /> },
            { val: '85%', lbl: 'Avg Proficiency', icon: <Zap className="w-6 h-6 text-blue-400" /> },
            { val: '2', lbl: 'Main Project', icon: <Calendar className="w-6 h-6 text-blue-400" /> },
          ].map((s, ii) => (
            <div
              key={ii}
              className="text-center bg-gradient-to-br from-pink-900 via-black to-gray-700 backdrop-blur-sm rounded-xl p-5 border border-pink-400  hover:border-pink-600 hover:scale-105 transition duration-300  "
            >
              {s.icon}
              <div className="text-2xl md:text-3xl font-bold text-white mt-2" dangerouslySetInnerHTML={{ __html: s.val }} />
              <div className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: s.lbl }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

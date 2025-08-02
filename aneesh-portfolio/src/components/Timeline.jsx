import React, { useRef, useEffect, useState } from 'react';
import {
  Code2,
  Database,
  Server,
  Zap,
  Calendar,
  Star,
} from 'lucide-react';

const categories = [
  {
    label: 'Frontend Languages',
    skills: [
      { name: 'JavaScript', icon: <Code2 className="text-white" />, color: 'from-yellow-400 to-orange-500', level: 90 },
      { name: 'HTML5', icon: <Code2 className="text-white" />, color: 'from-orange-400 to-red-500', level: 95 },
      { name: 'CSS3', icon: <Code2 className="text-white" />, color: 'from-blue-400 to-cyan-500', level: 88 },
    ],
  },
  {
    label: 'Backend Languages',
    skills: [
      { name: 'Node.js', icon: <Server className="text-white" />, color: 'from-green-400 to-emerald-500', level: 85 },
      { name: 'Python', icon: <Database className="text-white" />, color: 'from-blue-600 to-indigo-600', level: 80 },
      { name: 'Java', icon: <Database className="text-white" />, color: 'from-red-500 to-pink-500', level: 75 },
    ],
  },
  {
    label: 'Other Tools',
    skills: [
      { name: 'MongoDB', icon: <Database className="text-white" />, color: 'from-green-500 to-teal-500', level: 82 },
      { name: 'Git / GitHub', icon: <Code2 className="text-white" />, color: 'from-orange-500 to-red-500', level: 90 },
      { name: 'JWT Auth', icon: <Server className="text-white" />, color: 'from-purple-500 to-pink-500', level: 80 },
    ],
  },
  {
    label: 'Full‑Stack Tech',
    skills: [
      { name: 'React.js', icon: <Zap className="text-white" />, color: 'from-blue-400 to-cyan-400', level: 88 },
      { name: 'Express.js', icon: <Server className="text-white" />, color: 'from-gray-600 to-gray-800', level: 85 },
      { name: 'RESTful APIs', icon: <Code2 className="text-white" />, color: 'from-blue-500 to-indigo-500', level: 88 },
    ],
  },
];

function SkillBadge({ skill, isVisible, delay }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setProgress(skill.level), delay);
      return () => clearTimeout(t);
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
  const [visible, setVisible] = useState(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((ent) => {
          const i = Number(ent.target.dataset.idx);
          if (ent.isIntersecting) {
            observer.unobserve(ent.target);
            setTimeout(() => {
              setVisible((prev) => {
                const s = new Set(prev);
                s.add(i);
                return s;
              });
            }, i * 150);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
            Skills — Anish’s Expertise
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            These are the core technologies and tools Anish has mastered.
          </p>
        </div>

        {/* Cards: 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const isVis = visible.has(i);
            const slideFrom = i % 2 === 0 ? '-translate-x-12' : 'translate-x-12';
            return (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                className={`
                  bg-gray-800/50 backdrop-blur-md rounded-xl p-4 md:p-5 border border-gray-700
                  hover:border-gray-600 hover:scale-105 transition-transform duration-1000
                  transform opacity-0 ${slideFrom}
                  ${isVis ? 'opacity-100 translate-x-0' : ''}
                `}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-white">{cat.label}</h3>
                </div>
                <div className="space-y-2">
                  {cat.skills.map((sk, j) => (
                    <SkillBadge skill={sk} isVisible={isVis} delay={i * 150 + j * 100} key={j} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { val: '10+', lbl: 'Technologies', icon: <Code2 className="w-6 h-6 text-blue-400" /> },
            { val: '4+', lbl: 'Skill&nbsp;Categories', icon: <Star className="w-6 h-6 text-blue-400" /> },
            { val: '85%', lbl: 'Avg Proficiency', icon: <Zap className="w-6 h-6 text-blue-400" /> },
            { val: '‑', lbl: 'Other Metrics', icon: <Calendar className="w-6 h-6 text-blue-400" /> },
          ].map((s, ii) => (
            <div
              key={ii}
              className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-gray-600 hover:scale-105 transition duration-300"
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

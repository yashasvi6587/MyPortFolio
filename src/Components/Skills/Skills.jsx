import React from 'react'
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt
} from 'react-icons/fa'
import {
  SiC, SiCplusplus, SiMongodb, SiExpress, SiNextdotjs, SiFirebase
} from 'react-icons/si'
import './Skills.css' // Custom animations & background

const skills = [
  { name: 'C', icon: <SiC className="text-blue-400" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-300" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-300" /> },
  { name: 'Node.js', icon: <FaNode className="text-green-400" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-300" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
]

const Skills = () => {
  return (
    <div id="skills" className="skills-section relative pb-20 px-8 text-white">
      <div className="skills-background"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-extrabold my-16 text-cyan-400 drop-shadow-md animate-pulse">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-10 text-3xl flex flex-col items-center gap-4 shadow-lg hover:shadow-cyan-400 hover:scale-110 transform transition duration-300 animate-float-glow"
            >
              {skill.icon}
              <div className="text-xl font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

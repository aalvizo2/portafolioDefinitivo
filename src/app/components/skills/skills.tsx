import React from 'react'
import './skills.css'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiMysql, SiNextdotjs, SiNestjs, SiAngular } from 'react-icons/si'

function Skills() {
  return (
    <div className="wrapper-skills" id="skills">
      <div className="container-skills">
        <h1>Skills</h1>

        
        <div className="skills-grid">
          <div className="skill-card">
            <FaReact className="icon react" />
            <span>React</span>
          </div>

          <div className="skill-card">
            <FaNodeJs className="icon node" />
            <span>Node.js</span>
          </div>

          <div className="skill-card">
            <SiNextdotjs className="icon next" />
            <span>Next.js</span>
          </div>

          <div className="skill-card">
            <SiNestjs className="icon nest" />
            <span>NestJS</span>
          </div>

          <div className="skill-card">
            <SiAngular className="icon angular" />
            <span>Angular</span>
          </div>

          <div className="skill-card">
            <SiMysql className="icon mysql" />
            <span>MySQL</span>
          </div>

          <div className="skill-card">
            <FaGithub className="icon github" />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

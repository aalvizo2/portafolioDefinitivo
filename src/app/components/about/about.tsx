import React from 'react'
import './about.css'
import Image from 'next/image'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiMysql, SiNextdotjs, SiNestjs, SiAngular } from 'react-icons/si'

function About() {
  return (
    <>
      <div className="wrapper-about" id='about'>
        <div className="container-about">
          {/* Avatar */}
          <div className="avatar-about">
            <Image 
              src="/img/avatar2.png" 
              alt="second-avatar"
              width={300}
              height={300}
            />
          </div>

          {/* Texto */}
          <div className="container-text">
            <h1>About</h1>
            <p>
              Hi, I'm <strong>Alan Alvizo</strong>, a developer specializing in React, Node.js, Angular, Nest and Next.js. 
              I love building scalable and efficient applications with great user experiences. 
              Always open to new challenges — let's connect!
            </p>

            {/* Bloque de íconos */}
            <div className="tech-icons">
              <span><FaReact className="icon react" /> React</span>
              <span><FaNodeJs className="icon node" /> Node.js</span>
              <span><SiMysql className="icon mysql" /> MySQL</span>
              <span><SiNextdotjs className="icon next" /> Next.js</span>
              <span><SiNestjs className="icon nest" /> NestJS</span>
              <span><SiAngular className="icon angular" /> Angular</span>
              <span><FaGithub className="icon github" /> GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

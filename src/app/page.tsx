"use client"
import { useEffect, useRef } from "react"
import About from "./components/about/about"
import Navbar from "./components/navbar/navbar"
import Projects from "./components/projects/projects"
import Image from 'next/image'
import Typed from 'typed.js'
import Skills from "./components/skills/skills"
import Contact from "./components/contact/contact"

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null)
  
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV Alan Esteban Alvizo Ortega.pdf"
    link.download = "CV Alan Esteban Alvizo Ortega"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  //hacemos el efecto typed 
  useEffect(() => {
    if(typedRef.current){
       const typed= new Typed(typedRef.current, {
         strings: [
           "Node.js Developer",
           "React.js Developer",
           "Frontend Developer",
           "Backend Developer",
           "FullStack Developer",
           "Your best choice"
         ],
         typeSpeed: 60,
         backSpeed: 40,
         loop: true,
       })
       return () => typed.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="space" ></div>
      <div className="main-frame" >
        <div className="first-layer text-center">
          <h1>
            <span className="wave inline-block">✋</span> Hello, I'm
          </h1>
          <h1 className="text-indigo-500 font-bold">Alan Alvizo</h1>
          <h3 className="text-gray-600">
             <span ref={typedRef}></span>
          </h3>
          <div className="btns">
            <button className="projects-btn">
              View Projects
            </button>
            <button className="cv-btn" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        </div>
        <div className="second-layer">
          <div className="avatar">
            <Image
              src="/img/avatar.png"
              alt="avatar"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <About />

      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

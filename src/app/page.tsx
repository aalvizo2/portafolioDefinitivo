"use client"
import Navbar from "./components/navbar/navbar"
import avatar from '../../public/img/avatar.png'

export default function Home() {
   
  const handleDownloadCV= () =>{
    const link= document.createElement("a")
    link.href= "/CV Alan Esteban Alvizo Ortega.pdf"
    link.download= "CV Alan Esteban Alvizo Ortega"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
 
  return (
    <>
      <Navbar />
      <div className="space"></div>
      <div className="mainframe">
        <div className="first-layer text-center">
          <h1>
            <span className="wave inline-block">✋</span> Hello, I'm
          </h1>
          <h1 className="text-indigo-500 font-bold">Alan Alvizo</h1>
          <h3 className="text-gray-600">FullStack Developer</h3>
          <div className="btns">
              <button className="projects-btn">
                 View Projects
              </button>
              <button className="cv-btn" onClick={handleDownloadCV}>
                 Download CV
              </button>
          </div>
        </div>
      </div>
      <div className="main-avatar-frame">
        
      </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import './projects.css'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  img?: string
}

function Projects() {
  const [data, setData] = useState<Project[]>([])

  async function fetchData() {
    const response = await fetch('/api/projects')
    const json = await response.json()
    setData(json.Data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="wrapper">
      <div className="container" id="projects">
        <h1 className="projects-title">Projects</h1>
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              {item.img ? <img src={item.img} alt={item.title} /> : <div className="placeholder" />}
            </div>

            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="technologies">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

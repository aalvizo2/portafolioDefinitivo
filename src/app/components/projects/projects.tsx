import React, { useEffect, useState } from 'react'
import './projects.css'

interface Project{
  id: string;
  title: string;
  description: string,
  technologies: [string];

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
      {data.map((item) => (
        <div className="card" key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          
          <div className="technologies">
            {item.technologies.map((tech: string, index: number) => (
              <span key={index} className="tech">
                {tech}
              </span>
            ))}
          </div>
          
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Projects

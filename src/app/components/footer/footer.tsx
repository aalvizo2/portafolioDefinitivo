import { Linkedin, Github, Mail } from 'lucide-react'
import './footer.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1 */}
        <div className="footer-brand">
          <h2>Alan Alvizo</h2>
          <p>Fullstack Developer passionate about building digital solutions.</p>
        </div>

        {/* Columna 2 */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="icons">
            <Link href="mailto:alanestebana@gmail.com"><Mail size={20} /></Link>
            <Link href="https://www.linkedin.com/in/alan-esteban-alvizo-ortega-870750267/" target="_blank" rel="noreferrer"><Linkedin size={20} /></Link>
            <Link href="https://github.com/aalvizo2" target="_blank" rel="noreferrer"><Github size={20} /></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alan Alvizo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

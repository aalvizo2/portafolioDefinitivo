import React, { useState } from 'react';
import './navbar.css';
import HireMeModal from './hireme-modal';
import Link from 'next/link';


const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top: top - 50,
        behavior: 'smooth',
        
      })
    }
  }

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">AA</div>

        {/* Botón hamburguesa */}
        <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Opciones del menú */}
        <div className={`options ${open ? 'active' : ''}`}>
          <ul>
            <li><Link href="#about" onClick={() => scrollToSection("about")}>About</Link></li>
            <li><Link href="#projects" onClick={() => scrollToSection("projects")}>Projects</Link></li>
            <li><Link href="#skills" onClick={() => scrollToSection("skills")}>Skills</Link></li>
            <li><Link href="#contact" onClick={() => scrollToSection("contact")}>Contact</Link></li>
            <li>
              <button className="hire-me-btn" onClick={() => setModal(true)}>
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal */}
      <HireMeModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  );
};

export default Navbar;

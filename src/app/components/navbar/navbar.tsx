import React, { useState } from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
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
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li><button className="hire-me-btn">Hire Me</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

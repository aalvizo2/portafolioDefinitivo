import React from 'react'; 
import './navbar.css';

const Navbar: React.FC= ()=> {
     return(
        <nav className='navbar'>
           <div className="logo">
               AA
           </div>
           <div className="options">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Contact</a></li>
                <li ><button className='hire-me-btn'>Hire Me</button></li>
              </ul>
           </div>
        </nav>
     )
}

export default Navbar;
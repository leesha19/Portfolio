import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import "./Navbar.css";
 const Navbar =() => {

  const [openLinks,setOpenLinks]= useState(false);
  
  const toggleNavbar = () => {
  setOpenLinks (!openLinks);
 };
  return (
  <>
    <div className='navbar'>
    <div className='left-side' id={openLinks ? "open" : "close"}>
        <h1>Leesha</h1>
        <div className='hiddenLinks'>
            <RouterLink to="/">Home</RouterLink>
            <Link  to="about" spy={true} smooth={true} offset={-70} duration={500}>About
              </Link>
              <Link  to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects
              </Link>
              <Link  to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact
              </Link>
           
        </div>
    </div>
    <div className='right-side  '>
         <RouterLink to="/">Home</RouterLink>
         <Link  to="about" spy={true} smooth={true} offset={-70} duration={500}>About
              </Link>
              <Link  to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects
              </Link>
              <Link  to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact
              </Link>
        <button onClick={toggleNavbar}>
        <MenuIcon/>
        </button>
    </div>
  </div>
  </>
  );
};

export default Navbar;
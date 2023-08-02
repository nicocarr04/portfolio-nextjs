"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import './header.css'

function Header() {
    // La variable en utilisant le useState
    const [navbarLinksVisible, setNavbarLinksVisible] = useState(false);
  
    // Juste un toggle off et on
    function toggleNavButton() {
      setNavbarLinksVisible((prevState) => !prevState);
    }
  
    // Le div de navbar-links a un check pour si navbarLinksVisible est on ou pas 
    // et si on affiche la class ou pas.
    return (
      <nav className="navbar">
        <Link href="/" className="brand-title"><div>Nicolas Games</div></Link>
        <a className="toggle-navbutton" onClick={toggleNavButton}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={`navbar-links ${navbarLinksVisible ? 'active' : ''}`}>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/projects'>Projects</Link></li>
            <li><Link href='/testimonies'>Testimonies</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }

export default Header;
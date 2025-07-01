// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import fortis from '../assets/fortis.png';

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setHasScrolled(currentScrollPos > 10);
      setIsScrolledDown(currentScrollPos > prevScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolledDown ? 'hidden' : ''} ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container" onClick={() => scrollToSection('hero')}>
        <img src={fortis} alt="Fortis Logo" className="logo" />
      </div>

      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => scrollToSection('hero')}>Home</li>
        <li onClick={() => scrollToSection('products')}>Products</li>
        <li onClick={() => scrollToSection('about')}>About Us</li>
        <li onClick={() => scrollToSection('contact')} className="contact-btn">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

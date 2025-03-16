import React, { useState, useEffect } from 'react';
import './Navbar.css';
import fortis from '../assets/fortis.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      
      setIsScrolled(currentScrollPos > prevScrollPos);

      
      setPrevScrollPos(currentScrollPos);
    };

   
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'hidden' : ''}`}>
      <div className="logo-container">
        <img src={fortis} alt="Logo" className="logo" />
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href='./Hero/Hero.jsx'>Home</a></li>
        <li><a href='./Products.jsx'>Products</a></li>
        <li><a href='./About.jsx'>About Us</a></li>
        <li><button className="contact-btn">Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;

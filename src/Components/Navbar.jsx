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
      
      // Hide navbar when scrolling down, show when scrolling up
      setIsScrolled(currentScrollPos > prevScrollPos);

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Listen for scroll events
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

      {/* Hamburger icon (only visible on small screens) */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Nav links (show when menu is open or on larger screens) */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
        <li><button className="contact-btn">Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;

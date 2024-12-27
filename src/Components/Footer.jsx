import React from 'react';
import './Footer.css'; // Make sure the CSS file is linked
import fortis from '../assets/fortis.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section logo">
          <img src={fortis} alt="Logo" className="footer-logo" />
        </div>

        {/* Location Section */}
        <div className="footer-section location">
          <h4>Location</h4>
          <p>123 Street Name, City, Country</p>
        </div>

        {/* About Section */}
        <div className="footer-section about">
          <h4>About</h4>
          <p>Learn more about our company and the services we provide.</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

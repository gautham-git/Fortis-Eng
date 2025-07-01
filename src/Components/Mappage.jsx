import React from 'react';
import './MapPage.css';

const MapPage = () => {
  return (
    <div className="map-page">
      <div className="map-header">
        <h1 className="map-title">Our Office Location</h1>
        <p className="map-description">
          Find us at our office below. We are located in the heart of the city.
        </p>
      </div>
      
      <div className="map-container">
        <iframe
          title="Fortis Engineers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.807536935621!2d76.5705103639683!3d9.782346754525179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d178d4281a61%3A0x31ccb1240e36b1fd!2sFortis%20Engineers!5e0!3m2!1sen!2sin!4v1751400531150!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapPage;


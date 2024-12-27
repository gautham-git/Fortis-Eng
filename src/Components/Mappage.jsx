import React from 'react';
import './MapPage.css';

const MapPage = () => {
  return (
    <div className="map-page">
      <h1 className="map-title">Our Office Location</h1>
      <p className="map-description">
        Find us at our office below. We are located in the heart of the city.
      </p>
      
      {/* Embed Google Map */}
      <div className="map-container">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2041259019545!2d73.04785901450864!3d33.68442018070235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec0b9e6cc4b1%3A0x7345e52d13c17f5f!2sF-10%20Sector%202%20Rawalpindi%20Pakistan!5e0!3m2!1sen!2sus!4v1637632447734!5m2!1sen!2sus"
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MapPage;

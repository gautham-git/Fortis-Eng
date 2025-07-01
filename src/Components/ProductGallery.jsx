import React, { useState } from 'react';
import './ProductGallery.css';
import fg1 from '../assets/fg1.jpeg';
import fg2 from '../assets/fg2.jpeg';
import fg3 from '../assets/fg3.jpeg';
import fg4 from '../assets/fg4.jpeg';
import fg5 from '../assets/fg5.jpeg';
import fg6 from '../assets/fg6.jpeg';
import fg7 from '../assets/fg7.jpeg';
import fg8 from '../assets/fg8.jpeg';
import fg9 from '../assets/fg9.jpeg';
import fg10 from '../assets/fg10.jpeg';

const ProductGallery = () => {
  const images = [fg1, fg2, fg3, fg4, fg5, fg6, fg7, fg8, fg9, fg10];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="product-gallery">
      <h1 className="gallery-title">Our Product Gallery</h1>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => openModal(index)}>
            <img src={image} alt={`product-${index}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="nav-btn prev-btn" onClick={showPrev}>&#8592;</button>
            <img
              src={images[selectedIndex]}
              alt={`Full view ${selectedIndex + 1}`}
              className="modal-image"
            />
            <button className="nav-btn next-btn" onClick={showNext}>&#8594;</button>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <div className="image-counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;

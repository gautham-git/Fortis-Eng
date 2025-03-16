import React, { useState } from 'react';
import './ProductGallery.css'; // Import the CSS for styling
import card7 from '../assets/card7.jpeg'

const ProductGallery = () => {
  // Array of images (can be replaced with actual paths)
  const images = [
    card7,
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    card7,
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  // State to handle the image click and modal visibility
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal and set the selected image
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="product-gallery">
      {/* Title */}
      <h1 className="gallery-title">Our Product Gallery</h1>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openModal(image)}
          >
            <img src={image} alt={`product-${index}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Modal for showing the selected image in full resolution */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full Resolution" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;

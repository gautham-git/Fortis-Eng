import React, { useState, useRef } from 'react';
import './Products.css';
import card1 from '../assets/card1.jpeg';
import card1a from '../assets/card1a.jpeg';
import card1b from '../assets/card1b.jpeg';
import card1c from '../assets/card1c.jpeg';
import card1d from '../assets/card1d.jpeg';
import card1e from '../assets/card1e.jpeg';
import card1f from '../assets/card1f.jpeg';
import card1g from '../assets/card1g.jpeg';
import card1h from '../assets/card1h.jpeg';
import card1i from '../assets/card1i.jpeg';
import card1j from '../assets/card1j.jpeg';
import card2 from '../assets/card2.jpeg';
import card2a from '../assets/card2a.jpeg';
import card2b from '../assets/card2b.jpeg';
import card2c from '../assets/card2c.jpeg';
import card2d from '../assets/card2d.jpeg';
import card3 from '../assets/card3.jpeg';
import card3a from '../assets/card3a.jpeg';
import card3b from '../assets/card3b.jpeg';
import card3c from '../assets/card3c.jpeg';
import card3d from '../assets/card3d.jpeg';
import card3e from '../assets/card3e.jpeg';
import card3f from '../assets/card3f.jpeg';
import card3g from '../assets/card3g.jpeg';
import card3h from '../assets/card3h.jpeg';
import card3i from '../assets/card3i.jpeg';
import card4 from '../assets/card4.jpeg';
import card4a from '../assets/card4a.jpeg';
import card4b from '../assets/card4b.jpeg';
import card4c from '../assets/card4c.jpeg';
import card4d from '../assets/card4d.jpeg';
import card4e from '../assets/card4e.jpeg';
import card5 from '../assets/card5.jpeg';
import card5a from '../assets/card5a.jpeg';
import card5b from '../assets/card5b.jpeg';
import card5c from '../assets/card5c.jpeg';
import card6 from '../assets/card6.jpeg';
import card6a from '../assets/card6a.jpeg';
import card6b from '../assets/card6b.jpeg';
import card7 from '../assets/card7.jpeg';
import card7a from '../assets/card7a.jpeg';
import card7b from '../assets/card7b.jpeg';
import card7c from '../assets/card7c.jpeg';
import card8 from '../assets/card8.jpeg';
import card8a from '../assets/card8a.jpeg';
import card8b from '../assets/card8b.jpeg';
import card8c from '../assets/card8c.jpeg';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const productsData = [
    { 
      id: 1, 
      image: card1, 
      title: 'Creeper', 
      gallery: [card1a, card1b, card1c, card1d, card1e, card1f, card1g, card1h, card1i, card1j] 
    },
    { 
      id: 2, 
      image: card2, 
      title: 'Dryer', 
      gallery: [card2a, card2b, card2c, card2d] 
    },
    { 
      id: 3, 
      image: card3, 
      title: 'Neo Slab Cutter', 
      gallery: [card3a, card3b, card3c, card3d, card3e, card3f, card3g, card3h, card3i] 
    },
    { 
      id: 4, 
      image: card4, 
      title: 'Hydraulic Press', 
      gallery: [card4a, card4b, card4c, card4d, card4e] 
    },
    { 
      id: 5, 
      image: card5, 
      title: 'Conveyors', 
      gallery: [card5a, card5b, card5c] 
    },
    { 
      id: 6, 
      image: card6, 
      title: 'Hammer Mill', 
      gallery: [card6a, card6b] 
    },
    { 
      id: 7, 
      image: card7, 
      title: 'Bucket Elevator', 
      gallery: [card7a, card7b, card7c] 
    },
    { 
      id: 8, 
      image: card8, 
      title: 'Paddle Stringer', 
      gallery: [card8a, card8b, card8c] 
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsZoomed(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedProduct.gallery.length
    );
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + selectedProduct.gallery.length) % selectedProduct.gallery.length
    );
    setIsZoomed(false);
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current || !isZoomed) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section id="products">
    <div className="product-page">
      <header className="page-header">
        <h1 className="discover-text">Discover</h1>
        <h2 className="products-text">Our Products</h2>
      </header>

      <div className="product-grid">
        {productsData.map((product) => (
          <a
            href="#"
            className="product-card"
            key={product.id}
            onClick={(e) => {
              e.preventDefault();
              openModal(product);
            }}
          >
            <div className="image-container">
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-image" 
              />
            </div>
            <div className="title-container">
              <h3>{product.title}</h3>
              <div className="view-more">View Gallery →</div>
            </div>
          </a>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3 className="modal-title">{selectedProduct.title}</h3>
            
            <div className="image-viewer">
              <div 
                className={`modal-image-container ${isZoomed ? 'zoomed' : ''}`}
                onMouseMove={handleMouseMove}
                onClick={toggleZoom}
              >
                <img 
                  ref={imageRef}
                  src={selectedProduct.gallery[currentImageIndex]} 
                  alt={selectedProduct.title} 
                  className="modal-image"
                  style={{
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    transform: isZoomed ? 'scale(2)' : 'scale(1)',
                    cursor: isZoomed ? 'zoom-out' : 'zoom-in'
                  }}
                />
              </div>
              
              {selectedProduct.gallery.length > 1 && (
                <>
                  <button className="nav-btn prev-btn" onClick={prevImage}>‹</button>
                  <button className="nav-btn next-btn" onClick={nextImage}>›</button>
                  
                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedProduct.gallery.length}
                  </div>
                </>
              )}
            </div>
            
            <div className="thumbnail-container">
              {selectedProduct.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProduct.title} ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsZoomed(false);
                  }}
                />
              ))}
            </div>

            <div className="zoom-controls">
              <button 
                className={`zoom-btn ${isZoomed ? 'active' : ''}`}
                onClick={toggleZoom}
              >
                {isZoomed ? 'Zoom Out (2x)' : 'Zoom In (2x)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default ProductPage;
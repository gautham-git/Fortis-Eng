import React from 'react';
import './Products.css'; // Import the general styles for the grid and cards
import industry from '../assets/industry.png';
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.jpeg';
import card5 from '../assets/card5.jpeg';
import card6 from '../assets/card6.jpeg';
import card7 from '../assets/card7.jpeg';
import card8 from '../assets/card8.jpeg';

// Sample product data for 9 cards
const cardsData = [
  { id: 1, image: industry, title: '', link: '' },  // First card with just an image
  { id: 2, image: card1, title: 'Creeper', link: '#' },
  { id: 3, image: card2, title: 'Dryer', link: '#' },
  { id: 4, image: card3, title: 'Neo Slab Cutter', link: '#' },
  { id: 5, image: card4, title: 'Hydraulic Press', link: '#' },
  { id: 6, image: card5, title: 'Conveyors', link: '#' },
  { id: 7, image: card6, title: 'Hammer Mill', link: '#' },
  { id: 8, image: card7, title: 'Bucket Elevetor', link: '#' },
  { id: 9, image: card8, title: 'Paddle Stringer', link: '#' },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Title above the grid */}
      <h2 className="grid-title">Our Product Range</h2>

      <div className="product-grid">
        {/* First Card: Image Only (no title) */}
        <div className="product-card first-card">
          <div className="image-container">
            <img src={industry} alt="Product 1" className="product-image" />
          </div>
        </div>

        {/* Render other Product Cards (Image + Title) */}
        {cardsData.slice(1).map((card) => (
          <div className="product-card" key={card.id}>
            <div className="image-container">
              <img src={card.image} alt={card.title} className="product-image" />
            </div>
            <div className="title-container">
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

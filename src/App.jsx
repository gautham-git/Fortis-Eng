import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About';
import Products from './Components/Products';
import ClientPage from './Components/ClientPage';
import ProductGallery from './Components/ProductGallery';
import ContactPage from './Components/Contactpage';
import MapPage from './Components/Mappage';
import Footer from './Components/Footer';

// Main content component that handles scroll-to-section
const MainContent = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Hero id="home" />
      <About id="about" />
      <Products id="products" />
      <ClientPage />
      <ProductGallery />
      <ContactPage id="contact" />
      <MapPage />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/about" element={<MainContent />} />
        <Route path="/products" element={<MainContent />} />
        <Route path="/contact" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;
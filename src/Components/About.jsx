import React, { useState, useEffect, useRef } from 'react';
import './About.css'; // Ensure to include your CSS
import aboutpic from '../assets/aboutpic.jpeg';

// CountUp Component with Intersection Observer
const CountUp = ({ target, duration, label }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    // Set up the Intersection Observer to detect when the element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Element is in view
        }
      });
    }, { threshold: 0.5 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let startTime = null;

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const value = Math.min(Math.floor((progress / duration) * target), target);
        setCount(value);

        if (value < target) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, target, duration]);

  return (
    <div ref={counterRef} className="counter">
      <h1>{count}+ {label}</h1>
    </div>
  );
};

// About Section Component
const About = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <h1>About Fortis Engineering</h1>
        <p className="p1">
          Fortis Engineers - The leading Natural Rubber processing (TSR/ISNR) machinery manufacturer, successfully continues its journey in supplying quality and reliable machines all over India, making it one of the top players in the industry.
        </p>
        <p className="p2">
          Our commitment to delivering the best quality machinery and prompt service has propelled the company to this position. Quality is our motto, teamwork is our strength. We understand the challenges faced by the industry and work towards delivering machines with innovative upgrades.
        </p>
        <p className="p3">
          We assist you in all aspects of factory installation starting from project report assistance, layout setting out, plant design, operations, installation, commissioning, and trial runs.
        </p>
        <p className="p4">
          We welcome you to associate with us in building your dream crumb/TSR factory.
        </p>

        {/* Counter Section - Wrapped in a new container */}
        <div className="counter-container">
          <div className="counter-block">
            <CountUp target={30} duration={3000} label="Products Delivered" />
          </div>
          
          <div className="counter-block">
            <CountUp target={4} duration={3000} label="Years of Experience" />
          </div>
        </div>
      </div>

      <div className="image-section">
        <img src={aboutpic} alt="Fortis Engineering" />
      </div>
    </div>
  );
};

export default About;

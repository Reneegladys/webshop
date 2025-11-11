import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Assuming you have a separate CSS file for styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Store</h1>
        <p className="hero-subtitle">Explore the best products with unbeatable prices!</p>
        <Link to="/products" className="cta-button">Browse Products</Link>
      </div>
    </section>
  );
};

export default Hero;

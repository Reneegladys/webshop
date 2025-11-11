// About.js (Component for About Section)
import React from 'react';
import './About.css'; // You can style it with a separate CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="https://th.bing.com/th/id/OIP.QkT-xlzlYkX_Hv2H9wZByAHaFk?rs=1&pid=ImgDetMain" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to our online store! We are dedicated to providing high-quality, stylish products that meet the needs of our customers. Our mission is to offer a seamless shopping experience with great customer service, fast shipping, and an ever-expanding range of products. Whether you're looking for fashion, gadgets, or home decor, we have something special just for you.
          </p>
          <p>
            Our team works hard to ensure that we bring you the latest trends and most innovative products at affordable prices. We believe in sustainability and strive to ensure that our business practices reflect our commitment to making the world a better place.
          </p>
          <button className="cta-button">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default About;

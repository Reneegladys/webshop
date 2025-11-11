import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>TopStyle</h4>
          <p>Din moderna webbshop för kläder och skor.</p>
        </div>

        <div className="footer-section">
          <h4>Länkar</h4>
          <ul>
            <li><a href="/products">Produkter</a></li>
            <li><a href="/about">Om oss</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Email: support@topstyle.com</p>
          <p>Telefon: 0123-456 789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TopStyle. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;

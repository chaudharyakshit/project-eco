import React, { useState, useEffect } from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPaperPlane,
  FaArrowUp
} from 'react-icons/fa';

import logo from '../assets/main-logo.png'; // Adjust the path if needed

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="Thunderbolt Motorcycles" />
            </div>
            <p>
              Thunderbolt Motorcycles is America's premier motorcycle manufacturer,
              crafting legendary bikes since 1952. Born from a passion for the open road
              and built with uncompromising quality.
            </p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Motorcycles</h3>
            <ul>
              <li><a href="#">Thunder Chief</a></li>
              <li><a href="#">Storm Scout</a></li>
              <li><a href="#">Lightning FTR</a></li>
              <li><a href="#">All Models</a></li>
              <li><a href="#">Build Your Bike</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Owners Manuals</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Service & Maintenance</a></li>
              <li><a href="#">Recalls</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Connected</h3>
            <p>
              Subscribe to our newsletter for the latest news, events, and exclusive offers
              from Thunderbolt Motorcycles.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit"><FaPaperPlane /></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Ecocruse Motorcycles. All rights reserved. |
            <a href="#"> Privacy Policy </a> |
            <a href="#"> Terms of Use </a>
          </p>
        </div>
      </footer>

      {showScrollButton && (
        <button className="scroll-to-top-footer" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;

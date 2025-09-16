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
import ChatBot from './ChatBot';

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
              ECOCRUZE Scooty is Inidan's premier Scooter manufacturer,
              crafting legendary Scooters. Born from a passion for the open road
              and built with uncompromising quality.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1JuSJHBnKw/"><FaFacebookF /></a>
              <a href="https://www.instagram.com/ecocruze_?igsh=MWN6OGdqamltOWI5cg=="><FaInstagram /></a>
              <a href="https://youtube.com/@ecocruze-1?si=zgzQhs6w3e0f6pLa"><FaYoutube /></a>
              <a href="https://x.com/ecocruze79264?t=WkZ00rJI4tay5tOlwBizqw&s=08 "><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Motorcycles</h3>
            <ul>
              <li><a href="/cruze-blade-details">Cruze Blade</a></li>
              <li><a href="/EcoShine-details">Eco Shine</a></li>
              <li><a href="/ecoswift-details">Eco swift</a></li>
              <li><a href="/ecojoy-details">Eco joy</a></li>
              <li><a href="/eco-glider-details">Eco Glider</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li><a href="/dealership">Dealership</a></li>
              <li><a href="/News">News</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Connected</h3>
            <p>
              Subscribe to our newsletter for the latest news, events, and exclusive offers
              from ECOCRUZE Scooter.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit"><FaPaperPlane /></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023  ECOCRUZE Scooter. All rights reserved. |
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
    <ChatBot />
    </>
  );
};

export default Footer;

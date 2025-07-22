// components/Header/Header.jsx
import React from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingBag, FaBars } from 'react-icons/fa';
import logo from '../assets/main-logo.png'; // Adjust the path as necessary

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      {/* <div className="top-bar">
        <a href="#">Find a Dealer</a>
        <a href="#">Test Ride</a>
        <a href="#">Book Service</a>
        <a href="#">Contact Us</a>
      </div> */}
      <div className="main-header">
        <a href="#" className="logo">
          <img src={logo} alt="Thunderbolt Motorcycles" />
        </a>
        
        <nav className={mobileMenuOpen ? 'mobile-open' : ''}>
          <ul>
            <li><a href="#">Motorcycles</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Apparel</a></li>
            <li><a href="#">Heritage</a></li>
            <li><a href="#">Owners</a></li>
            <li><a href="#">Dealers</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <a href="#"><FaSearch /></a>
          <a href="#"><FaUser /></a>
          <a href="#"><FaShoppingBag /></a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
// components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import { FaSearch, FaUser, FaShoppingBag, FaBars } from 'react-icons/fa';
import logo from '../assets/main-logo.png';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="main-header">
        <Link to="/" className="logo">
          <img src={logo} alt="Ecocruze Motorcycles" />
        </Link>
        
        <nav className={mobileMenuOpen ? 'mobile-open' : ''}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Dealership</Link></li>
          </ul>
        </nav>
        
        <div className="header-actions">

          {/* <Link to="/account"><FaUser /></Link>
          <Link to="/cart"><FaShoppingBag /></Link> */}
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
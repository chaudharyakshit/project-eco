import React from 'react';
import './Dealership.css';
import contactImage from '../assets/Banner1.png'; // Add your image path

const Dealership= () => {
  return (
    <div className="contact-container">
      {/* Main heading with decorative line */}
      <div className="contact-header">
        <h1>Our Contact Information</h1>
        <div className="header-line"></div>
      </div>

      <div className="contact-content">
        {/* Left column - Contact information */}
        <div className="contact-info">
          <div className="info-section">
            <h3>Our Address</h3>
            <ul>
              <li>Block I-64 FOUNTAIN CHOWK </li>
              <li>NEHRU COLONY, DEHRADUN</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Contact Number</h3>
            <ul>
              <li>10am, +00.3019.2019</li>
              <li>Email: sunbeng@mail.com</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Opening Hour</h3>
            <ul>
              <li>Monday - 9:00 - 18:00</li>
              <li>Sunday, Chapel</li>
            </ul>
          </div>

          {/* Location image */}
          <div className="contact-image">
            <img src={contactImage} alt="Our location" />
          </div>
        </div>

        {/* Right column - Contact form */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Electronic Dating" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Additional decorative element */}
      <div className="contact-footer-line"></div>
    </div>
  );
};

export default Dealership;
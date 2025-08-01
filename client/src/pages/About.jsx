// AboutUs.jsx
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about-banner">
      <div className="about-banner-overlay">
        <div className="about-banner-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link> &gt; <span>About Us</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

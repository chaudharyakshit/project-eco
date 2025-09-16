// AboutUs.jsx
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Features from '../components/Features';
import Calculator from '../components/calculator';
import banner1 from '../assets/about1.png';
import Testimonials from '../components/Testimonials';
import banner2 from '../assets/about.png';

const AboutUs = () => {
  return (
    <>
      {/* Banner Section */}
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

      {/* Main About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Side - Images */}
          <div className="about-images">
            <img src={banner2} alt="Handshake" className="about-img top-img" />
            
          </div>

          {/* Right Side - Text */}
          <div className="about-content">
            <h5 className="about-subtitle">Welcome To Ecocruze</h5>
            <h2 className="about-heading">About Us Our Auto Dealership Company</h2>
            <p>
            EcoCruze is a pioneering eco-friendly brand dedicated to promoting sustainable living and reducing environmental impact.
             Our mission is to empower individuals and communities to make conscious choices, fostering a healthier planet for future generations.
            </p>
            <p>
              We offer flexible payment plans to meet your financial needs and even provide 
              tailored solutions for customers with various credit profiles.
            </p>

            {/* CEO Info */}
            {/* <div className="about-ceo">
              <img src="/images/ceo.jpg" alt="CEO" className="ceo-img" />
              <div>
                <h4>Richard Smith Colin</h4>
                <p>CEO, Founder of Kars</p>
              </div>
            </div> */}

            {/* Stats Section */}
            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-number">176+</span>
                <p>SUCCESS PROJECTS</p>
              </div>
              <div className="stat-box">
                <span className="stat-number">50+</span>
                <p>PROFESSIONAL TEAM</p>
              </div>
              <div className="stat-box">
                <span className="stat-number">2100+</span>
                <p>CLIENTS SATISFIED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
      <Calculator/>
      <Testimonials/>
    </>
  );
};
export default AboutUs;


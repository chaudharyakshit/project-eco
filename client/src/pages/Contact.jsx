import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message || 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="contact-container">
      {/* Main heading */}
      <div className="contact-header">
        <h1>Our Contact Information</h1>
        <div className="header-line"></div>
      </div>

      <div className="contact-content">
        {/* Left column */}
        <div className="contact-info">
          <div className="info-section">
            <h3>Our Address</h3>
            <ul>
              <li>Block I-64 FOUNTAIN CHOWK</li>
              <li>NEHRU COLONY, DEHRADUN</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Contact Number</h3>
            <ul>
              <li> +917017175520</li>
              <li>Email: Indiasgodigital5@gmail.com</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Opening Hour</h3>
            <ul>
              <li>Monday - Saturday</li>
              <li>9:00 AM to 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Right column - Form */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
  type="text"
  name="subject"               
  placeholder="Subject"        
  value={formData.subject}     
  onChange={handleChange}
/>

            
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Decorative footer line */}
      <div className="contact-footer-line"></div>
    </div>
  );
};

export default ContactUs;

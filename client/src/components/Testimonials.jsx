// components/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "I've ridden many Scooters  over the years, but nothing compares to the raw power and smooth handling of my ECOCRUZE . ECOCRUZE has truly created something special with this machine.",
    name: "Akshit",
  
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uAf2BeFSO3fp2XLvsBOigcSVs4doSFTzCA&s"
  },
  {
    id: 2,
    text: "The ECOCRUZE  is the perfect balance of power and agility. I've taken it on cross-country trips and city commutes - it handles everything with ease and turns heads everywhere I go.",
    name: "Rohit",
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmt7mgLLJbU_An415Sur0-Iq8kRKQzzAwCw&s"
  },
  {
    id: 3,
    text: "As a long-time rider, I was skeptical about trying a new brand. The ECOCRUZE completely changed my mind. The performance and build quality are unmatched in its class.",
    name: "Ananya",
    image: "https://thumbs.dreamstime.com/b/serious-young-indian-woman-standing-indoor-arms-crossed-unsmiling-dressed-blue-casual-shirt-having-calm-composed-face-364421490.jpg"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="testimonials-section">
      <h2 className="section-title1">Customer Feedbacks</h2>
      <div className="testimonials-slider">
        <div 
          className="testimonial"
          key={testimonial.id}
        >
          <p className="testimonial-text">"{testimonial.text}"</p>
          <div className="testimonial-author">
            <div className="author-avatar">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="author-info">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
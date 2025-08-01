// components/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "I've ridden many bikes over the years, but nothing compares to the raw power and smooth handling of my Thunder Chief. Thunderbolt has truly created something special with this machine.",
    name: "Mike Johnson",
    role: "Thunder Chief Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "The Storm Scout is the perfect balance of power and agility. I've taken it on cross-country trips and city commutes - it handles everything with ease and turns heads everywhere I go.",
    name: "Sarah Williams",
    role: "Storm Scout Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "As a long-time rider, I was skeptical about trying a new brand. The Lightning FTR completely changed my mind. The performance and build quality are unmatched in its class.",
    name: "David Chen",
    role: "Lightning FTR Owner",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
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
      <h2 className="section-title1">Rider Stories</h2>
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
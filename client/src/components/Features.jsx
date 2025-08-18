// components/Features/Features.jsx
import React from 'react';
import './Features.css';
import { FaCogs, FaShieldAlt, FaTools, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaCogs />,
    title: 'Indian Engineering',
    description: 'Each ECOCRUZE Scooter is built with precision engineering and uncompromising quality standards in our Indian facilities.'
  },
  {
    icon: <FaShieldAlt />,
    title: '3-Year Warranty',
    description: 'We stand behind our scooter with the industry\'s best warranty coverage for complete peace of mind.'
  },
  {
    icon: <FaTools />,
    title: 'Customization',
    description: 'Make it uniquely yours with our extensive customization options and genuine ECOCRUZE accessories.'
  },
  {
    icon: <FaUsers />,
    title: 'Rider Community',
    description: 'Join our passionate community of ECOCRUZE riders with exclusive events and rides across the country.'
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="section-title1">Why Choose Ecocruze</h2>
      <div className="features-grid1">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="feature-card floating"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon1">
              {feature.icon}
            </div>
            <h3 className="feature-title1">{feature.title}</h3>
            <p className="feature-desc1">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
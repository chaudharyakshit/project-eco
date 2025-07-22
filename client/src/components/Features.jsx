// components/Features/Features.jsx
import React from 'react';
import './Features.css';
import { FaCogs, FaShieldAlt, FaTools, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaCogs />,
    title: 'American Engineering',
    description: 'Each Thunderbolt motorcycle is built with precision engineering and uncompromising quality standards in our U.S. facilities.'
  },
  {
    icon: <FaShieldAlt />,
    title: '5-Year Warranty',
    description: 'We stand behind our bikes with the industry\'s best warranty coverage for complete peace of mind.'
  },
  {
    icon: <FaTools />,
    title: 'Customization',
    description: 'Make it uniquely yours with our extensive customization options and genuine Thunderbolt accessories.'
  },
  {
    icon: <FaUsers />,
    title: 'Rider Community',
    description: 'Join our passionate community of Thunderbolt riders with exclusive events and rides across the country.'
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">Why Choose Thunderbolt</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="feature-card floating"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
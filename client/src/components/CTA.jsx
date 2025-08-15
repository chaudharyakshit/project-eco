// components/CTA/CTA.jsx
import React from 'react';
import './CTA.css';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section">
      <motion.div 
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="cta-title">Ready to Ride the Ecocruze?</h2>
        <p className="cta-text">Schedule a test ride at your nearest Thunderbolt dealer and experience the power, performance, and craftsmanship for yourself.</p>
        <a href="/dealership" className="btn btn-primary">Find a Dealer</a>
      </motion.div>
    </section>
  );
};

export default CTA;
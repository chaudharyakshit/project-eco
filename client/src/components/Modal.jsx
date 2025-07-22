// components/Models/Models.jsx
import React from 'react';
import './Modal.css';
import { motion } from 'framer-motion';

const models = [
  {
    id: 1,
    name: 'Thunder Chief',
    price: 'Starting at $21,999',
    image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    specs: [
      { value: '116', label: 'HP' },
      { value: '1,890cc', label: 'Engine' },
      { value: '128ft-lb', label: 'Torque' }
    ]
  },
  {
    id: 2,
    name: 'Storm Scout',
    price: 'Starting at $13,499',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    specs: [
      { value: '100', label: 'HP' },
      { value: '1,133cc', label: 'Engine' },
      { value: '72ft-lb', label: 'Torque' }
    ]
  },
  {
    id: 3,
    name: 'Lightning FTR',
    price: 'Starting at $14,999',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    specs: [
      { value: '120', label: 'HP' },
      { value: '1,203cc', label: 'Engine' },
      { value: '87ft-lb', label: 'Torque' }
    ]
  }
];

const Models = () => {
  return (
    <section className="models-section">
      <h2 className="section-title">Our Legendary Models</h2>
      <div className="models-grid">
        {models.map((model, index) => (
          <motion.div 
            key={model.id}
            className="model-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="model-image">
              <img src={model.image} alt={model.name} />
            </div>
            <div className="model-info">
              <h3 className="model-name">{model.name}</h3>
              <p className="model-price">{model.price}</p>
              <div className="model-specs">
                {model.specs.map((spec, i) => (
                  <div key={i} className="spec-item">
                    <div className="spec-value">{spec.value}</div>
                    <div className="spec-label">{spec.label}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Models;
// components/Gallery/Gallery.jsx
import React from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517846693594-1567da72af75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Riding Community'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBzY29vdGVyfGVufDB8fDB8fHww',
    title: 'Custom Builds'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1623079398118-11b5da627a00?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Adventure Riding'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1623079396775-e7137aff8385?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Heritage'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1696955565902-19a37e1a7f1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxlbGVjdHJpYyUyMHNjb290ZXJ8ZW58MHx8MHx8fDA%3D',
    title: 'Events'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1648204819350-ee7da535bdf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGVsZWN0cmljJTIwc2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Apparel'
  },

   {
    id: 7,
    image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    title: 'Accessories'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Custom Builds'
  },
  

];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="section-title">Ecocruze Lifestyle</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.div 
            key={item.id}
            className="gallery-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <h3 className="gallery-title">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
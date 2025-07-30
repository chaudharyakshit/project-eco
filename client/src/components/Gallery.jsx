// components/Gallery/Gallery.jsx
import React from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
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
    image: 'https://cdn.bikedekho.com/processedimages/komaki/xone/source/xone67067b2cdd342.jpg',
    title: 'Accessories'
  },
  {
    id: 8,
    image: 'https://cdn.bikedekho.com/processedimages/ola-electric/2025-s1x/source/2025-s1x679cde26932de.jpg',
    title: 'Custom Builds'
  },
  

];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="section-title1">Ecocruze Lifestyle</h2>
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
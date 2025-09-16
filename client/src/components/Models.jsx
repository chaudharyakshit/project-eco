// components/Models/Models.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Models.css';
import { motion } from 'framer-motion';
import EcoShine from '../assets/Eco-Shine.png'
import EcoGlider from '../assets/Eco-Glider.png'
import Ecojoy from '../assets/eco-joy.png'

// 3D scooter models from reputable sources
const models = [
  {
    id: 1,
    name: 'Eco Shine',
    tagline: 'Premium Electric Cruiser',
    price: 'Starting at ',
    image: EcoShine,
    poster: EcoShine,
    specs: [
      { value: '60', label: 'Km/h' },
      { value: '90Km', label: 'Range' },
      { value: '3.5h', label: 'Charge Time' }
    ],
    colors: ['#c00', '#333', '#0066cc']
  },
  {
    id: 2,
    name: 'Eco Gilder',
    tagline: 'City Commuter Pro',
    price: 'Starting at ',
    image: EcoGlider,
    poster: EcoGlider,
    specs: [
      { value: '60', label: 'Km/h' },
      { value: '75Km', label: 'Range' },
      { value: '3.5h', label: 'Charge Time' }
    ],
    colors: ['#00cc66', '#222', '#ffcc00']
  },
  {
    id: 3,
    name: 'Eco Joy',
    tagline: 'Off-Road Adventure',
    price: 'Starting at ',
    image: Ecojoy ,
    poster: Ecojoy,
    specs: [
      { value: '60', label: 'Km/h' },
      { value: '80Km', label: 'Range' },
      { value: '3.5', label: 'Charge Time' }
    ],
    colors: ['#663300', '#222', '#cc0000']
  }
];

const Models = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);
  const modelViewerRefs = useRef([]);

  useEffect(() => {
    // Auto-scroll every 2 seconds
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % models.length);
    }, 9000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Load Model Viewer component dynamically
    const loadModelViewer = async () => {
      if (typeof window !== 'undefined' && !window.loadedModelViewer) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
        script.type = 'module';
        script.onload = () => {
          window.loadedModelViewer = true;
          setIs3DLoaded(true);
        };
        document.body.appendChild(script);
      } else {
        setIs3DLoaded(true);
      }
    };

    loadModelViewer();
  }, []);

  useEffect(() => {
    // Scroll to the current index
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.model-card').offsetWidth;
      container.scrollTo({
        left: currentIndex * (cardWidth + 30), // 30px for gap
        behavior: 'smooth'
      });
    }

    // Auto-rotate the 3D model when active
    if (is3DLoaded && modelViewerRefs.current[currentIndex]) {
      modelViewerRefs.current[currentIndex].cameraOrbit = '0deg 75deg 105%';
      modelViewerRefs.current[currentIndex].autoRotate = true;
    }
  }, [currentIndex, is3DLoaded]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + models.length) % models.length);
    resetInterval();
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % models.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % models.length);
    }, 2000);
  };

  return (
    <section className="models-section">
      <div className="models-header">
        <h2 className="section-title1">Our Latest Models</h2>
        <p className="section-subtitle"> Make it Yours</p>
      </div>
      
      <div className="models-container">
        <button className="nav-button prev" onClick={handlePrev}>
          &lt;
        </button>
        
        <div className="models-scroll-container" ref={scrollContainerRef}>
          <div className="models-scroll-content">
            {models.map((model, index) => (
              <motion.div 
                key={model.id}
                className={`model-card ${index === currentIndex ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="model-badge">New</div>
                <div className="model-image-container">
                  {is3DLoaded ? (
                    <model-viewer
                      ref={el => modelViewerRefs.current[index] = el}
                      src={model.image}
                      alt={model.name}
                      poster={model.poster}
                      shadow-intensity="1"
                      camera-controls
                      auto-rotate
                      ar
                      ar-modes="webxr scene-viewer quick-look"
                      className="model-3d-viewer"
                    >
                      {/* <button slot="ar-button" className="ar-button">
                        View in AR
                      </button> */}
                    </model-viewer>
                  ) : (
                    <img src={model.poster} alt={model.name} className="model-image" />
                  )}
                  <div className="model-colors">
                    {model.colors.map((color, i) => (
                      <span 
                        // key={i} 
                        // className="color-option" 
                        // style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="model-info">
                  <div className="model-text">
                    <h3 className="model-name">{model.name}</h3>
                    <p className="model-tagline">{model.tagline}</p>
                  </div>
                  <div>
                    <span className='Starting-Text1'>Starting at</span>
           <a 
           
  href={`https://wa.me/918607998882?text=Hi, I'm interested in the ${model.name} model!`} 
  className="whatsapp-link1" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" className="whatsapp-icon2" />
</a>
</div>
                  
                  <div className="model-specs">
                    {model.specs.map((spec, i) => (
                      <div key={i} className="spec-item">
                        <div className="spec-value">{spec.value}</div>
                        <div className="spec-label">{spec.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="model-actions">
                    <a href="/contact" className="btn btn-primary">Make Yours</a>
                    <a href="/contact" className="btn btn-secondary">Contact Us</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <button className="nav-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      
      <div className="pagination-dots">
        {models.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              resetInterval();
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Models;
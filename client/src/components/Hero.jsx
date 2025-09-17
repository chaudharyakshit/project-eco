import React, { useEffect, useState, useCallback } from 'react';
import './Hero.css';
import { AnimatePresence, motion } from 'framer-motion';
import hero1 from "../assets/8b.png";
import hero2 from "../assets/9b.png";
import hero3 from "../assets/10b.png";

const heroData = [
  {
    title: 'Find Your Perfect Scooty For Ride',
    desc: 'Explore stylish and high-performance electric scooty built for modern commuters.',
    img: hero1,
    alt: "Ecocruze Motorcycles",
    primaryBtn: 'explore more',
    secondaryBtn: 'Contact Us',
  },
  {
    title: 'Power Blends with Design',
    desc: 'Experience the thrill of a powerful ride blended with premium design and eco-efficiency.',
    img: hero2,
    alt: "Power Design",
    primaryBtn: 'Make it Yours',
    secondaryBtn: 'Contact us',
  },
  {
    title: 'Power Blends with a style',
    desc: 'Experience the thrill of a powerful ride blended with premium design and eco-efficiency.',
    img: hero3,
    alt: "Power Style",
    primaryBtn: 'Make it Yours',
    secondaryBtn: 'Contact us',
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = heroData.map((item, idx) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => ({ ...prev, [idx]: true }));
            resolve();
          };
          img.onerror = () => {
            setImagesLoaded(prev => ({ ...prev, [idx]: true }));
            resolve();
          };
          img.src = item.img;
        });
      });
      
      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    };

    preloadImages();
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (isLoading) return;
    
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroData.length);
        setVisible(true);
      }, 400);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index, isLoading]);

  const data = heroData[index];

  // Handle manual slide change
  const handleSlideChange = useCallback((newIndex) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(newIndex);
      setVisible(true);
    }, 400);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        {isLoading && (
          <div className="hero-loading">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
          </div>
        )}
        
        <AnimatePresence mode="wait">
          {visible && !isLoading && (
            <motion.div
              key={index}
              className="hero-slide"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero-left">
                <div className="hero-text">
                  <span className="tagline">
                    RIDE<span className="grey">THE REVOLUTION</span>
                  </span>
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                  <div className="hero-buttons">
                    <a href="/" className="btn primary">{data.primaryBtn} →</a>
                    <a href="/contact" className="btn secondary">{data.secondaryBtn} →</a>
                  </div>
                </div>
              </div>

              <div className="hero-right">
                <img
                  src={data.img}
                  alt={data.alt}
                  className="hero-image"
                  loading="eager"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    opacity: imagesLoaded[index] ? 1 : 0.7,
                    transition: 'opacity 0.3s ease'
                  }}
                  onError={(e) => { 
                    e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; 
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hero-pagination">
        {heroData.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => handleSlideChange(i)}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSlideChange(i);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

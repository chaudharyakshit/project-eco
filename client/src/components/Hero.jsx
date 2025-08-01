import React, { useEffect, useState } from 'react';
import './Hero.css';
import { AnimatePresence, motion } from 'framer-motion';

const heroData = [
  {
    title: 'Find Your Perfect Scooty For Ride',
    desc: 'Explore stylish and high-performance electric scooties built for modern commuters.',
    img: 'https://images.tractorjunction.com/Cosmic_Black_6_730309d42c.png?format=webp&quality=40',
    primaryBtn: 'Go To Listing',
    secondaryBtn: 'Contact Us',
  },
  {
    title: 'Power Meets Elegance',
    desc: 'Experience the thrill of a powerful ride blended with premium design and eco-efficiency.',
    img: 'https://images.tractorjunction.com/Cosmic_Black_6_730309d42c.png?format=webp&quality=40',
    primaryBtn: 'Build Yours',
    secondaryBtn: 'Learn More',
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroData.length);
        setVisible(true);
      }, 400); // transition time
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  const data = heroData[index];

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <AnimatePresence mode="wait">
          {visible && (
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
                    LUXURY <span className="grey">MEETS AFFORDABILITY</span>
                  </span>
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                  <div className="hero-buttons">
                    <a href="#" className="btn primary">{data.primaryBtn} →</a>
                    <a href="#" className="btn secondary">{data.secondaryBtn} →</a>
                  </div>
                </div>
              </div>

              <div className="hero-right">
                <img src={data.img} alt="Scooty" className="hero-image" />
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
            onClick={() => {
              setVisible(false);
              setTimeout(() => {
                setIndex(i);
                setVisible(true);
              }, 400);
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;

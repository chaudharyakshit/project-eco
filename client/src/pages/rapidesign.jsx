// src/pages/RapidsignShowcase.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../pages/rapidesign.css'; // New CSS file for Rapidsign styling

// Images (Update these paths for Rapidsign images)
import image1 from '../assets/Inner-Images/Rapi design/1.png';
import image2 from '../assets/Inner-Images/Rapi design/2.png';
import image3 from '../assets/Inner-Images/Rapi design/3.png';

// Icons
import { 
  FaBolt, FaMotorcycle, FaCarBattery, FaTachometerAlt, 
  FaExpand, FaChevronRight, FaChevronLeft,
  FaRegLightbulb, FaShieldAlt, FaMobileAlt, FaWeightHanging
} from 'react-icons/fa';
import { GiPowerLightning, GiCarWheel } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import { RiSteering2Fill } from 'react-icons/ri';

const RapidsignShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [zoomImage, setZoomImage] = useState(null);
  const videoRef = useRef(null);

  const specs = {
    performance: [
      { icon: <IoMdSpeedometer />, label: "Top Speed", value: "60 km/h" },
      { icon: <FaBolt />, label: "Acceleration", value: "0-40km in 5s" },
      { icon: <GiPowerLightning />, label: "Motor Power", value: "1200W BLDC" },
      { icon: <FaCarBattery />, label: "Range", value: "85 km/charge" }
    ],
    design: [
      { icon: <FaWeightHanging />, label: "Weight", value: "92 kg" },
      { icon: <GiCarWheel />, label: "Wheels", value: "12\" Alloy" },
      { icon: <RiSteering2Fill />, label: "Suspension", value: "Dual Hydraulic" }
    ],
    tech: [
      { icon: <FaRegLightbulb />, label: "Lighting", value: "Full LED System" },
      { icon: <FaMobileAlt />, label: "Connectivity", value: "Smart App Control" },
      { icon: <FaShieldAlt />, label: "Security", value: "Alarm + GPS Tracking" },
      { icon: <FaTachometerAlt />, label: "Display", value: "Digital Dashboard" }
    ]
  };

  const features = [
    {
      title: "Smooth Performance",
      desc: "1200W motor for a balance of speed and efficiency",
      icon: <GiPowerLightning />
    },
    {
      title: "Reliable Range",
      desc: "60V lithium battery lasting up to 85km per charge",
      icon: <FaCarBattery />
    },
    {
      title: "Smart Features",
      desc: "Integrated GPS, ride analytics, and safety alerts",
      icon: <FaMobileAlt />
    },
  ];

  const galleryImages = [
    { id: 1, src: image1, alt: 'Rapidsign Side View' },
    { id: 2, src: image2, alt: 'Rapidsign Left View' },
    { id: 3, src: image3, alt: 'Rapidsign Front View' },
  ];

  return (
    <div className="rapidsign-showcase">
      {/* Hero Video Section */}
      <section className="hero">
  <div className="hero-content">
    <h1>Ride the Revolution</h1>
    <p>Eco-friendly. Stylish. Powerful.</p>
    <button>Explore Now</button>
  </div>
</section>

      {/* Feature Highlights */}
      <section className="feature-highlights">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="feature-line" style={{ backgroundColor: "#2c3e50" }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="tech-specs">
        <div className="specs-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            Performance
          </button>
          <button 
            className={`tab-btn ${activeTab === 'technology' ? 'active' : ''}`}
            onClick={() => setActiveTab('technology')}
          >
            Technology
          </button>
        </div>
        
        <div className="specs-content">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="specs-grid"
            >
              {activeTab === 'overview' && specs.performance.map((spec, index) => (
                <div key={index} className="spec-item">
                  <div className="spec-icon">{spec.icon}</div>
                  <div className="spec-details">
                    <h4>{spec.label}</h4>
                    <p>{spec.value}</p>
                  </div>
                </div>
              ))}
              
              {activeTab === 'performance' && specs.performance.map((spec, index) => (
                <div key={index} className="spec-item">
                  <div className="spec-icon">{spec.icon}</div>
                  <div className="spec-details">
                    <h4>{spec.label}</h4>
                    <p>{spec.value}</p>
                  </div>
                </div>
              ))}
              
              {activeTab === 'technology' && specs.tech.map((spec, index) => (
                <div key={index} className="spec-item">
                  <div className="spec-icon">{spec.icon}</div>
                  <div className="spec-details">
                    <h4>{spec.label}</h4>
                    <p>{spec.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Explore the Rapidsign from every angle</p>
        </div>
        
        <div className="gallery-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: '.gallery-next',
              prevEl: '.gallery-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <motion.div 
                  className="gallery-item"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setZoomImage(image.src)}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="zoom-indicator">
                    <FaExpand />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="gallery-nav gallery-prev">
            <FaChevronLeft />
          </button>
          <button className="gallery-nav gallery-next">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div 
            className="image-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
          >
            <motion.img 
              src={zoomImage}
              alt="Fullscreen view"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            />
            <button 
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setZoomImage(null);
              }}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RapidsignShowcase;

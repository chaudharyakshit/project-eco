import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import '../pages/ecoglider.css'

// Images (Update these paths for Eco Glider images)
import image1 from '../assets/Inner-Images/Eco Glider/1.png';
import image2 from '../assets/Inner-Images/Eco Glider/2.png';
import image3 from '../assets/Inner-Images/Eco Glider/3.png';
import image4 from '../assets/Inner-Images/Eco Glider/4.png';
import brand5 from '../assets/Inner-Images/Eco Glider/1.png';

// Icons
import { 
  FaBolt, FaMotorcycle, FaCarBattery, FaTachometerAlt, 
  FaExpand, FaChevronRight, FaChevronLeft,
  FaRegLightbulb, FaShieldAlt, FaMobileAlt, FaWeightHanging
} from 'react-icons/fa';
import { GiPowerLightning, GiCarWheel } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import { RiSteering2Fill } from 'react-icons/ri';

const EcoGliderShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [zoomImage, setZoomImage] = useState(null);
  const videoRef = useRef(null);

  const specs = {
    performance: [
      { icon: <IoMdSpeedometer />, label: "Top Speed", value: "55 km/h" },
      { icon: <FaBolt />, label: "Acceleration", value: "0-40km in 5s" },
      { icon: <GiPowerLightning />, label: "Motor Power", value: "1200W BLDC" },
      { icon: <FaCarBattery />, label: "Range", value: "80 km/charge" }
    ],
    design: [
      { icon: <FaWeightHanging />, label: "Weight", value: "90 kg" },
      { icon: <GiCarWheel />, label: "Wheels", value: "12\" Alloy" },
      { icon: <RiSteering2Fill />, label: "Suspension", value: "Dual Hydraulic" }
    ],
    tech: [
      { icon: <FaRegLightbulb />, label: "Lighting", value: "Full LED System" },
      { icon: <FaMobileAlt />, label: "Connectivity", value: "Smart App Control" },
      { icon: <FaShieldAlt />, label: "Security", value: "Alarm + GPS Tracking" },
      { icon: <FaTachometerAlt />, label: "Display", value: "TFT Dashboard" }
    ]
  };

  const features = [
    {
      title: "Efficient Performance",
      desc: "1200W motor offers smooth acceleration and reliable speed",
      icon: <GiPowerLightning />
    },
    {
      title: "Extended Range",
      desc: "60V 28Ah lithium battery powers up to 80km per charge",
      icon: <FaCarBattery />
    },
    {
      title: "Smart Connectivity",
      desc: "Mobile app with GPS tracking, ride stats, and diagnostics",
      icon: <FaMobileAlt />
    },
    {
      title: "Sleek Design",
      desc: "Aerodynamic body with durable build quality",
      icon: <FaMotorcycle />
    }
  ];

  const galleryImages = [
    { id: 1, src: image1, alt: 'Eco Glider Side View' },
    { id: 2, src: image2, alt: 'Eco Glider Left View' },
    { id: 3, src: image3, alt: 'Eco Glider Front View' },
    { id: 4, src: image4, alt: 'Eco Glider Rear View' },
  ];

  return (
    <div className="ecoglider-showcase">
     <section className="ecoglider-hero">
          <img
            src={brand5}
            alt="EcoGlider"
            className="ecoglider-hero-image"
          />
          <div className="ecoglider-hero-content">
            <h1>Ride the Revolution</h1>
            <p>Eco-friendly. Stylish. Powerful.</p>
          </div>
        </section>

      {/* Feature Highlights */}
      <section className="ecoglider-feature-highlights">
        <div className="ecoglider-feature-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="ecoglider-feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="ecoglider-feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="ecoglider-feature-line" style={{ backgroundColor: "#2c3e50" }} />
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
          <p>Explore the Cruze Blade from every angle</p>
        </div>
      
        <div className="gallery-container">
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id} 
              className="gallery-item"
              whileHover={{ scale: 1.03 }}
              onClick={() => setZoomImage(image.src)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="zoom-indicator">
                <FaExpand />
              </div>
            </motion.div>
          ))}
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

export default EcoGliderShowcase;

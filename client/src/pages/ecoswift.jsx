import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// EcoSwift Images
import image1 from '../assets/Inner-Images/EcoSwift/black/side.png';
import image2 from '../assets/Inner-Images/EcoSwift/black/left.png';
import image3 from '../assets/Inner-Images/EcoSwift/black/front.png';
import image4 from '../assets/Inner-Images/EcoSwift/black/front.png';

// Color options
import nebulaGreen from '../assets/Inner-Images/EcoSwift/green/front.png';
import lunarGray from '../assets/Inner-Images/EcoSwift/gray/front.png';
import solarRed from '../assets/Inner-Images/EcoSwift/red/front.png';
import cosmicBlack from '../assets/Inner-Images/EcoSwift/black/front.png';
import stellarWhite from '../assets/Inner-Images/EcoSwift/white/front.png';

// Icons
import { 
  FaBolt, FaMotorcycle, FaCarBattery, FaTachometerAlt, 
  FaPalette, FaExpand, FaChevronRight, FaChevronLeft,
  FaRegLightbulb, FaShieldAlt, FaMobileAlt, FaWeightHanging
} from 'react-icons/fa';
import { GiPowerLightning, GiCarWheel } from 'react-icons/gi';
import { IoMdColorPalette, IoMdSpeedometer } from 'react-icons/io';
import { RiSteering2Fill } from 'react-icons/ri';

const EcoSwiftShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedColor, setSelectedColor] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);
  const videoRef = useRef(null);

  const colors = [
    { name: "Nebula Green", code: "#2ecc71", price: "$2,499", img: nebulaGreen },
    { name: "Lunar Gray", code: "#95a5a6", price: "$2,399", img: lunarGray },
    { name: "Solar Red", code: "#e74c3c", price: "$2,599", img: solarRed },
    { name: "Cosmic Black", code: "#2c3e50", price: "$2,699", img: cosmicBlack },
    { name: "Stellar White", code: "#ecf0f1", price: "$2,549", img: stellarWhite }
  ];

  const specs = {
    performance: [
      { icon: <IoMdSpeedometer />, label: "Top Speed", value: "70 km/h" },
      { icon: <FaBolt />, label: "Acceleration", value: "0-40km in 4.0s" },
      { icon: <GiPowerLightning />, label: "Motor Power", value: "1600W BLDC" },
      { icon: <FaCarBattery />, label: "Range", value: "95 km/charge" }
    ],
    design: [
      { icon: <FaPalette />, label: "Colors", value: "5 Premium Options" },
      { icon: <FaWeightHanging />, label: "Weight", value: "92 kg" },
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
      title: "Swift Performance",
      desc: "1600W motor delivers instant torque and smooth riding",
      icon: <GiPowerLightning />
    },
    {
      title: "Longer Range",
      desc: "60V 32Ah lithium battery for up to 95km per charge",
      icon: <FaCarBattery />
    },
    {
      title: "Smart Tech",
      desc: "App with GPS tracking, performance stats, and diagnostics",
      icon: <FaMobileAlt />
    },
    {
      title: "Stylish Design",
      desc: "Aerodynamic body with modern finishes",
      icon: <FaPalette />
    }
  ];

  const galleryImages = [
    { id: 1, src: image1, alt: 'EcoSwift Side View' },
    { id: 2, src: image2, alt: 'EcoSwift Left View' },
    { id: 3, src: image3, alt: 'EcoSwift Front View' },
    { id: 4, src: image4, alt: 'EcoSwift Rear View' },
  ];

  return (
    <div className="ecoswift-showcase">
      {/* Hero Section */}
      <section className="hero-video">
        <video autoPlay loop muted playsInline ref={videoRef} className="hero-video-content">
          {/* Replace with actual EcoSwift video */}
        </video>
        <div className="hero-overlay">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            ECO <span>SWIFT</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            The Future of Urban Commuting
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="hero-cta">
            <button className="cta-primary">Configure Yours</button>
            <button className="cta-secondary">Explore Features</button>
          </motion.div>
        </div>
      </section>

      {/* Color Selector */}
      <section className="color-customizer">
        <div className="section-header">
          <IoMdColorPalette className="section-icon" />
          <h2>Customize Your EcoSwift</h2>
          <p>Select your color</p>
        </div>
        <div className="color-selector">
          <div className="color-row">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className={`color-circle ${selectedColor === index ? 'active' : ''}`}
                onClick={() => setSelectedColor(index)}
                whileHover={{ scale: 1.1 }}
                style={{ backgroundColor: color.code }}
              />
            ))}
          </div>
        </div>
        <div className="color-preview">
          <motion.div
            className="preview-container"
            animate={{ background: `linear-gradient(135deg, ${colors[selectedColor].code} 0%, #2c3e50 100%)` }}
            transition={{ duration: 0.5 }}
          >
            <img src={colors[selectedColor].img} alt={`EcoSwift in ${colors[selectedColor].name}`} className="preview-image" />
            <div className="color-badge"><span>{colors[selectedColor].name}</span></div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="feature-highlights">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div key={index} className="feature-card" initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
              viewport={{ once: true }} whileHover={{ y: -10 }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="feature-line" style={{ backgroundColor: colors[selectedColor].code }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="tech-specs">
        <div className="specs-tabs">
          <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
          <button className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`} onClick={() => setActiveTab('performance')}>Performance</button>
          <button className={`tab-btn ${activeTab === 'technology' ? 'active' : ''}`} onClick={() => setActiveTab('technology')}>Technology</button>
        </div>
        <div className="specs-content">
          <AnimatePresence mode='wait'>
            <motion.div key={activeTab} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="specs-grid">
              {activeTab === 'overview' && specs.performance.map((spec, index) => (
                <div key={index} className="spec-item">
                  <div className="spec-icon">{spec.icon}</div>
                  <div className="spec-details"><h4>{spec.label}</h4><p>{spec.value}</p></div>
                </div>
              ))}
              {activeTab === 'performance' && specs.performance.map((spec, index) => (
                <div key={index} className="spec-item">
                  <div className="spec-icon">{spec.icon}</div>
                  <div className="spec-details"><h4>{spec.label}</h4><p>{spec.value}</p></div>
                </div>
              ))}
              {activeTab === 'technology' && specs.tech.map((spec, index) => (
                <div key={index} className="spec-item">
                  <div className="spec-icon">{spec.icon}</div>
                  <div className="spec-details"><h4>{spec.label}</h4><p>{spec.value}</p></div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>See EcoSwift from every angle</p>
        </div>
        <div className="gallery-container">
          <Swiper slidesPerView={3} spaceBetween={30} navigation={{ nextEl: '.gallery-next', prevEl: '.gallery-prev' }}
            modules={[Navigation]} breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="gallery-swiper">
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <motion.div className="gallery-item" whileHover={{ scale: 1.03 }} onClick={() => setZoomImage(image.src)}>
                  <img src={image.src} alt={image.alt} />
                  <div className="zoom-indicator"><FaExpand /></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="gallery-nav gallery-prev"><FaChevronLeft /></button>
          <button className="gallery-nav gallery-next"><FaChevronRight /></button>
        </div>
      </section>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div className="image-viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} onClick={() => setZoomImage(null)}>
            <motion.img src={zoomImage} alt="Fullscreen view" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring" }} />
            <button className="close-btn" onClick={(e) => { e.stopPropagation(); setZoomImage(null); }}>&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EcoSwiftShowcase;

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import image1 from '../assets/Inner-Images/Cruze-Blade/black/side.png';
import image2 from '../assets/Inner-Images/Cruze-Blade/black/left.png';
import image3 from '../assets/Inner-Images/Cruze-Blade/black/front.png';
import image4 from '../assets/Inner-Images/Cruze-Blade/black/front.png';
// Assets
import nebulaGreen from '../assets/Inner-Images/Cruze-Blade/green/front.png';
import lunarGray from '../assets/Inner-Images/Cruze-Blade/gray/front.png';
import solarRed from '../assets/Inner-Images/Cruze-Blade/red/front.png';
import cosmicBlack from '../assets/Inner-Images/Cruze-Blade/black/front.png';
import stellarWhite from '../assets/Inner-Images/Cruze-Blade/white/front.png';
import '../pages/CruzeBladeDetails.css';



// Icons
import { 
  FaBolt, FaMotorcycle, FaCarBattery, FaTachometerAlt, 
  FaPalette, FaExpand, FaChevronRight, FaChevronLeft,
  FaRegLightbulb, FaShieldAlt, FaMobileAlt, FaWeightHanging
} from 'react-icons/fa';
import { GiPowerLightning, GiCarWheel } from 'react-icons/gi';
import { IoMdColorPalette, IoMdSpeedometer } from 'react-icons/io';
import { RiSteering2Fill } from 'react-icons/ri';

const CruzeBladeShowcase = () => {
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
      { icon: <IoMdSpeedometer />, label: "Top Speed", value: "65 km/h" },
      { icon: <FaBolt />, label: "Acceleration", value: "0-40km in 4.2s" },
      { icon: <GiPowerLightning />, label: "Motor Power", value: "1500W BLDC" },
      { icon: <FaCarBattery />, label: "Range", value: "90 km/charge" }
    ],
    design: [
      { icon: <FaPalette />, label: "Colors", value: "5 Premium Options" },
      { icon: <FaWeightHanging />, label: "Weight", value: "95 kg" },
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
      title: "Hyper Performance",
      desc: "1500W motor delivers thrilling acceleration and hill-climbing power",
      icon: <GiPowerLightning />
    },
    {
      title: "Extended Range",
      desc: "60V 30Ah lithium battery provides up to 90km per charge",
      icon: <FaCarBattery />
    },
    {
      title: "Smart Connectivity",
      desc: "Mobile app with GPS tracking, ride stats, and vehicle diagnostics",
      icon: <FaMobileAlt />
    },
    {
      title: "Premium Design",
      desc: "Aerodynamic body with premium finishes and customizable lighting",
      icon: <FaPalette />
    }
  ];

 const galleryImages = [
  { id: 1, src: image1, alt: 'Cruze Blade Front View' },
  { id: 2, src: image2, alt: 'Cruze Blade Side View' },
  { id: 3, src: image3, alt: 'Cruze Blade Dashboard' },
  { id: 4, src: image4, alt: 'Cruze Blade Rear View' },
];


  return (
    <div className="cruze-blade-showcase">
      {/* Hero Video Section */}
      <section className="hero">
  <div className="hero-content">
    <h1>Ride the Revolution</h1>
    <p>Eco-friendly. Stylish. Powerful.</p>
    <button>Explore Now</button>
  </div>
</section>


      {/* Color Customizer */}
      <section className="color-customizer">
        <div className="section-header">
          <IoMdColorPalette className="section-icon" />
          <h2>Customize Your Blade</h2>
          <p>Select from our premium color options</p>
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
            <img 
              src={colors[selectedColor].img} 
              alt={`Cruze Blade in ${colors[selectedColor].name}`} 
              className="preview-image"
            />
            <div className="color-badge">
              <span>{colors[selectedColor].name}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="feature-highlights3">
        <div className="features-grid3">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon3">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="feature-line" style={{ backgroundColor: colors[selectedColor].code }} />
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

export default CruzeBladeShowcase;

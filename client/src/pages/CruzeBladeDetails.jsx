import React, { useState } from 'react';
import './CruzeBladeDetails.css';
import { motion } from 'framer-motion';

// Icons
import { 
  FaTachometerAlt, 
  FaBatteryThreeQuarters, 
  FaLightbulb, 
  FaMotorcycle,
  FaStopwatch,
  FaShieldAlt,
  FaLock,
  FaPlug,
  FaCarBattery,
  FaBolt
} from 'react-icons/fa';
import { 
  GiCarWheel,
  GiWeight,
  GiSteeringWheel,
  GiSpinningSword
} from 'react-icons/gi';

// Image imports
import bladeWhite from '../assets/cruze-Blade.png';
import bladeRed from '../assets/cruze-Blade.png';
import bladeBlack from '../assets/EcoSwift.png';
import bladeGray from '../assets/cruze-Blade.png';
import bladeGreen from '../assets/cruze-Blade.png';

const colorOptions = [
  { name: 'White', img: bladeWhite, code: '#ffffff' },
  { name: 'Toile Red', img: bladeRed, code: '#8B0000' },
  { name: 'Black', img: bladeBlack, code: '#000' },
  { name: 'Gray', img: bladeGray, code: '#808080' },
  { name: 'Labradorite Green', img: bladeGreen, code: '#3b6b4d' },
];

const CruzeBladeDetails = () => {
  const [selected, setSelected] = useState(colorOptions[0]);
  const [activeTab, setActiveTab] = useState('electrical');

  const specs = {
    electrical: [
      { icon: <FaTachometerAlt />, name: 'Speedometer', value: 'Digital Colour' },
      { icon: <FaBatteryThreeQuarters />, name: 'Battery', value: 'Lithium' },
      { icon: <FaPlug />, name: 'Charger', value: 'Micro Charger with Auto Cutoff' },
      { icon: <FaStopwatch />, name: 'Charging Time', value: '3-4 hrs' },
      { icon: <FaLightbulb />, name: 'Head Light', value: 'LED Headlamp' },
      { icon: <FaBolt />, name: 'Motor', value: 'BLDC Motor' }
    ],
    chassis: [
      { icon: <GiCarWheel />, name: 'Brake System', value: 'Disc/Disc Type' },
      { icon: <GiCarWheel />, name: 'Tyre Type', value: 'Tubeless' },
      { icon: <GiCarWheel />, name: 'Tyre Size', value: 'Front 12", Rear 12"' },
      { icon: <GiWeight />, name: 'Weight', value: '90-100 kg' },
      { icon: <GiSpinningSword />, name: 'Chassis', value: 'High Strength Tubular Frame' },
      { icon: <GiSteeringWheel />, name: 'Suspension', value: 'Front Hydraulic Telescopic, Rear Double Shocker' }
    ],
    features: [
      { icon: <FaShieldAlt />, name: 'Anti Theft Alarm', value: 'Yes' },
      { icon: <FaLock />, name: 'Central Locking', value: 'Yes' },
      { icon: <FaMotorcycle />, name: 'Parking Switch', value: 'Yes' },
      { icon: <FaMotorcycle />, name: 'Reverse Gear', value: 'Yes' },
      { icon: <FaPlug />, name: 'USB Charger', value: 'Yes' },
      { icon: <FaTachometerAlt />, name: 'Cruise Control', value: 'Yes' }
    ]
  };

  return (
    <div className="ecocruze-specs-page">
      {/* Fullscreen Hero Section */}
   <section 
  className="hero-section1"
  style={{ backgroundImage: `url(${selected.img})` }}
>
  <motion.div 
    className="hero-content"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="model-name1">ECOCRUZE <span>BLADE</span></h1>
    <p className="model-tagline1">Sleek Design • Electrifying Performance</p>
    
    <div className="color-selector">
      {colorOptions.map((color, index) => (
        <motion.button
          key={index}
          className={`color-option ${selected.name === color.name ? 'active' : ''}`}
          style={{ backgroundColor: color.code }}
          onClick={() => setSelected(color)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={color.name}
        />
      ))}
    </div>
  </motion.div>
</section>


      {/* Interactive Specs Section */}
      <section className="specs-section">
        <div className="specs-tabs">
          <button 
            className={`tab-btn ${activeTab === 'electrical' ? 'active' : ''}`}
            onClick={() => setActiveTab('electrical')}
          >
            <FaBolt /> Electrical
          </button>
          <button 
            className={`tab-btn ${activeTab === 'chassis' ? 'active' : ''}`}
            onClick={() => setActiveTab('chassis')}
          >
            <GiCarWheel /> Chassis
          </button>
          <button 
            className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            <FaShieldAlt /> Features
          </button>
        </div>

        <div className="specs-grid">
          {specs[activeTab].map((item, index) => (
            <motion.div 
              key={index}
              className="spec-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="spec-icon">{item.icon}</div>
              <div className="spec-details">
                <h3>{item.name}</h3>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="features-highlight">
        <h2>Key <span>Features</span></h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon"><FaPlug /></div>
            <h3>USB Charging Port</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaTachometerAlt /></div>
            <h3>Digital Meter</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCarBattery /></div>
            <h3>Efficient Batteries</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><GiSteeringWheel /></div>
            <h3>Hydraulic Suspension</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaLightbulb /></div>
            <h3>Bright Headlamp</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaStopwatch /></div>
            <h3>Quick Charge</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><GiCarWheel /></div>
            <h3>Dual Disc Brake</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><GiCarWheel /></div>
            <h3>Alloy Wheels</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CruzeBladeDetails;
import React, { useState } from 'react';
import './CruzeBladeDetails.css';
import { motion } from 'framer-motion';
import banner from '../assets/banner1.png'

import bladeWhite from '../assets/Cruze-Blade.png';
import bladeRed from '../assets/Cruze-Blade.png';
import bladeBlack from '../assets/Cruze-Blade.png';
import bladeGray from '../assets/Cruze-Blade.png';
import bladeGreen from '../assets/Cruze-Blade.png';
import batteryImg from "../assets/Tyre.png";
import tyreImg from "../assets/Tyre.png";
import motorImg from "../assets/Tyre.png";
import  dashImg from "../assets/Tyre.png";

import {
  FaMotorcycle,
  FaBolt,
  FaCogs,
  FaCarBattery,
  FaRoad,
  FaPalette,
  FaRegCalendarAlt,
  FaIdCard,
  FaTachometerAlt,
  FaShieldAlt,
  FaLightbulb,
  FaLock,
  FaMobileAlt,
  FaUsb
} from "react-icons/fa";
import { GiCarWheel, GiWeight, GiSuspensionBridge } from "react-icons/gi";


const colorOptions = [
  { name: 'White', img: bladeWhite, code: '#ffffff' },
  { name: 'Toile Red', img: bladeRed, code: '#8B0000' },
  { name: 'Black', img: bladeBlack, code: '#000' },
  { name: 'Gray', img: bladeGray, code: '#808080' },
  { name: 'Labradorite Green', img: bladeGreen, code: '#3b6b4d' },
];

const images = [
  { src: bladeRed, alt: 'Toile Red' },
  { src: bladeWhite, alt: 'White' },
  { src: bladeGray, alt: 'Gray' },
  { src: bladeBlack, alt: 'Black' },
  { src: bladeGreen, alt: 'Labradorite Green' },
];

const CruzeBladeDetails = () => {
  const [selected, setSelected] = useState(colorOptions[0]); 
  return (
    <>
      <div className="back-link">
  <img src={banner} alt="Banner" />
  <a href="/">Home</a> &gt; <span>Cruze Blade</span>
</div>

      <div className="blade-hero-gallery">
        <div className="blade-image-row">
          {images.map((img, index) => (
            <div className="blade-image-slice" key={index}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
  
   <section className="vehicle-specs">
      {/* Vehicle Overview */}
      <h2>Vehicle Overview</h2>
      <div className="specs-grid">
        <div className="spec-item"><FaMotorcycle /> Body: Scooter</div>
        <div className="spec-item"><FaCogs /> Transmission: Automatic</div>
        <div className="spec-item"><FaShieldAlt /> Condition: New</div>
        <div className="spec-item"><FaTachometerAlt /> Range: 90 km</div>
        <div className="spec-item"><FaBolt /> Drive Type: Electric</div>
        <div className="spec-item"><FaBolt /> Motor: BLDC Motor</div>
        <div className="spec-item"><FaCarBattery /> Battery: Lithium 2.5 kWh</div>
        <div className="spec-item"><FaRoad /> Tyres: Tubeless 12”</div>
        <div className="spec-item"><FaRegCalendarAlt /> Year: 2025</div>
        <div className="spec-item"><FaPalette /> Colors: Multiple</div>
        <div className="spec-item"><FaIdCard /> VIN: ECO123BLADE90</div>
        <div className="spec-item"><GiWeight /> Weight: 95 kg</div>
      </div>

      {/* Vehicle Features */}
      <h2>Vehicle Features</h2>
      <div className="features-grid">
        <div className="feature-category">
          <h4>Interior</h4>
          <ul>
            <li><FaLightbulb /> LED Headlight</li>
            <li><FaUsb /> USB Charging Port</li>
            <li><FaMobileAlt /> Digital Display</li>
            <li><FaLock /> Central Locking</li>
          </ul>
        </div>
        <div className="feature-category">
          <h4>Safety</h4>
          <ul>
            <li><FaShieldAlt /> Disc Brakes</li>
            <li><FaLock /> Anti-Theft Alarm</li>
            <li><FaMotorcycle /> Side Stand Sensor</li>
          </ul>
        </div>
        <div className="feature-category">
          <h4>Exterior</h4>
          <ul>
            <li><GiCarWheel /> Alloy Wheels</li>
            <li><FaMotorcycle /> Stylish Body</li>
            <li><GiSuspensionBridge /> Dual Suspension</li>
          </ul>
        </div>
        <div className="feature-category">
          <h4>Technology</h4>
          <ul>
            <li><FaMotorcycle /> Reverse Gear</li>
            <li><FaBolt /> Cruise Control</li>
            <li><FaMobileAlt /> App Connectivity</li>
          </ul>
        </div>
      </div>

      {/* Image Collage */}
      <h2>Key Components</h2>
      <div className="image-collage">
        <img src={batteryImg} alt="Battery" />
        <img src={tyreImg} alt="Tyre" />
        <img src={motorImg} alt="Motor" />
        <img src={dashImg} alt="Dashboard" />
      </div>
    </section>

      
    </>
  );
};

export default CruzeBladeDetails;

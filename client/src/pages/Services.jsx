import React from "react";
import "./Services.css";
import bannerImg from "../assets/Inner-Images/Cruze-Blade/black/left.png";

// Service Images
import carMaintenanceImg from "../assets/service1.png";
import engineDiagnosisImg from "../assets/service2.png";
import carBreakRepairImg from "../assets/service3.png";
import Testimonials from "../components/Testimonials";

const services = [
  {
    title: "Scooty Maintenance",
    description:
      "We offer various warranty plans on both new and certified pre-owned vehicles. These plans can cover essential components.",
    img: carMaintenanceImg,
    url: "/services/car-maintenance",
    icon: "fa-solid fa-gears"
  },
  {
    title: "Motor Diagnosis",
    description:
      "We offer various warranty plans on both new and certified pre-owned vehicles. These plans can cover essential components.",
    img: engineDiagnosisImg,
    url: "/services/engine-diagnosis",
    icon: "fa-solid fa-screwdriver-wrench"
  },
  {
    title: "Break Repair",
    description:
      "We offer various warranty plans on both new and certified pre-owned vehicles. These plans can cover essential components.",
    img: carBreakRepairImg,
    url: "/services/car-break-repair",
    icon: "fa-solid fa-wrench"
  },
 
];

const Services = () => {
  return (
    <>
    <div className="services-page">
      {/* Banner */}
      <div className="services-banner">
        <img src={bannerImg} alt="Services Banner" />
        <div className="banner-text">
          <h1>Services</h1>
          <p>
            <a href="/">Home</a> &gt; Services
          </p>
        </div>
      </div>

      {/* Services Intro */}
      <div className="services-intro">
        <p className="subtitle">Our Services</p>
        <h2>
          The Fix You Need, The <br /> Service You Deserve!
        </h2>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <div className="icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.url} className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
      
    </div>
    <Testimonials/>
    </>
  );
};

export default Services;

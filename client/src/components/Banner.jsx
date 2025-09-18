import React, { useRef, useEffect } from "react";
import "./Banner.css";
import banner1 from "../assets/banner21.png";
import { Link } from "react-router-dom";

const ScootyBanner = () => {
  const bannerRef = useRef();
  const lightX = useRef();
  const lightY = useRef();

  useEffect(() => {
    const banner = bannerRef.current;

    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      lightX.current.style.left = `${x}px`;
      lightY.current.style.top = `${y}px`;
    };

    banner.addEventListener("mousemove", handleMouseMove);

    return () => banner.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="main-banner" ref={bannerRef}>
      {/* Glass light sweeps */}
      <div className="horizontal-light" ref={lightX}></div>
      <div className="vertical-light" ref={lightY}></div>

      {/* Offer Content */}
      <div className="offer-section">
        <div className="offer-box">
          <div className="offer-text">
            <span className="black">SAVE</span>
            <span className="friday">EARTH</span>
            <span className="discount">
              WITH<span className="percent"> ECOCRUZE </span>
            </span>
            {/* <span className="upto">Up To Off</span> */}
          </div>
  
<Link to="/contact" className="buy-btn">Contact Us →</Link>
        </div>
      </div>

      {/* Image */}
      <div className="scooty-image">
        <img
          src={banner1}
          alt="Electric Scooty"
          className="scooty-img"
        />
      </div>
    </section>
  );
};

export default ScootyBanner;

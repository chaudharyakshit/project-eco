import React, { useRef, useEffect } from "react";
import "./Banner.css";

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
            <span className="black">BLACK</span>
            <span className="friday">FRIDAY</span>
            <span className="discount">
              70<span className="percent">%</span>
            </span>
            <span className="upto">Up To Off</span>
          </div>
          <button className="buy-btn">BUY NOW →</button>
        </div>
      </div>

      {/* Image */}
      <div className="scooty-image">
        <img
          src="https://www.atherenergy.com/_next/image?url=https%3A%2F%2Fmedia.atherenergy.com%2F450-compare-models-d.webp&w=1080&q=75"
          alt="Electric Scooty"
          className="scooty-img"
        />
      </div>
    </section>
  );
};

export default ScootyBanner;

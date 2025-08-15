import React from 'react';
import './poster.css';
import Rapidsign from '../assets/Rapi-dsign.png';
import ecoglider from '../assets/Eco-Glider.png';
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <section className="sell-scooty-section">
      <div className="container">
        <div className="dual-posters">
          {/* Poster 1 */}
          <div className="scooty-poster">
            <div className="poster-image">
              <img src={Rapidsign} alt="EcroZue Scooty Model X" />
              <div className="image-overlay"></div>
            </div>
            <div className="poster-content">
              <h3>Do You Want to Buy Your Scooty?</h3>
              <p>Get the best value for your Ecocruze or other electric scooty brands</p>
            <Link to="/dealership" className="poster-btn">
  GET BEST DEALS
</Link>
            </div>
          </div>

          {/* Poster 2 */}
          <div className="scooty-poster">
            <div className="poster-image">
              <img src={ecoglider} alt="ECOCRUZE Scooty Model Z" />
              <div className="image-overlay"></div>
            </div>
            <div className="poster-content">
              <h3>Upgrade to New ECOCRUZE</h3>
              <p>Trade-in your old scooty for latest ECOCRUZE models</p>
              <Link to="/dealership" className="poster-btn">
  GET BEST DEALS
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
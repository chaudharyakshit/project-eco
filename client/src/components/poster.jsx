import React from 'react';
import './poster.css';
import Rapidsign from '../assets/Rapi-dsign.png';
import scootyPoster2 from '../assets/poster_2.png';

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
              <h3>Do You Want to Sell Your Scooty?</h3>
              <p>Get the best value for your EcroZue or other electric scooty brands</p>
              <button className="poster-btn">
                GET STARTED <span>1</span>
              </button>
            </div>
          </div>

          {/* Poster 2 */}
          <div className="scooty-poster">
            <div className="poster-image">
              <img src={scootyPoster2} alt="EcroZue Scooty Model Z" />
              <div className="image-overlay"></div>
            </div>
            <div className="poster-content">
              <h3>Upgrade to New EcroZue</h3>
              <p>Trade-in your old scooty for latest EcroZue models</p>
              <button className="poster-btn">
                GET STARTED <span>2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
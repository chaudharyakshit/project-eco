import React from 'react';
import './About.css';

// Import all images (replace with your actual image paths)
// import aboutHero from '../assets/';
// import team1 from './images/team-1.jpg';
// import team2 from './images/team-2.jpg';
// import team3 from './images/team-3.jpg';
// import team4 from './images/team-4.jpg';
// import featureCar from './images/feature-car.png';
// import featureTag from './images/feature-tag.png';

const About = () => {
  return (
    <div className="kars-about-page">
      {/* Breadcrumb Section */}
      <section className="breadcrumb-section" style={{backgroundImage: "url('./images/breadcrumb-bg.jpg')"}}>
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <a href="/">Home</a> &gt; <span>About Us</span>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-content">
                <div className="section-title">
                  <h2>Welcome to <span>Kars</span> Auto Dealership</h2>
                  <div className="title-divider">
                    <div className="dot"></div>
                    <div className="line"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <p>
                  We are a premier auto dealership with over 15 years of experience in providing 
                  high-quality vehicles to our valued customers.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <img src={featureCar} alt="Car icon" width="40" />
                    </div>
                    <div className="feature-text">
                      <h4>Extensive Selection</h4>
                      <p>Wide range of vehicles across all brands</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <img src={featureTag} alt="Tag icon" width="40" />
                    </div>
                    <div className="feature-text">
                      <h4>Competitive Pricing</h4>
                      <p>Best market prices guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-image">
                <div className="main-image">
                  <img src={aboutHero} alt="Dealership showroom" />
                </div>
                <div className="image-badge">
                  <span>15+</span>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">2760+</div>
                <div className="stat-title">Vehicles in Stock</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">300+</div>
                <div className="stat-title">Professional Team</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">2660+</div>
                <div className="stat-title">Happy Clients</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-title">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Professional <span>Team</span></h2>
            <div className="title-divider">
              <div className="dot"></div>
              <div className="line"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="team-member">
                <div className="member-image">
                  <img src={team1} alt="John Smith - Sales Manager" />
                  <div className="member-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>John Smith</h4>
                  <p>Sales Manager</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="team-member">
                <div className="member-image">
                  <img src={team2} alt="Sarah Johnson - Finance Expert" />
                  <div className="member-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Johnson</h4>
                  <p>Finance Expert</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="team-member">
                <div className="member-image">
                  <img src={team3} alt="Michael Brown - Service Manager" />
                  <div className="member-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Michael Brown</h4>
                  <p>Service Manager</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="team-member">
                <div className="member-image">
                  <img src={team4} alt="Emily Davis - Customer Care" />
                  <div className="member-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Emily Davis</h4>
                  <p>Customer Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
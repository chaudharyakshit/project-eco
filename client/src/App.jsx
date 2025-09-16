import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Poster from './components/poster';
import ScootyBanner from './components/Banner';
import Calculator from './components/calculator';
import Contact from './pages/Contact';
import CruzeBladeDetails from './pages/CruzeBladeDetails';
import EcoShine from './pages/EcoShine';
import Ecoswift from './pages/ecoswift'; 
import News from './pages/Newssection';
import Dealership from './pages/Dealership';
import EcoJoy from './pages/EcoJoy'; 
import EcoGlider from './pages/ecoglider';
import Cruzeon from './pages/cruzeon';

import Rapidshine from './pages/Rapidshine';    // fixed

import EcoZeon from './pages/EcoZeon';

import './index.css';

// Create a Home component that contains all your main page sections
const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Features />
      <Models />
      <ScootyBanner />
      <Poster/>
      <Calculator /> 
      <Testimonials />
      <CTA />
    </>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header scrolled={scrolled} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/dealership" element={<Dealership />} />
            <Route path="/News" element={<News/>}/>
            <Route path="/cruze-blade-details" element={<CruzeBladeDetails />} />
            <Route path="/EcoShine-details" element={<EcoShine/>}/>  
            <Route path="/ecoswift-details" element={<Ecoswift/>} />
            <Route path="/ecojoy-details" element={<EcoJoy />} />
            <Route path="/eco-glider-details" element={<EcoGlider />} />
            <Route path="/cruzeon-details" element={<Cruzeon />} />
         <Route path="/rapidshine-details" element={<Rapidshine />} />   // fixed


            <Route path="/Ecozeon-details" element={<EcoZeon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

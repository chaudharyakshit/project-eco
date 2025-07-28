import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';
import Features from '../src/components/Features';
import Brands from '../src/components/Brands';
import Gallery from '../src/components/Gallery';
import Testimonials from '../src/components/Testimonials';
import CTA from '../src/components/CTA';
import Footer from '../src/components/Footer';
import About from './pages/About';
// import Services from '../src/components/Services';
import Poster from '../src/components/poster';
import Contact from './pages/Contact';
import './index.css';

// Create a Home component that contains all your main page sections
const Home = () => {
  return (
    <>
      <Hero />
      <Models />
      <Features />
      <Brands />
      <Gallery />
      <Poster/>
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
             {/* <Route path="/services" element={<Services/>} /> */}
             <Route path="/contact" element={<Contact />} />          
             </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
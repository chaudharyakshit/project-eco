import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Models from '../src/components/Models';
import Features from '../src/components/Features';
import Brands from '../src/components/Brands';
import Gallery from '../src/components/Gallery';
import Testimonials from '../src/components/Testimonials';
import CTA from '../src/components/CTA';
import Footer from '../src/components/Footer';
import './index.css';

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
    <div className="App">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Models />
        <Features />
        <Brands />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
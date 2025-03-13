import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import OnlineCoaching from './components/OnlineCoaching';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there's a hash, scroll to the element
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]); // Run this effect when location changes

  return null;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Team />
                <Reviews />
                <Contact />
              </>
            } />
            <Route path="/online-coaching" element={<OnlineCoaching />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
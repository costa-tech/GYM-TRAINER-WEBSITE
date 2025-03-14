import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
  // Remove all splash screen related state and functions
  
  return (
    <Router>
      {/* Remove conditional rendering based on splash screen */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
      >
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
      </motion.div>
    </Router>
  );
}

export default App;
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
    // Always scroll to top on route change
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there's a hash, scroll to the element with extra handling
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure proper scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If hash element not found, scroll to top
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]); // Run this effect when location changes

  return null;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  // Handle initial loading and set up fallback timer
  useEffect(() => {
    // Mark content as ready (pre-loaded) after a short delay
    const readyTimer = setTimeout(() => {
      setContentReady(true);
    }, 1000);
    
    // Fallback timer to force hide splash screen
    const fallbackTimer = setTimeout(() => {
      console.log("Fallback timer triggered - forcing splash screen to hide");
      setShowSplash(false);
    }, 5000);
    
    return () => {
      clearTimeout(readyTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);
  
  const handleSplashComplete = () => {
    console.log("Splash screen complete callback");
    if (contentReady) {
      setShowSplash(false);
    } else {
      // If content isn't ready yet, wait a bit then hide splash
      setTimeout(() => setShowSplash(false), 500);
    }
  };

  console.log(`App render - showSplash: ${showSplash}, contentReady: ${contentReady}`);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
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
      )}
    </Router>
  );
}

export default App;
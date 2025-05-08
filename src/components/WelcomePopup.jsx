import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenPopup) {
      // If not shown before, show it after a small delay
      const timer = setTimeout(() => {
        setShowPopup(true);
        // Mark as shown in localStorage to prevent showing on refresh
        localStorage.setItem('hasSeenWelcomePopup', 'true');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleClick = () => {
    // Close popup and navigate to packages page
    setShowPopup(false);
    navigate('/packages');
  };

  // Close popup without navigation (for the X button)
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-[200] bg-black bg-opacity-80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden"
          >
            {/* Close button - Updated for better visibility */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10 shadow-md"
              aria-label="Close popup"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Clickable graphic */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
              onClick={handleClick}
            >
              <img 
                src="/images/popup.jpg" 
                alt="View our special packages" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
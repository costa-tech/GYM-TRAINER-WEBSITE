import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingPackageButton = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  
  // Don't show button on packages page
  const isPackagePage = location.pathname === '/packages';
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== visible) {
        setVisible(shouldShow);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);
  
  // Don't render anything if we're on packages page
  if (isPackagePage) return null;
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link 
            to="/packages"
            aria-label="View packages"
            className="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors group relative"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v10l-8 4m-8-4V7m8 4v10M4 7l4-2m4-2l4 2m-8 6l4-2m4 2l4 2" />
            </svg>
            
            {/* Tooltip */}
            <span className="absolute -top-10 right-0 bg-black bg-opacity-80 text-white text-xs font-medium px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Packages
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingPackageButton;

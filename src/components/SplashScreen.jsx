import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [isTimedOut, setIsTimedOut] = useState(false);
  
  // Use multiple approaches to ensure the splash screen completes
  useEffect(() => {
    // Primary timer
    const primaryTimer = setTimeout(() => {
      console.log('Primary timer completed');
      setIsTimedOut(true);
      onComplete();
    }, 2500);
    
    // Backup timer (in case primary fails)
    const backupTimer = setTimeout(() => {
      console.log('Backup timer triggered');
      setIsTimedOut(true);
      onComplete();
    }, 4000);
    
    // Extreme fallback
    const emergencyTimer = setTimeout(() => {
      console.log('Emergency timer triggered');
      setIsTimedOut(true);
      onComplete();
    }, 6000);
    
    // Handle window load event as another trigger
    const handleLoad = () => {
      console.log('Window load event triggered');
      setTimeout(() => {
        setIsTimedOut(true);
        onComplete();
      }, 1000);
    };
    
    window.addEventListener('load', handleLoad);
    
    return () => {
      clearTimeout(primaryTimer);
      clearTimeout(backupTimer);
      clearTimeout(emergencyTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [onComplete]);
  
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-black mb-4 text-white"
        >
          FIT
          <span className="text-red-600">FUTURE</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 w-48 bg-red-600 mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-xl mb-6"
        >
          Transform Your Life
        </motion.p>
        
        {/* Added a progress bar for visual feedback */}
        <div className="w-48 h-1 bg-gray-800 mx-auto relative overflow-hidden rounded-full">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red-600 to-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
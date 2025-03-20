import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-10">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-wider"
          >
            Train Like A<br />
            <span className="text-red-600">Champion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 text-gray-300"
          >
            Push your limits. Break barriers. Become unstoppable.
          </motion.p>
          <motion.a
            href="https://forms.gle/gDVEkGDr2ZNbAaGJ8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-12 py-5 rounded-none text-lg font-bold uppercase tracking-wider hover:bg-red-700 transition duration-300 inline-block"
          >
            Start Training Now
          </motion.a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-0 right-0 text-center"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
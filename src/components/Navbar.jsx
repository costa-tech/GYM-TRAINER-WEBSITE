import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set initial scroll state on page load
    setIsScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 shadow-lg py-2 md:py-4' // Reduced padding on mobile
          : 'bg-gradient-to-b from-black to-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-black uppercase tracking-wider" // Smaller text on mobile
          >
            <Link to="/" className="relative z-10">
              <span>Fit</span>
              <span className="text-red-600">F</span>
              <span>uture</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-12"> {/* Adjusted spacing */}
            <NavLink to="/#services">Programs</NavLink>
            <NavLink to="/packages">Packages</NavLink>
            <NavLink to="/#team">Trainers</NavLink>
            <NavLink to="/online-coaching">Online Coaching</NavLink>
            <NavLink to="/#reviews">Reviews</NavLink>
            <NavLink to="/#contact">Join Now</NavLink>
          </div>

          {/* Mobile Menu Button - Increased tap target size */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2" // Increased z-index to ensure visibility
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={{ touchAction: 'manipulation' }} // Improve touch handling
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Improved full-height design */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'calc(100vh - 70px)' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed left-0 right-0 top-[70px] bottom-0 bg-black bg-opacity-95 z-40 flex flex-col overflow-y-auto"
              style={{ 
                touchAction: 'pan-y',  // Enable vertical scrolling
                WebkitOverflowScrolling: 'touch' // Smooth scrolling for iOS
              }}
            >
              <div className="flex flex-col py-6 px-4 h-full">
                <MobileNavLink to="/#services" onClick={() => setIsOpen(false)}>Programs</MobileNavLink>
                <MobileNavLink to="/packages" onClick={() => setIsOpen(false)}>Packages</MobileNavLink>
                <MobileNavLink to="/#team" onClick={() => setIsOpen(false)}>Trainers</MobileNavLink>
                <MobileNavLink to="/online-coaching" onClick={() => setIsOpen(false)}>Online Coaching</MobileNavLink>
                <MobileNavLink to="/#reviews" onClick={() => setIsOpen(false)}>Reviews</MobileNavLink>
                <MobileNavLink to="/#contact" onClick={() => setIsOpen(false)}>Join Now</MobileNavLink>
                
                {/* Social icons for mobile */}
                <div className="mt-auto pt-6 border-t border-gray-800 flex justify-center space-x-6">
                  <SocialIcon href="#" icon="instagram" />
                  <SocialIcon href="#" icon="facebook" />
                  <SocialIcon href="#" icon="tiktok" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// NavLink component that works with both regular routes and hash routes
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300 relative z-10"
  >
    {children}
  </Link>
);

// MobileNavLink component - Enhanced for better touch and closing menu after click
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="block py-4 text-lg text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300 border-b border-gray-800 active:bg-gray-800"
    onClick={onClick} // Add click handler to close menu when navigation occurs
    style={{ touchAction: 'manipulation' }} // Improve touch handling
  >
    {children}
  </Link>
);

// Social icon component for mobile menu
const SocialIcon = ({ href, icon }) => (
  <a 
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
    aria-label={icon}
  >
    {/* Icon SVG based on platform */}
    {icon === "instagram" && (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.69,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.92,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Z"/>
      </svg>
    )}
    {/* Add other social icons as needed */}
  </a>
);

export default Navbar;
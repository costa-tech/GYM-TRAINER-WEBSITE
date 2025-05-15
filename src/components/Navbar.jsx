import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add useEffect to fix body scroll when menu is open
  useEffect(() => {
    const handleBodyClass = () => {
      if (isOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    };
    
    handleBodyClass();
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

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

  // Function to close menu and handle navigation
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mobile-menu md:hidden fixed left-0 right-0 top-[70px] bottom-0 bg-black bg-opacity-95 z-40 flex flex-col overflow-y-auto"
              style={{ height: 'calc(100vh - 70px)' }}
            >
              <div className="flex flex-col py-6 px-4 h-full">
                <MobileNavLink to="/#services" onClick={handleMenuItemClick}>Programs</MobileNavLink>
                <MobileNavLink to="/packages" onClick={handleMenuItemClick}>Packages</MobileNavLink>
                <MobileNavLink to="/#team" onClick={handleMenuItemClick}>Trainers</MobileNavLink>
                <MobileNavLink to="/online-coaching" onClick={handleMenuItemClick}>Online Coaching</MobileNavLink>
                <MobileNavLink to="/#reviews" onClick={handleMenuItemClick}>Reviews</MobileNavLink>
                <MobileNavLink to="/#contact" onClick={handleMenuItemClick}>Join Now</MobileNavLink>
                
                {/* Social icons for mobile */}
                <div className="mt-auto pt-6 border-t border-gray-800 flex justify-center space-x-6">
                  <SocialIcon href="https://www.instagram.com/" icon="instagram" />
                  <SocialIcon href="https://www.facebook.com/" icon="facebook" />
                  <SocialIcon href="https://www.tiktok.com/" icon="tiktok" />
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
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isHashLink = to.includes('#');
  const [isHovering, setIsHovering] = useState(false);
  
  // Check if this is the current active route
  const isActive = location.pathname === to || 
    (isHashLink && location.hash === `#${to.split('#')[1]}` && 
     (location.pathname === to.split('#')[0] || (to.split('#')[0] === '/' && location.pathname === '/')));
  
  // If it's a hash link on the current page
  if (isHashLink && to.startsWith('/')) {
    const baseRoute = to.split('#')[0];
    const hash = to.split('#')[1];
    
    const handleClick = (e) => {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Update URL without page reload
      window.history.pushState({}, '', to);
    };
    
    // Only use special handling if we're on the same base route
    if (location.pathname === baseRoute || (baseRoute === '/' && location.pathname === '/')) {
      return (
        <a
          href={to}
          onClick={handleClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300 relative z-10 ${isActive ? 'text-white' : ''} ${isHovering ? 'text-white' : ''}`}
        >
          <span className="relative">
            {children}
            {(isActive || isHovering) && (
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"
              />
            )}
          </span>
        </a>
      );
    }
  }
  
  // Regular link for other cases
  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300 relative z-10 ${isActive ? 'text-white' : ''} ${isHovering ? 'text-white' : ''}`}
    >
      <span className="relative">
        {children}
        {(isActive || isHovering) && (
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"
          />
        )}
      </span>
    </Link>
  );
};

// MobileNavLink component - Enhanced for better touch and smooth scroll handling
const MobileNavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isHashLink = to.includes('#');
  const [isActive, setIsActive] = useState(false);
  
  const handleTouchStart = () => setIsActive(true);
  const handleTouchEnd = () => setTimeout(() => setIsActive(false), 200);
  
  // For hash links to elements on the current page
  if (isHashLink) {
    const baseRoute = to.split('#')[0];
    const hash = to.split('#')[1];
    
    const handleClick = (e) => {
      e.preventDefault();
      
      // Visual feedback for tap
      setIsActive(true);
      
      // Close the mobile menu first
      if (onClick) onClick();
      
      setTimeout(() => {
        // Reset active state
        setIsActive(false);
        
        // If we're already on the correct page, scroll to element
        if (location.pathname === baseRoute || (baseRoute === '/' && location.pathname === '/')) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Update URL without page reload
            window.history.pushState({}, '', to);
          }
        } else {
          // If on a different page, navigate to the new page with the hash
          window.location.href = to; // Force full navigation with hash
        }
      }, 300); // Slight delay to allow menu to close first
    };
    
    return (
      <a
        href={to}
        className={`mobile-nav-link mobile-menu-item block py-4 text-lg text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300 border-b border-gray-800 ${isActive ? 'active' : ''}`}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </a>
    );
  }
  
  // Regular link for non-hash routes
  return (
    <Link
      to={to}
      className={`mobile-nav-link mobile-menu-item block py-4 text-lg text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300 border-b border-gray-800 ${isActive ? 'active' : ''}`}
      onClick={onClick} 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </Link>
  );
};

// Social icon component for mobile menu
const SocialIcon = ({ href, icon }) => (
  <a 
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
    aria-label={icon}
    target="_blank" 
    rel="noopener noreferrer"
  >
    {/* Icon SVG based on platform */}
    {icon === "instagram" && (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.69,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.92,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Z"/>
      </svg>
    )}
    {icon === "facebook" && (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24,12.07C24,5.41,18.63,0,12,0S0,5.4,0,12.07C0,18.1,4.39,23.094,10.13,24v-8.44H7.08V12.07h3.04V9.41c0-3.01,1.8-4.67,4.54-4.67,1.31,0,2.68.23,2.68.23v2.97H15.83c-1.5,0-1.96.93-1.96,1.89v2.26h3.32l-.53,3.49H13.88V24C19.62,23.094,24,18.1,24,12.07Z"/>
      </svg>
    )}
    {icon === "tiktok" && (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.12 1.72.69 3.32 1.71 4.65.12.02 1.12.65 1.71.88C21.57 6.06 23.12 6 24 6v3.36c-1.36.08-2.65-.15-3.91-.59-1.57-.53-2.89-1.39-3.19-1.59.01 3.04-.02 13.68.03 14.7 0 .44.42 1.45-.37 2.72-.51.91-1.59 1.74-2.61 2.1-1.22.43-1.96.33-2.79.25-3.08-.33-5.25-2.49-5.16-5.62.04-1.37.7-2.57 1.72-3.48.95-.87 2.19-1.37 3.52-1.35 1.65.04 1.65.04 1.92.06v2.77c-.8-.23-2.08-.38-3.07.2-.53.32-.94.81-1.11 1.41-.26.89-.05 1.78.5 2.48.55.71 1.45 1.05 2.34.89.71-.12 1.36-.54 1.71-1.21.12-.23.36-.69.33-1.94-.06-1.66.01-10.18 0-10.19 0-.06-.01-5.59-.01-5.59z"></path>
      </svg>
    )}
  </a>
);

export default Navbar;
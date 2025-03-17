import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
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
    <nav className={`fixed w-full z-50 transition duration-300 ${isScrolled ? 'bg-black py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-black uppercase tracking-wider"
          >
            <Link to="/">FitFuture</Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <NavLink to="/#services">Programs</NavLink>
            <NavLink to="/packages">Packages</NavLink>
            <NavLink to="/#team">Trainers</NavLink>
            <NavLink to="/online-coaching">Online Coaching</NavLink>
            <NavLink to="/#reviews">Reviews</NavLink>
            <NavLink to="/#contact">Join Now</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
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

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 py-6 border-t border-gray-800"
          >
            <MobileNavLink to="/#services">Programs</MobileNavLink>
            <MobileNavLink to="/packages">Packages</MobileNavLink>
            <MobileNavLink to="/#team">Trainers</MobileNavLink>
            <MobileNavLink to="/online-coaching">Online Coaching</MobileNavLink>
            <MobileNavLink to="/#reviews">Reviews</MobileNavLink>
            <MobileNavLink to="/#contact">Join Now</MobileNavLink>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// NavLink component that works with both regular routes and hash routes
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300"
  >
    {children}
  </Link>
);

// MobileNavLink component
const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block py-3 text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
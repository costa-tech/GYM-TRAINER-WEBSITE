import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <MobileNavLink to="/#services" onClick={() => setIsOpen(false)}>Programs</MobileNavLink>
            <MobileNavLink to="/#team" onClick={() => setIsOpen(false)}>Trainers</MobileNavLink>
            <MobileNavLink to="/online-coaching" onClick={() => setIsOpen(false)}>Online Coaching</MobileNavLink>
            <MobileNavLink to="/#reviews" onClick={() => setIsOpen(false)}>Reviews</MobileNavLink>
            <MobileNavLink to="/#contact" onClick={() => setIsOpen(false)}>Join Now</MobileNavLink>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-3 text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
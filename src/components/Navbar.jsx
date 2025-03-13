import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
            FitFuture
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <NavLink href="#services">Programs</NavLink>
            <NavLink href="#team">Trainers</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#contact">Join Now</NavLink>
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
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Programs</MobileNavLink>
            <MobileNavLink href="#team" onClick={() => setIsOpen(false)}>Trainers</MobileNavLink>
            <MobileNavLink href="#reviews" onClick={() => setIsOpen(false)}>Reviews</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Join Now</MobileNavLink>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="block py-3 text-gray-300 hover:text-white font-semibold uppercase tracking-wider transition duration-300"
  >
    {children}
  </a>
);

export default Navbar;
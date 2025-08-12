import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black uppercase tracking-wider mb-6">
              <span>Fit</span>
              <span className="text-red-600">F</span>
              <span>uture</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Join the elite. Train with the best. Transform your life with our world-class facilities and expert trainers.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase tracking-wider mb-6">Hours</h4>
            <p className="text-gray-400">
              Monday - Friday<br />
              <span className="text-white">6:00 AM - 9:00 PM</span>
            </p>
            <p className="text-gray-400 mt-4">
              Saturday - Sunday<br />
              <span className="text-white">8:00 AM - 8:00 PM</span>
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase tracking-wider mb-6">Contact</h4>
            <p className="text-white mt-4">
              +94 (71) 228-1369 - Costa<br />
              +94 (76) 697-8929 - Achintha<br />
              <br />
              <a 
                href="mailto:himsaradecosta@gmail.com" 
                className="hover:text-red-600 transition duration-300 animated-link"
              >
                himsaradecosta@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-center text-xl font-bold mb-6">Quick Links</h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/#services" className="text-gray-400 hover:text-white transition-colors">Programs</Link>
            <Link to="/#team" className="text-gray-400 hover:text-white transition-colors">Trainers</Link>
            <Link to="/online-coaching" className="text-gray-400 hover:text-white transition-colors">Online Coaching</Link>
            <Link to="/#reviews" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link>
            <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
        {/* Copyright Section - Removed Costa Production logo */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ravindu Sandumith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
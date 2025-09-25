import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative py-20 bg-black" id="contact">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-wider">Join The Elite</h2>

          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-red-600">Train at Zeus Gymnasium & Rehabilitation</h3>
            <p className="text-gray-300 text-lg mb-4">
              Experience personal training at one of the premier fitness facilities
            </p>
            <div className="inline-flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Zeus Gymnasium & Rehabilitation Center</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              
              {/* Netlify Forms with proper data-netlify attribute and hidden form-name field */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                className="space-y-6"
                action="/success" // Add a success redirect
              >
            {/* These hidden fields are crucial for Netlify form detection */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-700 focus:border-red-600 text-white placeholder-gray-500 outline-none transition duration-300"
                  placeholder="YOUR NAME"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-700 focus:border-red-600 text-white placeholder-gray-500 outline-none transition duration-300"
                  placeholder="YOUR EMAIL"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-700 focus:border-red-600 text-white placeholder-gray-500 outline-none transition duration-300"
                placeholder="YOUR PHONE"
              />
            </div>
            <div>
              <textarea
                name="message"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-700 focus:border-red-600 text-white placeholder-gray-500 outline-none transition duration-300 h-32"
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
            </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-600 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-red-700 transition duration-300"
                >
                  Start Your Journey
                </motion.button>
              </form>
            </motion.div>

            {/* Google Maps Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>
              
              {/* Google Maps Embed */}
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-700 bg-gray-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8982647359435!2d79.85999431477436!3d6.901910895010894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b50cbf9992d%3A0x815beddc983871a5!2sZeus%20Gymnasium!5e0!3m2!1sen!2slk!4v1695747300000!5m2!1sen!2slk"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zeus Gymnasium & Rehabilitation Location"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-white">Address</h4>
                      <p className="text-gray-300">Zeus Gymnasium & Rehabilitation</p>
                      <p className="text-gray-400">Colombo, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-white">Contact</h4>
                      <p className="text-gray-300">+94 (71) 228-1369 - Costa</p>
                      <p className="text-gray-300">+94 (76) 697-8929 - Achintha</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-white">Training Hours</h4>
                      <p className="text-gray-300">Monday - Friday: 6:00 AM - 9:00 PM</p>
                      <p className="text-gray-300">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  {/* Direct Map Link */}
                  <motion.a
                    href="https://www.google.com/maps/place/zeus+gymnasium/@6.9019109,79.8599943,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25b50cbf9992d:0x815beddc983871a5!8m2!3d6.9019109!4d79.8625692!16s%2Fg%2F11c5l_y5xt?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center w-full bg-red-600 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-red-700 transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

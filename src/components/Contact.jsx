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
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-wider">Join The Elite</h2>

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
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Strength Training",
    description: "Build power and endurance with specialized programs",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your goals",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black" id="services">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-5xl font-black text-center mb-16 uppercase tracking-wider"
        >
          Our Programs
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold mb-1 uppercase">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action Section with links to both Online Coaching and Packages */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer comprehensive training solutions to fit every lifestyle and preference.
            Check out our structured packages or explore our online coaching options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/packages"
              className="btn btn-primary inline-block px-8 py-4 text-lg font-bold uppercase"
            >
              View Training Packages
            </Link>
            <Link 
              to="/online-coaching"
              className="btn btn-secondary inline-block px-8 py-4 text-lg font-bold uppercase"
            >
              Explore Online Coaching
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
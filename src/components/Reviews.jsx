import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reviews = [
  {
    name: "Hiru",
    review: "Transformed my life completely! Lost 10kg in 6 months and shaped my body with their personalized training program.",
    rating: 5,
    program: "Personal Training",
    beforeImage: "/images/hirubefore.jpg",
    afterImage: "/images/hiruafter.jpg",
    duration: "6 months"
  },
  {
    name: "Sarah Chen",
    review: "The boxing classes are intense and amazing. The trainers really push you to your limits!",
    rating: 5,
    program: "Personal Training",
    beforeImage: "https://images.unsplash.com/photo-1609899659230-11de744e264a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1609899495200-bc817d9a69bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "8 months"
  },
  {
    name: "Michael Rodriguez",
    review: "Best HIIT classes in the city! The energy is incredible and results are real.",
    rating: 5,
    program: "Personal Training",
    beforeImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "4 months"
  },
  {
    name: "Emma Wilson",
    review: "The strength training program helped me achieve goals I never thought possible.",
    rating: 5,
    program: "Personal Training",
    beforeImage: "https://images.unsplash.com/photo-1506784242126-2a0b0b89c56c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "5 months"
  }
];

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [activeView, setActiveView] = useState({}); // Track which transformation is being viewed

  // Toggle transformation view for a specific review
  const toggleTransformation = (index) => {
    setActiveView(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 bg-gray-900" id="reviews">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mb-6 uppercase tracking-wider"
        >
          Success Stories
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Real results from real clients. See the incredible transformations achieved with our personalized training programs.
        </motion.p>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-black p-8 relative group hover:bg-gray-900 transition duration-300 rounded-xl overflow-hidden border border-gray-800 flex flex-col"
            >
              {/* Review Header - Improved layout */}
              <div className="border-b border-gray-800 pb-4 mb-6">
                <h3 className="text-2xl font-bold text-white">{review.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="bg-red-600/20 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                    {review.program}
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Review Content */}
              <div className="flex-grow">
                <div className="bg-gray-900/50 p-4 rounded-lg italic mb-6 relative">
                  <div className="absolute top-0 left-0 transform -translate-x-1 -translate-y-2">
                    <svg className="w-6 h-6 text-red-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 pl-5">{review.review}</p>
                </div>
              </div>
              
              {/* Transformation Button - Enhanced styling */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleTransformation(index)}
                className={`w-full py-4 mb-2 transition duration-300 uppercase font-bold tracking-wider text-sm flex items-center justify-center rounded-lg ${
                  activeView[index] 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gradient-to-r from-red-600/20 to-red-600/10 text-red-500 hover:bg-red-600/30'
                }`}
              >
                <span className="mr-2">
                  {activeView[index] ? 'Hide Transformation' : 'View Transformation'}
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${activeView[index] ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
              
              {/* Transformation Images - Improved animation and layout */}
              {activeView[index] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 bg-gradient-to-b from-black to-gray-900 p-4 rounded-lg border border-gray-800"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <div className="bg-red-600/10 p-2 rounded-t-lg">
                        <p className="text-center text-gray-400 font-semibold">BEFORE</p>
                      </div>
                      <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-b-lg border border-gray-800">
                        <img 
                          src={review.beforeImage} 
                          alt={`${review.name} before transformation`} 
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="bg-green-600/10 p-2 rounded-t-lg">
                        <p className="text-center text-gray-400 font-semibold">AFTER</p>
                      </div>
                      <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-b-lg border border-gray-800">
                        <img 
                          src={review.afterImage} 
                          alt={`${review.name} after transformation`} 
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mt-4 items-center"
                  >
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-green-500 font-bold">
                      Transformation Time: {review.duration}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Add a CTA section at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready For Your Transformation?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join our program and become our next success story. We'll help you achieve your fitness goals with personalized plans and expert guidance.
          </p>
          <a 
            href="https://forms.gle/gDVEkGDr2ZNbAaGJ8"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-block px-8 py-4 text-lg font-bold uppercase"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
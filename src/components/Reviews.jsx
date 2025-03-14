import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reviews = [
  {
    name: "John Smith",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "Transformed my life completely! Lost 30kg in 6 months with their personalized training program.",
    rating: 5,
    program: "Personal Training",
    beforeImage: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "6 months"
  },
  {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "The boxing classes are intense and amazing. The trainers really push you to your limits!",
    rating: 5,
    program: "Boxing",
    beforeImage: "https://images.unsplash.com/photo-1609899659230-11de744e264a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1609899495200-bc817d9a69bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "8 months"
  },
  {
    name: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "Best HIIT classes in the city! The energy is incredible and results are real.",
    rating: 5,
    program: "HIIT Classes",
    beforeImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "4 months"
  },
  {
    name: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "The strength training program helped me achieve goals I never thought possible.",
    rating: 5,
    program: "Strength Training",
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
              className="bg-black p-8 relative group hover:bg-gray-900 transition duration-300 rounded-xl overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{review.name}</h3>
                  <p className="text-red-600">{review.program}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.review}"</p>
              
              {/* Transformation Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => toggleTransformation(index)}
                className="w-full py-3 mb-6 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 uppercase font-bold tracking-wider text-sm flex items-center justify-center rounded-lg"
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
              
              {/* Transformation Images */}
              {activeView[index] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-center text-gray-400 mb-2">BEFORE</p>
                      <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                        <img 
                          src={review.beforeImage} 
                          alt={`${review.name} before transformation`} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-center text-gray-400 mb-2">AFTER</p>
                      <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                        <img 
                          src={review.afterImage} 
                          alt={`${review.name} after transformation`} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-green-500 mt-3 font-semibold">
                    Transformation Time: {review.duration}
                  </p>
                </motion.div>
              )}
              
              <div className="absolute top-0 right-0 mt-6 mr-6">
                <svg
                  className="w-12 h-12 text-gray-800 opacity-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
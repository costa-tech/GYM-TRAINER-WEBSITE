import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reviews = [
  {
    name: "John Smith",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "Transformed my life completely! Lost 30kg in 6 months with their personalized training program.",
    rating: 5,
    program: "Personal Training"
  },
  {
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "The boxing classes are intense and amazing. The trainers really push you to your limits!",
    rating: 5,
    program: "Boxing"
  },
  {
    name: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "Best HIIT classes in the city! The energy is incredible and results are real.",
    rating: 5,
    program: "HIIT Classes"
  },
  {
    name: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    review: "The strength training program helped me achieve goals I never thought possible.",
    rating: 5,
    program: "Strength Training"
  }
];

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="reviews">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mb-16 uppercase tracking-wider"
        >
          Success Stories
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-black p-8 relative group hover:bg-gray-900 transition duration-300"
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
              <p className="text-gray-300 italic">"{review.review}"</p>
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
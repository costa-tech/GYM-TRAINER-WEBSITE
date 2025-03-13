import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Alex 'The Beast' Johnson",
    role: "Head Boxing Coach",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Former professional boxer with 15 years of experience"
  },
  {
    name: "Sarah 'Iron' Williams",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1609899537878-39f6f593b5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Certified strength coach and nutrition specialist"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-900" id="team">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mb-16 uppercase tracking-wider"
        >
          Elite Trainers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 group cursor-pointer"
            >
              <div className="relative mb-6 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase">{member.name}</h3>
              <p className="text-red-600 font-semibold mb-3 uppercase">{member.role}</p>
              <p className="text-gray-400">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
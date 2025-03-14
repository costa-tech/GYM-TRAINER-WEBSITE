import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Himsara De Costa",
    role: "Personal Trainer",
    // Replace this URL with the path to your image file
    // For example: "/images/himsara.jpg" (if placed in a public/images folder)
    image: "/images/himsara.jpg", 
    description: "Gym Instructor and Personal Trainer with 5+ years of experience"
  },
  {
    name: "Achintha Prabash",
    role: "Strength & Conditioning",
    // Replace this URL with the path to your image file
    // For example: "/images/achintha.jpg" (if placed in a public/images folder)
    image: "/images/achintha.jpg",
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 group cursor-pointer rounded-xl overflow-hidden shadow-lg w-full md:w-2/5"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
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
import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Himsara De Costa",
    role: "Personal Trainer",
    image: "/images/costa.jpg",
    description: "Gym Instructor and Personal Trainer with 5+ years of experience",
    social: {
      instagram: "https://www.instagram.com/h.__costa?igsh=MXI0OGwwejYzZ3Jjag==",
      tiktok: "https://www.tiktok.com/@h_costa?_t=ZS-8ufqIq61eTK&_r=1",
      whatsapp: "https://wa.me/94712281369" 
    }
  },
  {
    name: "Prabash Gamage",
    role: "Strength & Conditioning",
    image: "/images/prabash.jpg",
    description: "Certified strength coach and nutrition specialist",
    social: {
      instagram: "https://www.instagram.com/pabashh_?igsh=MTE2eGgwemI0Y2xmcQ==",
      tiktok: "https://www.tiktok.com/@achinthaprabash55?_t=ZS-8ufqRjx4qVG&_r=1",
      whatsapp: "https://wa.me/94766978929" 
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-800 relative overflow-hidden"> {/* Added ID to match the hash link */}
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
              <p className="text-gray-400 mb-4">{member.description}</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-2">
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label={`${member.name}'s Instagram`}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.69,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.92,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                  </svg>
                </a>
                <a
                  href={member.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-b from-black to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-cyan-500 relative overflow-hidden"
                  aria-label={`${member.name}'s TikTok`}
                >
                  {/* TikTok modern logo - more visible */}
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.589 6.686C19.3436 6.56251 19.1125 6.40782 18.9024 6.22002C18.0974 5.44302 17.7074 4.35502 17.7074 3.23002V3.00002H14.1364V16.069C14.1364 17.268 13.1634 18.243 11.9614 18.243C11.3624 18.243 10.8124 17.995 10.4144 17.585C10.0154 17.177 9.76844 16.625 9.76844 16.025C9.76844 14.829 10.7424 13.854 11.9444 13.854C12.1414 13.854 12.3304 13.882 12.5144 13.932V10.337C12.3304 10.315 12.1424 10.306 11.9584 10.306C8.99144 10.306 6.58144 12.716 6.58144 15.681C6.58144 17.16 7.19244 18.505 8.17744 19.485C9.15744 20.466 10.5074 21.075 11.9894 21.075C14.9494 21.075 17.3594 18.661 17.3594 15.7V9.43502C18.4984 10.131 19.8134 10.5 21.1984 10.5V6.93002C20.6234 6.93002 20.0854 6.85902 19.589 6.686Z" fill="white" />
                    <path d="M19.589 6.686C19.3436 6.56251 19.1125 6.40782 18.9024 6.22002C18.0974 5.44302 17.7074 4.35502 17.7074 3.23002V3.00002H14.1364V16.069C14.1364 17.268 13.1634 18.243 11.9614 18.243C11.3624 18.243 10.8124 17.995 10.4144 17.585C10.0154 17.177 9.76844 16.625 9.76844 16.025C9.76844 14.829 10.7424 13.854 11.9444 13.854C12.1414 13.854 12.3304 13.882 12.5144 13.932V10.337C12.3304 10.315 12.1424 10.306 11.9584 10.306C8.99144 10.306 6.58144 12.716 6.58144 15.681C6.58144 17.16 7.19244 18.505 8.17744 19.485C9.15744 20.466 10.5074 21.075 11.9894 21.075C14.9494 21.075 17.3594 18.661 17.3594 15.7V9.43502C18.4984 10.131 19.8134 10.5 21.1984 10.5V6.93002C20.6234 6.93002 20.0854 6.85902 19.589 6.686Z" fill="cyan" fillOpacity="0.5" />
                  </svg>
                  {/* TikTok glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-red-500 to-cyan-500 opacity-30"></span>
                </a>
                {/* WhatsApp Icon - New */}
                <a
                  href={member.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label={`Chat with ${member.name} on WhatsApp`}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
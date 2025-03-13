import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OnlineCoaching = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-wider"
            >
              Online<br />
              <span className="text-red-600">Coaching</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
            >
              Transform your body and life with our fully customized coaching programs designed specifically for your goals and lifestyle
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-center mb-16 uppercase tracking-wider"
          >
            Fully Customized Programs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-container h-full">
                <h3 className="text-2xl font-bold mb-6 text-red-600 uppercase">Tailored For You</h3>
                <p className="text-gray-300 mb-4">
                  Our online coaching program offers fully customized workout schedules and diet plans based on your specific goals, preferences, lifestyle, and budget.
                </p>
                <p className="text-gray-300 mb-4">
                  We ensure a scientifically designed approach that considers physical, mental, and health factors for the most effective results possible.
                </p>
                <p className="text-gray-300">
                  Every aspect of your program is carefully crafted by expert coaches who understand that everyone's journey is unique.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Online coaching session"
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div ref={ref} className="mb-20">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-3xl font-bold text-center mb-16 uppercase"
            >
              What You'll Get
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="cyber-section"
                >
                  <div className="text-neon-color text-4xl mb-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Keys to Success Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="neo-section p-8 mb-20"
          >
            <h3 className="text-3xl font-bold text-center mb-10 uppercase">Keys to Successful Transformation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successKeys.map((key, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{key.title}</h4>
                  <p className="text-gray-400">{key.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              Ready to Transform Your Life?
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://forms.gle/gDVEkGDr2ZNbAaGJ8" 
                className="btn btn-primary inline-block px-12 py-5 text-lg font-bold uppercase tracking-wider"
              >
                Start Your Journey Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// Features data
const features = [
  {
    title: "24/7 Support",
    description: "Get round-the-clock support via WhatsApp and email from our dedicated coaching team",
    icon: "fas fa-headset"
  },
  {
    title: "Video Tutorials",
    description: "Access step-by-step technique guidance with detailed video tutorials for perfect form",
    icon: "fas fa-video"
  },
  {
    title: "Flexible Meal Plans",
    description: "Enjoy meal alternatives that fit your preferences and local food availability",
    icon: "fas fa-utensils"
  },
  {
    title: "Customized Workouts",
    description: "Receive workout plans tailored to your goals, equipment and time constraints",
    icon: "fas fa-dumbbell"
  },
  {
    title: "Multiple Options",
    description: "Choose between gym-based and home-based workout options to fit your lifestyle",
    icon: "fas fa-home"
  },
  {
    title: "Supplement Guidance",
    description: "Get expert recommendations on supplements that support your specific goals",
    icon: "fas fa-pills"
  }
];

// Success Keys data
const successKeys = [
  {
    title: "Follow Your Meal Plan",
    description: "Stick to your customized meal plan, using the alternatives provided when needed"
  },
  {
    title: "Give Maximum Effort",
    description: "Put 100% effort into your workouts for the best possible results"
  },
  {
    title: "Maintain Communication",
    description: "Send weekly progress updates and stay in touch with your coach"
  },
  {
    title: "Ask Questions Anytime",
    description: "Don't hesitate to ask questions or share suggestions whenever needed"
  }
];

export default OnlineCoaching;

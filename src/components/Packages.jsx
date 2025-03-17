import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const packageCategories = [
  {
    title: "Physical Training",
    description: "In-person training sessions with our expert coaches",
    packages: [
      {
        name: "Basic",
        price: "LKR 5,000",
        period: "per session",
        features: [
          "One-on-one coaching",
          "Personalized workout plan",
          "Access to equipment",
          "Progress tracking"
        ],
        highlight: false
      },
      {
        name: "Standard",
        price: "LKR 20,000",
        period: "per month",
        features: [
          "8 sessions per month",
          "Personalized workout plan",
          "Diet consultation",
          "Progress tracking",
          "24/7 messaging support"
        ],
        highlight: true
      },
      {
        name: "Premium",
        price: "LKR 30,000",
        period: "per month",
        features: [
          "12 sessions per month",
          "Full customized workout plan",
          "Complete diet plan",
          "Weekly progress reviews",
          "24/7 priority support",
          "Monthly body composition analysis"
        ],
        highlight: false
      }
    ]
  },
  {
    title: "Online Coaching",
    description: "Remote training with our coaches from anywhere in the world",
    packages: [
      {
        name: "Basic",
        price: "LKR 8,000",
        period: "per month",
        features: [
          "Weekly workout plans",
          "Video technique guidance",
          "Email support",
          "Monthly check-in"
        ],
        highlight: false
      },
      {
        name: "Standard",
        price: "LKR 15,000",
        period: "per month",
        features: [
          "Custom weekly workout plans",
          "Video technique analysis",
          "Basic nutrition guidance",
          "Weekly check-ins",
          "WhatsApp support"
        ],
        highlight: true
      },
      {
        name: "Premium",
        price: "LKR 25,000",
        period: "per month",
        features: [
          "Fully customized workout plans",
          "1-on-1 video coaching sessions",
          "Detailed nutrition plans",
          "Daily check-ins",
          "24/7 WhatsApp support",
          "Monthly program adjustments"
        ],
        highlight: false
      }
    ]
  },
  {
    title: "Meal & Workout Plans",
    description: "Ready-to-follow plans without direct coaching support",
    packages: [
      {
        name: "Workout Plan",
        price: "LKR 4,000",
        period: "one-time",
        features: [
          "4-week workout program",
          "Exercise video library",
          "Printable workout sheets",
          "Progress tracking templates"
        ],
        highlight: false
      },
      {
        name: "Nutrition Plan",
        price: "LKR 4,000",
        period: "one-time",
        features: [
          "4-week meal plan",
          "Shopping list",
          "Recipe collection",
          "Supplement recommendations",
          "Calorie & macro guidelines"
        ],
        highlight: false
      },
      {
        name: "Complete Package",
        price: "LKR 7,000",
        period: "one-time",
        features: [
          "4-week workout program",
          "4-week meal plan",
          "Exercise video library",
          "Shopping list & recipes",
          "Supplement recommendations",
          "Progress tracking templates"
        ],
        highlight: true
      }
    ]
  }
];

const Packages = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-wider"
            >
              Training<br />
              <span className="text-red-600">Packages</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto"
            >
              Choose the perfect training option that fits your goals, preferences, and lifestyle
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Packages Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          {packageCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-24 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-black text-center mb-4 uppercase tracking-wider"
              >
                {category.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center text-gray-400 mb-16 max-w-3xl mx-auto"
              >
                {category.description}
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.packages.map((pkg, pkgIndex) => (
                  <motion.div
                    key={pkgIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * pkgIndex }}
                    className={`relative overflow-hidden rounded-xl ${pkg.highlight ? 'bg-gradient-to-br from-gray-900 to-gray-800 ring-2 ring-red-500' : 'bg-gray-900 border border-gray-800'}`}
                  >
                    {pkg.highlight && (
                      <div className="absolute -right-10 top-6 rotate-45 bg-red-600 text-white px-10 py-1 text-sm font-bold">
                        POPULAR
                      </div>
                    )}
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="flex items-end mb-6">
                        <span className="text-4xl font-black">{pkg.price}</span>
                        <span className="text-gray-400 ml-2">{pkg.period}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.a
                        href="https://forms.gle/gDVEkGDr2ZNbAaGJ8" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                          pkg.highlight 
                            ? 'bg-red-600 hover:bg-red-700 text-white' 
                            : 'bg-gray-800 hover:bg-gray-700 text-white'
                        }`}
                      >
                        Choose Plan
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          {/* FAQs Section */}
          <div className="mt-24">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FAQ 
                question="Can I switch between packages?"
                answer="Yes, you can upgrade or downgrade your package at the start of a new billing cycle. Simply contact us a few days before your next payment."
              />
              <FAQ
                question="Is there a contract or minimum commitment?"
                answer="No, our packages are billed month to month with no long-term contracts. You can cancel anytime."
              />
              <FAQ
                question="Do you offer refunds?"
                answer="We offer a 7-day satisfaction guarantee for new clients. If you're not satisfied with our service, we'll provide a full refund within the first week."
              />
              <FAQ
                question="How do the online sessions work?"
                answer="Online sessions are conducted through video calls using Zoom or WhatsApp. We'll provide detailed instructions when you sign up."
              />
              <FAQ
                question="Can I customize my meal plan for dietary restrictions?"
                answer="Absolutely! We accommodate all dietary restrictions and preferences in our meal planning services."
              />
              <FAQ
                question="What equipment do I need for home workouts?"
                answer="We design programs based on your available equipment. Many exercises require minimal or no equipment, but we'll recommend basic items to enhance your workout."
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Still have questions?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're here to help you choose the perfect training option. Contact us for personalized advice.
            </p>
            <Link 
              to="/#contact"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wider hover:bg-red-700 transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// FAQ Component
const FAQ = ({ question, answer }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="bg-gray-900 p-6 rounded-lg border border-gray-800"
  >
    <h3 className="text-xl font-bold mb-3">{question}</h3>
    <p className="text-gray-400">{answer}</p>
  </motion.div>
);

export default Packages;

'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '💍',
    title: 'Weddings',
    description: 'Timeless coverage of your most special day.',
  },
  {
    icon: '🎂',
    title: 'Sweet 16 & Quinceañera',
    description: 'Celebrating milestones with vibrant energy.',
  },
  {
    icon: '📸',
    title: 'Portraits',
    description: 'Intimate and authentic portraits that tell your story.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs sm:text-sm uppercase tracking-widest text-[#c9a84c] mb-4 block"
        >
          Specialties
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-3xl sm:text-4xl font-bold text-[#f5f0e8] mb-16"
        >
          What We Capture
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                borderColor: "rgba(201, 168, 76, 0.3)",
                boxShadow: "0 10px 30px -10px rgba(201, 168, 76, 0.1)"
              }}
              className="bg-[#111111] p-10 border border-white/5 transition-all duration-500 rounded-sm cursor-pointer group"
            >
              <div className="text-4xl mb-6 transform transition-transform duration-500 group-hover:scale-110">{service.icon}</div>
              <h3 className="font-playfair text-xl font-semibold text-[#f5f0e8] mb-3">
                {service.title}
              </h3>
              <div className="w-10 h-px bg-[#c9a84c]/50 mx-auto mb-4" />
              <p className="font-inter text-[#f5f0e8]/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


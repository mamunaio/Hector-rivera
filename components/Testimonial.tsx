'use client';

import { motion } from 'framer-motion';

export default function Testimonial() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Large Gold Quote Marks */}
          <span className="font-playfair text-6xl md:text-8xl text-[#c9a84c] opacity-50 block mb-4">
            “
          </span>
          
          <p className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#f5f0e8] leading-relaxed mb-8">
            Hector captured our wedding day perfectly — natural, emotional, and timeless.
          </p>

          {/* 5 Gold Stars */}
          <div className="flex justify-center space-x-1 text-[#c9a84c] text-2xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

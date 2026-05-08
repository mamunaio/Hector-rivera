'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full overflow-hidden group"
          >
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/1765202537493-3ODBXWEHEXULVL8J0DRX/IMG_4117.JPG"
              alt="About Hector Rivera Photography"
              fill
              className="object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/20 transition-colors duration-500" />
          </motion.div>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-inter text-xs sm:text-sm uppercase tracking-widest text-[#c9a84c] mb-4 block"
            >
              The Artist
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-playfair text-3xl sm:text-4xl font-bold text-[#f5f0e8] mb-6"
            >
              Our Photography Style
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-inter text-[#f5f0e8]/70 text-lg leading-relaxed mb-8"
            >
              We blend candid storytelling with gently guided portraits. 
              Natural light, genuine emotion, warm tones — creating timeless 
              photos that feel effortless and intimate.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-3 border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] font-semibold transition-all duration-300 uppercase text-sm tracking-wider"
              >
                Learn More About Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


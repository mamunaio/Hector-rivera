'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/1765202537381-NTLBLGTCE4XM7YZ38UE7/DY3A7965.jpg"
          alt="Wedding Hero"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/50" />

      {/* Content with Fade Out on Scroll */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-inter text-xs sm:text-sm uppercase tracking-widest text-[#c9a84c] mb-4 block"
        >
          Luxury Photography
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5f0e8] mb-6"
        >
          Capturing Love, One Frame at a Time
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-inter text-lg sm:text-xl text-[#f5f0e8]/90 mb-10 max-w-2xl mx-auto"
        >
          Wedding & Portrait Photographer | Passaic, NJ
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] font-semibold transition-all duration-300 text-center uppercase text-sm tracking-wider"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#b08f3a] font-semibold transition-all duration-300 text-center uppercase text-sm tracking-wider"
          >
            Book a Session
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}


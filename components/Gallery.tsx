'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  'https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/1765202537354-2ONJWI63RD4MGGJRHTIL/weddinh.jpg',
  'https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/4ba8a003-8c72-4468-8af3-41dfe5daed24/DSC09448.jpg',
  'https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/5efa17d5-b4f3-4f03-8951-e7c5e02be369/DSC03678-2.jpg',
  'https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/852735b9-1dbe-41a4-a975-930b5ff54614/3N3A6475.jpg',
  'https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/8cc7b211-c5e0-41de-ada3-0234efe46454/8S6A0277.jpg',
  'https://images.squarespace-cdn.com/content/v1/6936da4a2973be3dd346053d/5d506b5e-b240-4ab0-a19d-317e0b810ce1/DSC03750.jpg',
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-inter text-xs sm:text-sm uppercase tracking-widest text-[#c9a84c] mb-4 block"
        >
          Portfolio
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-3xl sm:text-4xl font-bold text-[#f5f0e8] mb-16"
        >
          Recent Work
        </motion.h2>

        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden break-inside-avoid cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={800}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[#f5f0e8] font-semibold border border-[#c9a84c] px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase text-sm tracking-wider">
                  View Photo
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#b08f3a] font-semibold transition-colors duration-300 uppercase text-sm tracking-wider"
          >
            See Full Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}


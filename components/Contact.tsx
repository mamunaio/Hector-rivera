'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.03),transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-inter text-xs sm:text-sm uppercase tracking-widest text-[#c9a84c] mb-4 block"
          >
            Inquire
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-3xl sm:text-4xl font-bold text-[#f5f0e8] mb-4"
          >
            Ready to Book Your Date?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-[#f5f0e8]/60"
          >
            Based in Passaic, NJ — Serving North Jersey & NYC
          </motion.p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="font-playfair text-2xl text-[#c9a84c] mb-4">Thank You!</h3>
            <p className="text-[#f5f0e8]/70">We have received your message and will get back to you shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111111] border border-white/5 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/20 text-[#f5f0e8] px-4 py-3 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111111] border border-white/5 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/20 text-[#f5f0e8] px-4 py-3 outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">Event Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-[#111111] border border-white/5 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/20 text-[#f5f0e8] px-4 py-3 outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#111111] border border-white/5 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/20 text-[#f5f0e8] px-4 py-3 outline-none transition-all duration-200"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#b08f3a] font-semibold transition-colors duration-300 w-full sm:w-auto uppercase text-sm tracking-wider"
              >
                Submit
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col items-start leading-none">
              <span className="font-playfair text-xl sm:text-2xl font-bold text-[#f5f0e8] tracking-wide">
                Hector Rivera
              </span>
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-[#c9a84c] mt-1">
                Photography
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300">Home</Link>
              <Link href="#portfolio" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300">Portfolio</Link>
              <Link href="#about" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300">About</Link>
              <Link href="#pricing" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300">Pricing</Link>
              <Link href="#contact" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f5f0e8] hover:text-[#c9a84c] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#portfolio" className="block px-3 py-2 text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link href="#about" className="block px-3 py-2 text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#pricing" className="block px-3 py-2 text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="#contact" className="block px-3 py-2 text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo Text */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col items-start leading-none">
              <span className="font-playfair text-lg font-bold text-[#f5f0e8] tracking-wide">
                Hector Rivera
              </span>
              <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-[#c9a84c] mt-1">
                Photography
              </span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex space-x-6">
            <Link href="/" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200 text-sm">Home</Link>
            <Link href="#portfolio" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200 text-sm">Portfolio</Link>
            <Link href="#about" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200 text-sm">About</Link>
            <Link href="#pricing" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200 text-sm">Pricing</Link>
            <Link href="#contact" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200 text-sm">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5 11c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.239 5 5zm-5-3c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm5-2.5c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors duration-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-[#f5f0e8]/30 text-sm">
            © 2026 Hector Rivera Photography. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

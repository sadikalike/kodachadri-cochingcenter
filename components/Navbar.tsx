"use client";
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ನ್ಯಾವಿಗೇಷನ್ ಲಿಂಕ್‌ಗಳನ್ನು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿಯೇ ಇಟ್ಟುಕೊಳ್ಳೋಣ
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-[var(--primary-blue)] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[var(--primary-yellow)] overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="Kodachadri Academy Logo" 
                fill 
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              {/* ಇಲ್ಲಿ ಇಂಗ್ಲಿಷ್ ಹೆಸರನ್ನು ಬಳಸಲಾಗಿದೆ */}
              <h1 className="text-xl font-bold leading-tight">KODACHADRI</h1>
              <p className="text-[10px] tracking-widest text-[var(--primary-yellow)] font-semibold">ACADEMY</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[var(--primary-yellow)] font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="tel:+917411406791" className="bg-[var(--primary-red)] px-5 py-2 rounded-md flex items-center gap-2 hover:bg-red-700 transition-colors">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[var(--primary-blue)] border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-900" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
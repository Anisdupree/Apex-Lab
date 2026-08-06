import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Kurse', href: '#kurse' },
    { name: 'Preise', href: '#preise' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4">
      <nav className="max-w-7xl mx-auto bg-[#0A0A0A]/80 backdrop-blur-md border border-[#7A7A7A]/30 rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 shadow-2xl">
        
        {/* Typografisches Logo */}
        <a href="#" className="text-xl font-black tracking-widest text-[#F5F5F5] uppercase flex items-center gap-1 group">
          <span>APEX</span>
          <span className="text-[#00E5FF] group-hover:text-[#FF6A2A] transition-colors duration-300">//</span>
          <span className="text-[#7A7A7A] group-hover:text-white transition-colors duration-300">LAB</span>
        </a>

        {/* Desktop Nav-Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#7A7A7A] hover:text-[#00E5FF] transition-colors duration-200 uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Eyecatcher CTA (Burnt Orange) */}
        <div className="hidden md:block">
          <a
            href="#probetraining"
            className="inline-block bg-[#FF6A2A] hover:bg-[#FF6A2A]/90 text-[#F5F5F5] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#FF6A2A]/20 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Probetraining
          </a>
        </div>

        {/* Mobile Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-[#F5F5F5] hover:text-[#00E5FF] focus:outline-none p-2"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Glas-Overlay Menü */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-[#0A0A0A]/95 backdrop-blur-xl border border-[#7A7A7A]/30 rounded-2xl p-6 flex flex-col gap-5 text-center animate-fadeIn shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#F5F5F5] hover:text-[#00E5FF] transition-colors duration-200 uppercase tracking-wider py-1 border-b border-[#232323]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#probetraining"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#FF6A2A] text-[#F5F5F5] font-bold text-sm uppercase tracking-widest py-3.5 rounded-xl shadow-lg shadow-[#FF6A2A]/20 mt-2 block"
          >
            Probetraining
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
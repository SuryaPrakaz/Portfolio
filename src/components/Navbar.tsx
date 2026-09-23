'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050507]/90 backdrop-blur-md border-b border-[#1f1f2a] py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Surya Prakash M Home"
          >
            <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-wider text-white group-hover:text-red-500 transition-colors">
              SURYA PRAKASH M
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-red-950/20 rounded-md transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Action */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://github.com/SuryaPrakaz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-red-600/20 hover:border-red-600/40 border border-transparent rounded-lg transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-prakashm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-red-600/20 hover:border-red-600/40 border border-transparent rounded-lg transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-red-950/30 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d0d12] border-b border-[#1f1f2a] px-4 pt-2 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-red-400 hover:bg-red-950/20 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center space-x-4 border-t border-[#1f1f2a]">
            <a
              href="https://github.com/SuryaPrakaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white bg-red-950/30 border border-red-900/50 rounded-lg"
            >
              <Github className="w-4 h-4 text-red-500" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/surya-prakashm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white bg-red-950/30 border border-red-900/50 rounded-lg"
            >
              <Linkedin className="w-4 h-4 text-red-500" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

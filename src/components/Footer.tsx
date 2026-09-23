'use client';

import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030305] border-t border-[#1a1a24] py-12 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#14141c]">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <div className="w-7 h-7 rounded-md bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500">
                <Code className="w-4 h-4" />
              </div>
              <span className="font-bold text-white tracking-wider text-base">
                SURYA PRAKASH M
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Web Development | Full Stack Development Enthusiast
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a href="#home" className="hover:text-red-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-red-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-red-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-red-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-red-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-red-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SuryaPrakaz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0d0d12] hover:bg-red-950/40 text-gray-400 hover:text-white border border-[#1f1f2a] hover:border-red-900/50 rounded-xl transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-prakashm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0d0d12] hover:bg-red-950/40 text-gray-400 hover:text-white border border-[#1f1f2a] hover:border-red-900/50 rounded-xl transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:suryaprakazm@gmail.com"
              className="p-2.5 bg-[#0d0d12] hover:bg-red-950/40 text-gray-400 hover:text-white border border-[#1f1f2a] hover:border-red-900/50 rounded-xl transition-all"
              aria-label="Email Surya Prakash M"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Surya Prakash M. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

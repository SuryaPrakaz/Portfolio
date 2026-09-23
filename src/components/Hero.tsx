'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText, Code2, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 bg-grid-pattern overflow-hidden"
    >
      {/* Background Red Accent Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[250px] h-[250px] bg-red-800/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Picture Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center order-first lg:order-last"
          >
            <div className="relative group">
              {/* Outer Red Ambient Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-rose-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse" />
              
              {/* Circular Avatar Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)] bg-[#0d0d12]">
                <Image
                  src="/surya-prakash.jpg"
                  alt="Surya Prakash M"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 288px, 320px"
                />

                {/* Subtle Red Color Overlay Filter to harmonize with dark/red aesthetic */}
                <div className="absolute inset-0 bg-red-950/20 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Floating Tag Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-3 -right-2 sm:right-2 bg-[#0d0d12]/95 border border-red-800/60 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-white tracking-wide">Build • Learn • Grow</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Role Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/50 border border-red-800/50 text-red-400 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <Code2 className="w-4 h-4 text-red-500" />
              <span>Web Developer | Full Stack Development Enthusiast</span>
            </div>

            {/* Main Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                SURYA PRAKASH M
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-300">
                Building Practical Web Solutions
              </p>
            </div>

            {/* Supporting Intro Text */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate web developer with a strong focus on clean code, modern frontend design, and scalable database systems. Enthusiastic about creating functional applications, solving real-world problems, and continuously growing as a software developer.
            </p>

            {/* Quick Location & Skill Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-gray-400 pt-1">
              <div className="flex items-center gap-1.5 bg-[#0d0d12] px-3.5 py-1.5 rounded-lg border border-[#1f1f2a]">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Tirunelveli, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0d0d12] px-3.5 py-1.5 rounded-lg border border-[#1f1f2a]">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span>Python • C • HTML • CSS • JS • MySQL</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-red-950/50 hover:shadow-red-600/30 red-glow focus:outline-none"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA — GitHub */}
              <a
                href="https://github.com/SuryaPrakaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0d0d12] hover:bg-[#161622] text-gray-200 font-semibold text-sm rounded-xl border border-red-900/40 hover:border-red-600/60 transition-all duration-200"
              >
                <Github className="w-4 h-4 text-red-500" />
                <span>GitHub Profile</span>
              </a>

              {/* Additional CTA — Resume */}
              <button
                onClick={() => setIsResumeOpen(true)}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0d0d12] hover:bg-[#161622] text-gray-300 hover:text-white text-sm font-semibold rounded-xl border border-[#1f1f2a] hover:border-red-900/40 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-gray-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}

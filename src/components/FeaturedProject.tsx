'use client';

import { motion } from 'framer-motion';
import { Star, Github, ExternalLink, MapPin, CheckCircle, Sparkles, Calendar, Layers } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-20 bg-[#07070a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
              <Star className="w-5 h-5 fill-red-500/20" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/40">
                  Featured Project
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Primary Showcase
              </h2>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/50 to-transparent flex-1 ml-6 hidden md:block" />
        </div>

        {/* Featured Project Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0d0d12] border border-red-900/40 rounded-3xl overflow-hidden shadow-2xl red-glow-lg grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Visual Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#161622] via-[#0d0d14] to-[#12080a] p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1f1f2a] relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-red-400 bg-red-950/80 w-fit px-3 py-1 rounded-full border border-red-900/50 mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Regional Focus: South Tamil Nadu</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Smart Event Management System
              </h3>
              
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Tailored for event requirements in <strong>Tirunelveli, Tenkasi, Thoothukudi, and Kanyakumari</strong> districts.
              </p>
            </div>

            {/* Regional Badge List */}
            <div className="my-6 pt-4 border-t border-[#222230]">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-2">
                Target Districts Served
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Tirunelveli', 'Tenkasi', 'Thoothukudi', 'Kanyakumari'].map((district) => (
                  <span
                    key={district}
                    className="text-xs bg-[#191924] text-gray-300 px-2.5 py-1 rounded-md border border-[#2a2a3d]"
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-2">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-bold text-red-400 bg-red-950/60 px-3 py-1 rounded-lg border border-red-900/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Details Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            {/* Overview: Problem & Solution */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">
                  The Problem
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Organizing events often requires contacting multiple disconnected service providers across venue selection, catering, decoration, photography, and vendor logistics.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">
                  The Solution & Concept
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A centralized web platform that brings multiple event management requirements under a single unified interface, streamlined specifically for event planning workflows in South Tamil Nadu.
                </p>
              </div>
            </div>

            {/* Key Implemented Features */}
            <div>
              <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">
                Key Features Implemented
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Venue Selection & Directory',
                  'Catering Package Coordination',
                  'Decoration Theme Options',
                  'Photography Service Selection',
                  'Vendor Coordination Portal',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 bg-[#14141d] p-2.5 rounded-xl border border-[#222230]"
                  >
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="text-xs font-medium text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link Action Buttons */}
            <div className="pt-4 border-t border-[#1f1f2a] flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/SuryaPrakaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md shadow-red-950/40"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#161622] hover:bg-[#202030] text-gray-300 hover:text-white text-xs sm:text-sm font-semibold rounded-xl border border-[#2d2d3f] transition-all"
                title="Live demo link placeholder"
              >
                <ExternalLink className="w-4 h-4 text-red-400" />
                <span>Live Demo: <span className="text-gray-400 italic">[Add project demo URL]</span></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

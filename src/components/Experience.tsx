'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, AlertCircle, Building, Clock } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#07070a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Internship Experience
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Professional training & practical industry exposure
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/50 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-red-900/40 space-y-8">
          {/* Marcello Tech Internship Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-[#07070a] red-glow" />

            <div className="bg-[#0d0d12] border border-red-900/40 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-red-950/20 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1f1f2a]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 text-red-400 text-xs font-semibold rounded-md mb-2">
                    <Building className="w-3.5 h-3.5" /> Full Stack Development Internship
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    Marcello Tech
                  </h3>
                  <p className="text-sm text-gray-400">Full Stack Development Intern</p>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-[#14141d] px-3.5 py-2 rounded-xl border border-[#222230] w-fit">
                  <Calendar className="w-4 h-4 text-red-500" />
                  <span>15 June 2026 – 14 July 2026</span>
                </div>
              </div>

              {/* Exact Provided Status Content */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Internship Responsibilities & Overview
                </h4>
                
                <div className="bg-[#14141d] border border-amber-900/30 p-4 rounded-xl flex items-start gap-3 text-amber-300/90 text-sm">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-200">Internship details to be updated.</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Detailed responsibilities, technology stack tools used, and key project outcomes will be added upon completion of the internship period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

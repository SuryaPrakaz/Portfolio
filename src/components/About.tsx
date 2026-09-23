'use client';

import { motion } from 'framer-motion';
import { User, BookOpen, Target, CheckCircle2, Languages, Award } from 'lucide-react';

const strengths = [
  'Quick learner and self-motivated',
  'Team collaboration and leadership skills',
  'Ability to work independently and as part of a team',
];

const languages = ['Tamil (Native)', 'English (Professional)', 'Hindi (Conversational)'];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#07070a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
            <p className="text-xs sm:text-sm text-gray-400">My background, mindset, and career goals</p>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/50 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main First-Person Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#0d0d12] border border-[#1f1f2a] hover:border-red-950 p-6 sm:p-8 rounded-2xl relative"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              Hello! I&apos;m Surya Prakash M
            </h3>
            
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am currently pursuing my <strong>B.Tech in Computer Science and Business Systems (CSBS)</strong> at <strong>Francis Xavier Engineering College</strong> (2024–2028), maintaining an academic CGPA of <strong>8.2/10</strong>.
              </p>
              <p>
                My primary focus lies in <strong>Web Development</strong> and expanding into <strong>Full Stack Development</strong>. I believe the best way to understand computer science concepts is by building practical software applications that solve real-world problems.
              </p>
              <p>
                Throughout my academic journey, I have built practical projects ranging from event management platforms focused on South Tamil Nadu regional needs to hospital workflows and interactive parking systems. I am constantly working to refine my coding practices and master fundamental programming concepts.
              </p>
              <p className="text-red-400 font-medium">
                My immediate goal is to secure a software development or web development internship where I can contribute to meaningful technical projects while learning from experienced engineering teams.
              </p>
            </div>
          </motion.div>

          {/* Side Cards: Strengths & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Strengths Card */}
            <div className="bg-[#0d0d12] border border-[#1f1f2a] p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 text-red-500 font-semibold text-base">
                <Target className="w-5 h-5" />
                <h3>Core Strengths</h3>
              </div>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Card */}
            <div className="bg-[#0d0d12] border border-[#1f1f2a] p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 text-red-500 font-semibold text-base">
                <Languages className="w-5 h-5" />
                <h3>Languages Known</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#14141d] border border-red-950 text-gray-300 text-xs sm:text-sm font-medium rounded-lg"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Quick Tag */}
            <div className="bg-gradient-to-r from-red-950/40 to-[#0d0d12] border border-red-900/30 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-red-400 uppercase tracking-wider font-bold">Academic Status</span>
                <p className="text-sm font-semibold text-white">B.Tech CSBS (2024–2028)</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400">Current CGPA</span>
                <p className="text-lg font-extrabold text-red-500">8.2 / 10</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

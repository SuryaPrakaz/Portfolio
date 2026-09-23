'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School, Award, Calendar, CheckCircle2 } from 'lucide-react';

const academicDetails = [
  {
    institution: 'Francis Xavier Engineering College',
    degree: 'B.Tech Computer Science and Business Systems (CSBS)',
    period: '2024 – 2028',
    score: 'CGPA: 8.2 / 10',
    type: 'Undergraduate Degree',
    highlight: true,
    description:
      'Curriculum integrating core computer science fundamentals, full-stack software development, database systems, and modern business technology applications.',
  },
  {
    institution: 'Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC)',
    score: '74%',
    type: 'Senior Secondary Education',
    highlight: false,
    description: 'Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
  },
  {
    institution: 'Secondary School',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    score: '80%',
    type: 'Secondary Education',
    highlight: false,
    description: 'Foundational academic education with strong performance in mathematics and sciences.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#050507] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education & Academic Journey
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">Formal academic background & qualification milestones</p>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/50 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#0d0d12] border border-red-900/40 p-6 sm:p-8 rounded-3xl relative shadow-2xl red-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-900/50 uppercase tracking-wider">
                  Current Degree
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-red-500" /> 2024 – 2028
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Francis Xavier Engineering College
              </h3>
              <p className="text-sm font-semibold text-red-400 mb-4">
                B.Tech Computer Science and Business Systems
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Pursuing a specialized engineering discipline combining computer science software engineering with enterprise systems management.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1f1f2a] flex items-center justify-between bg-[#14141d] p-4 rounded-2xl">
              <div>
                <span className="text-xs text-gray-400 block font-medium">Academic Performance</span>
                <span className="text-sm font-bold text-white">Current Cumulative GPA</span>
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-extrabold text-red-500">8.2 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Schooling Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {academicDetails.slice(1).map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#0d0d12] border border-[#1f1f2a] hover:border-red-900/40 p-6 rounded-2xl transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-400">{item.type}</span>
                  <span className="text-sm font-bold text-red-400 bg-red-950/50 px-2.5 py-0.5 rounded border border-red-900/40">
                    {item.score}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{item.degree}</h4>
                <p className="text-xs text-gray-400">{item.institution}</p>
              </motion.div>
            ))}

            {/* Academic Highlights */}
            <div className="bg-[#0d0d12] border border-[#1f1f2a] p-5 rounded-2xl">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-3">
                Key Academic Focus Areas
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                {['Full Stack Web Dev', 'Database Management', 'Data Structures', 'Business Systems'].map(
                  (subject) => (
                    <span
                      key={subject}
                      className="px-2.5 py-1 bg-[#14141d] rounded-md border border-[#222230]"
                    >
                      {subject}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

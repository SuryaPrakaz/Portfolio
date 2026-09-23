'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Layout, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    description: 'Core logic, object-oriented concepts, & problem solving',
    skills: [
      { name: 'Python', tag: 'Core Language' },
      { name: 'C', tag: 'System / Core' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Structured, responsive UI & client-side functionality',
    skills: [
      { name: 'HTML5', tag: 'Structure' },
      { name: 'CSS3', tag: 'Styling & Layout' },
      { name: 'JavaScript (ES6+)', tag: 'Interactivity' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    description: 'Relational data modeling & SQL query execution',
    skills: [{ name: 'MySQL', tag: 'Relational DB' }],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    description: 'Development environment & code editor setup',
    skills: [{ name: 'VS Code', tag: 'Primary IDE' }],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#050507] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
            <p className="text-xs sm:text-sm text-gray-400">Verified competencies & development toolkit</p>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/50 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0d0d12] border border-[#1f1f2a] hover:border-red-900/50 p-6 rounded-2xl transition-all duration-300 group hover:shadow-xl hover:shadow-red-950/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-red-950/30 border border-red-900/40 rounded-lg text-red-500 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 px-3.5 py-2 bg-[#14141d] hover:bg-red-950/20 border border-[#222230] hover:border-red-900/50 rounded-xl transition-all"
                    >
                      <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-[10px] font-medium text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/40">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

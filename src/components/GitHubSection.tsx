'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, FolderGit2, Sparkles, Terminal } from 'lucide-react';

const repos = [
  {
    name: 'Smart-Event-Management-System',
    language: 'JavaScript / HTML / CSS',
    description: 'Smart web platform designed for event management requirements in South Tamil Nadu (Tirunelveli, Tenkasi, Thoothukudi, Kanyakumari).',
    link: 'https://github.com/SuryaPrakaz',
    tag: 'Primary Showcase',
  },
  {
    name: 'Vehicle-Parking-Management-System',
    language: 'JavaScript / HTML / CSS',
    description: 'Web-based application for organizing vehicle parking space allocation and tracking entry/exit records.',
    link: 'https://github.com/SuryaPrakaz',
    tag: 'Web App',
  },
  {
    name: 'Hospital-Management-System',
    language: 'Web Development',
    description: 'Management project focused on structuring hospital administrative workflows and records.',
    link: 'https://github.com/SuryaPrakaz',
    tag: 'Management System',
  },
  {
    name: 'AI-Powered-SQL-Database-Chatbot',
    language: 'Java / SQL',
    description: 'System connecting SQL relational database queries with an interactive chatbot user interface.',
    link: 'https://github.com/SuryaPrakaz',
    tag: 'Database & Java',
  },
];

export default function GitHubSection() {
  return (
    <section className="py-20 bg-[#050507] relative overflow-hidden">
      {/* Background Red Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-900/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#0d0d14] via-[#12080a] to-[#0d0d12] border border-red-900/40 rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl red-glow relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-semibold mb-4">
                <Github className="w-4 h-4" /> Source Code & Repositories
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Explore My Code
              </h2>
              
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                I regularly write code, experiment with frontend design patterns, and structure database management projects. Explore my repository commits and source code directly on GitHub.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://github.com/SuryaPrakaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl transition-all shadow-xl shadow-red-950/50 red-glow"
              >
                <Github className="w-5 h-5" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0d0d12] border border-[#1f1f2a] hover:border-red-900/50 rounded-2xl p-6 transition-all duration-300 group hover:shadow-lg hover:shadow-red-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-red-500" />
                    <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded border border-red-900/40">
                    {repo.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a1a26] flex items-center justify-between text-xs">
                <span className="text-gray-400 font-mono flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-red-500" />
                  {repo.language}
                </span>

                <a
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1"
                >
                  View Code <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

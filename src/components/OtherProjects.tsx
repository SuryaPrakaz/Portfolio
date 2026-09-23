'use client';

import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Database, Car, Building2, HelpCircle } from 'lucide-react';

const otherProjects = [
  {
    name: 'Hospital Management System',
    icon: Building2,
    tech: ['[ADD ACTUAL TECHNOLOGIES]'],
    isPlaceholderTech: true,
    description:
      'A web-based hospital management project focused on organizing hospital-related information and medical workflows efficiently.',
    featuresPlaceholder: '[Key features details to be updated]',
    githubUrl: 'https://github.com/SuryaPrakaz',
    demoUrl: '[Add project demo URL]',
  },
  {
    name: 'Vehicle Parking Management System',
    icon: Car,
    tech: ['HTML', 'CSS', 'JavaScript'],
    isPlaceholderTech: false,
    description:
      'A web-based management platform designed to monitor, organize, and streamline vehicle parking operations and slot assignments.',
    keyFeatures: [
      'Parking Slot Monitoring',
      'Vehicle Entry/Exit Record Keeping',
      'Interactive User Interface',
    ],
    githubUrl: 'https://github.com/SuryaPrakaz',
    demoUrl: '[Add project demo URL]',
  },
  {
    name: 'AI Powered SQL Database Chatbot',
    icon: Database,
    tech: ['SQL', 'Java'],
    isPlaceholderTech: false,
    description:
      'A practical project combining SQL database interactions with chatbot-style user messaging functionality for database queries.',
    keyFeatures: [
      'SQL Query Execution Interface',
      'Java-based Backend Logic',
      'Conversational Query System',
    ],
    githubUrl: 'https://github.com/SuryaPrakaz',
    demoUrl: '[Add project demo URL]',
  },
];

export default function OtherProjects() {
  return (
    <section className="py-16 bg-[#050507] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Academic & Systems Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Practical management systems & software applications built during my degree
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0d0d12] border border-[#1f1f2a] hover:border-red-900/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-red-950/20"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-red-950/30 border border-red-900/40 rounded-xl text-red-500 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white hover:bg-red-950/40 rounded-lg transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features / Placeholders */}
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    {project.keyFeatures ? (
                      <ul className="space-y-1.5">
                        {project.keyFeatures.map((feat, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-xs text-amber-400/90 italic bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/30 inline-block">
                        {project.featuresPlaceholder}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tech Badges & Demo Placeholder */}
                <div className="pt-4 border-t border-[#1a1a26] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded border ${
                          project.isPlaceholderTech
                            ? 'bg-amber-950/30 border-amber-900/40 text-amber-400'
                            : 'bg-red-950/50 border-red-900/40 text-red-400'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-medium inline-flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" /> Repository
                    </a>
                    <span className="text-gray-400 italic text-[11px]">
                      Demo: {project.demoUrl}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock, Percent, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: 'PRDV430: AI for Business Applications',
    issuer: 'Saylor University',
    grade: '95% Grade',
    duration: '11 Hours',
    type: 'Artificial Intelligence & Business Strategy',
    badge: 'High Distinction',
    icon: ShieldCheck,
    description:
      'Professional coursework covering the practical implementation of artificial intelligence models in business workflow automation and decision analytics.',
  },
  {
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    certificationType: 'Elite Silver Certification',
    type: 'Industrial Automation & IoT Systems',
    badge: 'Elite Silver',
    icon: Award,
    description:
      'Comprehensive examination and certification on smart manufacturing, CPS, IIoT protocols, cloud integration, and Industry 4.0 frameworks.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#07070a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Certifications & Accomplishments
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Verified certifications from recognized learning platforms
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/50 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0d0d12] border border-[#1f1f2a] hover:border-red-900/50 p-6 sm:p-8 rounded-3xl transition-all duration-300 group hover:shadow-2xl hover:shadow-red-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-red-400 bg-red-950/70 px-3 py-1 rounded-full border border-red-900/50">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{cert.type}</span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-2xl text-red-500 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-gray-400 mt-1">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1f1f2a] flex flex-wrap items-center justify-between gap-3 text-xs">
                  {cert.grade && (
                    <div className="flex items-center gap-1.5 bg-[#14141d] px-3 py-1.5 rounded-lg border border-[#222230] text-gray-200">
                      <Percent className="w-3.5 h-3.5 text-red-500" />
                      <span>{cert.grade}</span>
                    </div>
                  )}

                  {cert.duration && (
                    <div className="flex items-center gap-1.5 bg-[#14141d] px-3 py-1.5 rounded-lg border border-[#222230] text-gray-200">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{cert.duration}</span>
                    </div>
                  )}

                  {cert.certificationType && (
                    <div className="flex items-center gap-1.5 bg-[#14141d] px-3 py-1.5 rounded-lg border border-[#222230] text-gray-200">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                      <span>{cert.certificationType}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

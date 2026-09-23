'use client';

import { X, FileText, Download, AlertCircle, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#0d0d12] border border-red-900/40 rounded-xl max-w-lg w-full p-6 relative shadow-2xl red-glow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-red-950/40 transition-colors"
          aria-label="Close resume dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-red-950/50 border border-red-800/40 rounded-lg text-red-500">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-white">
              Surya Prakash M — Resume
            </h3>
            <p className="text-xs text-gray-400">B.Tech CSBS | Web Developer</p>
          </div>
        </div>

        <div className="bg-[#14141c] border border-[#22222f] rounded-lg p-4 mb-6 space-y-3">
          <div className="flex items-start gap-2 text-amber-400 text-xs bg-amber-950/30 p-3 rounded border border-amber-900/40">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Resume Link Status:</strong> The direct resume PDF link is currently set to the default placeholder link <code className="bg-amber-950 px-1 rounded text-amber-300">[ADD RESUME FILE / URL]</code>.
            </span>
          </div>

          <div className="text-sm text-gray-300 space-y-2">
            <p className="font-semibold text-white">Summary of Credentials:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
              <li>Education: B.Tech CSBS at Francis Xavier Engineering College (CGPA: 8.2/10)</li>
              <li>Skills: Python, C, HTML, CSS, JavaScript, MySQL, VS Code</li>
              <li>Internship: Full Stack Intern at Marcello Tech (June - July 2026)</li>
              <li>Certifications: Saylor AI for Business (95%), NPTEL Industry 4.0</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:suryaprakazm@gmail.com?subject=Resume%20Request%20-%20Surya%20Prakash%20M"
            className="flex-1 inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-medium px-4 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-red-900/30"
          >
            <Download className="w-4 h-4" /> Request Resume PDF
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-[#1a1a24] hover:bg-[#252533] text-gray-300 text-sm font-medium rounded-lg transition-colors border border-[#2e2e3e]"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

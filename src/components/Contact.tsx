'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user mail client with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:suryaprakazm@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#07070a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2.5 bg-red-950/40 border border-red-800/40 rounded-lg text-red-500">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Open for internship opportunities, project collaborations, and software roles
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/50 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0d0d12] border border-[#1f1f2a] p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Feel free to reach out via email or phone. I am actively looking for web development and full-stack software internship opportunities.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href="mailto:suryaprakazm@gmail.com"
                  className="flex items-center gap-3 p-3 bg-[#14141d] hover:bg-red-950/20 border border-[#222230] hover:border-red-900/40 rounded-2xl transition-all group"
                >
                  <div className="p-2.5 bg-red-950/40 rounded-xl text-red-500 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Email Address</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                      suryaprakazm@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:9787568284"
                  className="flex items-center gap-3 p-3 bg-[#14141d] hover:bg-red-950/20 border border-[#222230] hover:border-red-900/40 rounded-2xl transition-all group"
                >
                  <div className="p-2.5 bg-red-950/40 rounded-xl text-red-500 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Phone Number</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                      9787568284
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 bg-[#14141d] border border-[#222230] rounded-2xl">
                  <div className="p-2.5 bg-red-950/40 rounded-xl text-red-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Tirunelveli, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#1f1f2a]">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                  Connect Online
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/surya-prakashm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#14141d] hover:bg-red-950/40 text-gray-300 hover:text-white border border-[#222230] hover:border-red-900/50 rounded-xl text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-red-500" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/SuryaPrakaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#14141d] hover:bg-red-950/40 text-gray-300 hover:text-white border border-[#222230] hover:border-red-900/50 rounded-xl text-xs font-semibold transition-all"
                  >
                    <Github className="w-4 h-4 text-red-500" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0d0d12] border border-[#1f1f2a] p-6 sm:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-2 mb-6 text-white">
              <MessageSquare className="w-5 h-5 text-red-500" />
              <h3 className="text-xl font-bold">Send Me a Message</h3>
            </div>

            {submitted ? (
              <div className="bg-red-950/30 border border-red-800/40 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-red-500 mx-auto" />
                <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                  Your message draft has been formatted and redirected to your mail app to send directly to <strong>suryaprakazm@gmail.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-[#1a1a26] text-xs font-semibold text-gray-300 hover:text-white rounded-lg border border-[#2a2a3d]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiter / Hiring Manager"
                    className="w-full px-4 py-3 bg-[#14141d] border border-[#222230] focus:border-red-500 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-3 bg-[#14141d] border border-[#222230] focus:border-red-500 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Message / Inquiry <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-[#14141d] border border-[#222230] focus:border-red-500 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-red-950/40 red-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

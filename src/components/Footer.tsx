import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Mail, Phone, Download, Terminal, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#04060d]/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Identity & Details */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400">
              {PERSONAL_INFO.title} | B.Tech IT
            </p>
            <p className="text-xs text-slate-400">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Quick Clickable Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              aria-label="Call or WhatsApp"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Phone</span>
            </a>

            {/* Download CV */}
            <a
              href={PERSONAL_INFO.cvPath}
              download="Rajhans_Mahato_CV.pdf"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-900/50 hover:border-cyan-300 transition-colors"
              aria-label="Download Curriculum Vitae"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-2 sm:space-y-0">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="font-mono flex items-center space-x-1 text-[11px]">
            <span>Futuristic Minimal Developer Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

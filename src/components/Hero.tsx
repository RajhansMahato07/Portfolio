import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient light accents behind hero */}
      <div className="ambient-glow bg-cyan-500 w-96 h-96 top-1/4 left-1/4" />
      <div className="ambient-glow bg-blue-600 w-96 h-96 bottom-1/4 right-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Terminal Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-sm shadow-cyan-500/10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="tracking-wide">Available for Internships & Projects</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">B.Tech IT</span>
        </div>

        {/* Small greeting */}
        <p className="text-sm sm:text-base font-mono text-cyan-400/90 tracking-wide uppercase mb-3 flex items-center justify-center space-x-2">
          <span>Hello, I'm Rajhans 👋</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="text-gradient">Rajhans Mahato</span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 font-mono">
            {PERSONAL_INFO.title}
          </h2>
          <Cpu className="w-5 h-5 text-blue-400" />
        </div>

        {/* Short introduction */}
        <p className="max-w-3xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-normal">
          {PERSONAL_INFO.bio}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
          {/* View GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub</span>
            <ArrowUpRight className="w-4 h-4 opacity-75" />
          </a>

          {/* Download Resume */}
          <a
            href={PERSONAL_INFO.cvPath}
            download={PERSONAL_INFO.resumeFileName}
            className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 hover:text-white font-medium text-sm hover:bg-cyan-950/40 hover:border-cyan-400 backdrop-blur-md shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Contact Buttons / Metadata Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          {/* Location */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center">
          <a
            href="#about"
            className="text-slate-500 hover:text-cyan-400 transition-colors animate-bounce flex flex-col items-center"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase mb-1">Explore</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PERSONAL_INFO, CORE_COMPETENCIES } from '../data/portfolioData';
import { User, Target, Lightbulb, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      title: 'Full Stack Development',
      description: 'Passionate about crafting dynamic, responsive, and robust end-to-end web applications with modern frontend and backend architectures.'
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-400" />,
      title: 'Analytical Problem Solving',
      description: 'Strong foundation in computational logic, data structures, and breaking down real-world requirements into maintainable software.'
    },
    {
      icon: <Compass className="w-5 h-5 text-teal-400" />,
      title: 'Continuous Technical Learning',
      description: 'Actively exploring modern frameworks, API architectures, and best engineering workflows to deliver high standard code.'
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main narrative card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-cyan-500/20 shadow-xl space-y-5">
            <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Engineering Student & Aspiring Software Engineer</span>
            </h3>

            {PERSONAL_INFO.about.map((paragraph, index) => (
              <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Core Competencies */}
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center space-x-2">
                <span>Core Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {CORE_COMPETENCIES.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/25 text-xs font-mono text-cyan-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel-interactive p-5 rounded-xl border-cyan-500/15"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

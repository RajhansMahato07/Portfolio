import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education <span className="text-gradient">& Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-32 space-y-10">
          {EDUCATION_DATA.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-400/50"></div>

              {/* Year badge shown on desktop to the left */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>{item.period}</span>
                </span>
              </div>

              {/* Education Card */}
              <div className="glass-panel-interactive p-6 sm:p-7 rounded-2xl border-cyan-500/15">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="sm:hidden inline-flex items-center space-x-1 text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 px-2.5 py-0.5 rounded">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </span>

                  {item.status && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>

                <div className="text-sm font-medium text-cyan-400/90 mb-2">
                  {item.institution}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </span>

                  {item.stream && (
                    <span className="flex items-center space-x-1 text-slate-300 font-mono">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.stream}</span>
                    </span>
                  )}
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                        <Award className="w-3.5 h-3.5 text-cyan-400/80 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

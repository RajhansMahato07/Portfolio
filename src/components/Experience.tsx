import React from 'react';
import { INTERNSHIP_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Lightbulb, 
  Layers, 
  ExternalLink,
  Edit3
} from 'lucide-react';

interface ExperienceProps {
  onViewOfferLetter?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onViewOfferLetter }) => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          <p className="mt-4 text-sm text-slate-400 max-w-lg">
            Industry exposure and structured hands-on professional internship training.
          </p>
        </div>

        {/* Editable Transparency Banner */}
        <div className="glass-panel p-4 rounded-xl border-cyan-500/20 mb-8 flex items-start space-x-3 bg-cyan-950/20">
          <Edit3 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <div className="text-xs text-slate-300">
            <span className="font-semibold text-cyan-300">Note: </span>
            {INTERNSHIP_DATA.isEditableNote}
          </div>
        </div>

        {/* Main Internship Card */}
        <div className="glass-panel p-6 sm:p-9 rounded-2xl border-cyan-500/25 relative overflow-hidden shadow-2xl">
          {/* Subtle gradient corner accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent pointer-events-none" />

          {/* Top Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span className="font-semibold">{INTERNSHIP_DATA.company}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {INTERNSHIP_DATA.role}
              </h3>
            </div>

            <div className="flex flex-col sm:items-end space-y-1.5">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                <Calendar className="w-3 h-3" />
                <span>{INTERNSHIP_DATA.duration}</span>
              </span>
              <span className="inline-flex items-center space-x-1 text-xs text-slate-400">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{INTERNSHIP_DATA.location}</span>
              </span>
            </div>
          </div>

          {/* Reference Document Badge */}
          {INTERNSHIP_DATA.referenceDoc && (
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-cyan-300">{INTERNSHIP_DATA.referenceDoc}</span>
                <span className="hidden sm:inline text-slate-500">• Official Verification Available</span>
              </div>

              {onViewOfferLetter && (
                <button
                  onClick={onViewOfferLetter}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 px-3 py-1 rounded-lg transition-colors"
                >
                  <span>View Document</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>
          )}

          {/* Responsibilities */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Core Responsibilities & Training Focus</span>
            </h4>
            <div className="space-y-2">
              {INTERNSHIP_DATA.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Technologies & Tools Applied</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {INTERNSHIP_DATA.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Key Practical Takeaways</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {INTERNSHIP_DATA.keyLearning.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose
}) => {
  if (!project) return null;

  const isCompleted = project.status === 'Completed';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-panel max-w-3xl w-full max-h-[90vh] rounded-2xl border-cyan-500/30 overflow-hidden flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/70">
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${
                  project.status === 'In Progress'
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    : project.status === 'Planned'
                    ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                    : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                }`}
              >
                ● {project.status}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400/90 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Project Preview Image */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-slate-800 relative group h-56 sm:h-72 bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Architecture & System Design</span>
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Statement & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono uppercase mb-2">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Planned Core Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                Future Roadmap & Enhancements
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                {project.futureImprovements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Currently under active design & planning</span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Live Demo Button */}
            {project.liveDemoUrl && isCompleted ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                disabled
                className="cursor-not-allowed inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 opacity-75"
                title="Project under development - Live demo coming soon"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Live Demo (Coming Soon)</span>
              </button>
            )}

            {/* GitHub Repository */}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-200 bg-slate-900 border border-slate-700 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            ) : (
              <button
                disabled
                className="cursor-not-allowed inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Coming Soon</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

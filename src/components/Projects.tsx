import React, { useState } from 'react';
import { UPCOMING_PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  Rocket, 
  ExternalLink, 
  Github, 
  Clock, 
  Info, 
  Code2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>Engineering Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Upcoming <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          <p className="mt-4 text-sm text-slate-400 max-w-xl">
            Currently conceptualizing and engineering real-world full-stack web applications. Explore blueprints and tech stacks below.
          </p>
        </div>

        {/* Informative Pipeline Note */}
        <div className="glass-panel p-4 rounded-xl border-cyan-500/20 mb-10 flex items-start space-x-3 bg-cyan-950/20 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
          <div className="text-xs text-slate-300">
            <span className="font-semibold text-cyan-300">Development In Progress: </span>
            I believe in demonstrating genuine work rather than publishing placeholder or unverified projects. Live demos and public repositories will update automatically as each project reaches release milestones.
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive rounded-2xl border-cyan-500/15 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Card Header / Image */}
                <div
                  className="relative h-44 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border ${
                        project.status === 'In Progress'
                          ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                          : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                      }`}
                    >
                      ● {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700/60 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3
                    className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400/90"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 space-y-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center space-x-2 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-950/40 hover:border-cyan-400 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Architecture Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-2 pt-2 border-t border-slate-800/80">
                  {/* Gracefully disabled Demo Button */}
                  <button
                    disabled
                    className="flex-1 cursor-not-allowed flex items-center justify-center space-x-1.5 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800 text-[11px] font-mono text-slate-500"
                    title="Live demo under active development"
                  >
                    <Clock className="w-3 h-3" />
                    <span>Demo (Coming Soon)</span>
                  </button>

                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl || 'https://github.com/RajhansMahato07'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                    title="GitHub Repository"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

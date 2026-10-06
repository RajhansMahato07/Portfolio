import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Layers
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          <p className="mt-4 text-sm text-slate-400 max-w-2xl leading-relaxed">
            Full-stack web applications developed with modern frontend and backend architectures, RESTful APIs, and MongoDB databases.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive rounded-2xl border-cyan-500/20 overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Visual Card Header / Image */}
                <div
                  className="relative h-52 sm:h-60 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider backdrop-blur-md border bg-emerald-950/80 text-emerald-300 border-emerald-500/40 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Category */}
                  <span className="absolute top-3 right-3 text-[11px] font-mono text-cyan-300 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Title overlay at bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6">
                  <p className="text-xs text-cyan-400 font-mono mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight bullets from resume */}
                  <div className="mb-5 space-y-2 bg-slate-900/50 p-3.5 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-1.5 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Key Highlights</span>
                    </div>
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mb-4">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center space-x-1.5">
                      <Layers className="w-3 h-3 text-cyan-400" />
                      <span>Tech Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-cyan-300 hover:border-cyan-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center space-x-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl || 'https://github.com/RajhansMahato07'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
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

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Wrench, 
  Layers, 
  Check, 
  Sparkles,
  GitBranch,
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend Development': <Code className="w-4 h-4 text-cyan-400" />,
    'Backend Development': <Server className="w-4 h-4 text-blue-400" />,
    'Database Systems': <Database className="w-4 h-4 text-emerald-400" />,
    'Programming Languages': <Terminal className="w-4 h-4 text-amber-400" />,
    'Tools & Ecosystem': <Wrench className="w-4 h-4 text-purple-400" />,
    'Core Computer Science': <Cpu className="w-4 h-4 text-rose-400" />
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const displayedCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          <p className="mt-4 text-sm text-slate-400 max-w-xl">
            Real, practical competencies across modern full-stack web architectures, programming languages, and developer workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat !== 'All' && categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((catItem) => (
            <div
              key={catItem.category}
              className="glass-panel-interactive p-6 rounded-2xl border-cyan-500/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    {categoryIcons[catItem.category] || <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {catItem.category}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {catItem.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {catItem.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all duration-200"
                    >
                      <span className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      {skill.badge && (
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical competence indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center space-x-1">
                  <GitBranch className="w-3 h-3 text-cyan-500/70" />
                  <span>Verified Competency</span>
                </span>
                <span className="text-cyan-400/80">Hands-on Experience</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

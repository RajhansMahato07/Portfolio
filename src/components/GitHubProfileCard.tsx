import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubProfile } from '../types';
import { Github, ExternalLink, GitFork, BookOpen, Users, Star } from 'lucide-react';

export const GitHubProfileCard: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}`);
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        }
      } catch (err) {
        // Fallback gracefully without breaking UI
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="glass-panel p-6 sm:p-7 rounded-2xl border-cyan-500/20 max-w-xl mx-auto shadow-xl">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
        {/* Avatar / GitHub Logo */}
        <div className="relative group shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 border-2 border-cyan-500/40 p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-500/10">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Rajhans Mahato GitHub"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <Github className="w-10 h-10 text-cyan-400" />
            )}
          </div>
          <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-slate-950 border border-cyan-500/40 text-cyan-400">
            <Github className="w-3 h-3" />
          </span>
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white">
                {profile?.name || PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                @{PERSONAL_INFO.githubUsername}
              </p>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-sm"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {profile?.bio ||
              'Full Stack Developer & B.Tech IT student actively developing web applications and open-source code.'}
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile?.public_repos !== undefined ? profile.public_repos : '--'} Repositories</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>{profile?.followers !== undefined ? profile.followers : '--'} Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

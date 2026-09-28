import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubProfileCard } from './GitHubProfileCard';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMsg('Please fill in all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setStatusMsg('Please provide a valid email address.');
      return;
    }

    // Direct mailto trigger with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Rajhans,\n\nMy name is ${formData.name} (${formData.email}).\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setStatus('success');
    setStatusMsg('Drafting message in your email client. Thank you for connecting!');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setStatus('idle');
      setStatusMsg('');
    }, 6000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          <p className="mt-4 text-sm text-slate-400 max-w-lg">
            Have an internship opportunity, project collaboration, or technical inquiry? Let's connect.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="glass-panel-interactive p-5 rounded-2xl border-cyan-500/15 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Direct Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="glass-panel-interactive p-5 rounded-2xl border-cyan-500/15 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    +91 {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border-cyan-500/15 flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-teal-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                <div className="text-sm font-medium text-white">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-[11px] text-slate-500">Bengal College of Engineering & Technology</div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Prompt response guaranteed within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-cyan-500/20 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center space-x-2">
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out this form to quickly send an email directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message, project idea, or opportunity details here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans resize-none"
                />
              </div>

              {status !== 'idle' && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
                    status === 'success'
                      ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-950/40 border border-rose-500/30 text-rose-300'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{statusMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* GitHub Live Profile Card Component */}
        <GitHubProfileCard />
      </div>
    </section>
  );
};

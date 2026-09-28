import React, { useState } from 'react';
import { CERTIFICATE_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { CertificateModal } from './CertificateModal';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Calendar, 
  Building2, 
  Upload, 
  Plus, 
  Filter,
  FileCheck
} from 'lucide-react';

export const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<CertificateItem[]>(CERTIFICATE_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);

  const categories = ['All', 'Internship', 'Web Development', 'Programming', 'Others'];

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  // Allow uploading/adding more certificates directly from local folder
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newCerts: CertificateItem[] = [];
    Array.from(files).forEach((file, index) => {
      const fileUrl = URL.createObjectURL(file);
      const isPdf = file.type === 'application/pdf';

      newCerts.push({
        id: `custom-cert-${Date.now()}-${index}`,
        title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        issuer: 'Uploaded Local Document',
        date: new Date().toLocaleDateString('en-GB'),
        category: 'Others',
        image: fileUrl,
        pdfUrl: isPdf ? fileUrl : undefined,
        description: `Imported document: ${file.name}`
      });
    });

    setCertificates((prev) => [...prev, ...newCerts]);
  };

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Verifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certificates & <span className="text-gradient">Documents</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          <p className="mt-4 text-sm text-slate-400 max-w-lg">
            Directly verified records and internship documentation with full view and download options.
          </p>
        </div>

        {/* Controls Bar: Category Filters & Upload Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-1 flex items-center space-x-1">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Import / Upload Button */}
          <label className="cursor-pointer inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-950/40 hover:border-cyan-400 transition-all">
            <Upload className="w-3.5 h-3.5" />
            <span>Import / Add Certificate</span>
            <input
              type="file"
              multiple
              accept="image/*,application/pdf"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {/* Certificate Cards Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel-interactive rounded-2xl border-cyan-500/15 overflow-hidden flex flex-col justify-between group"
              >
                {/* Thumbnail Preview Area */}
                <div
                  className="relative h-64 overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer border-b border-slate-800/80"
                  onClick={() => setActiveModalCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-medium text-xs font-mono shadow-lg shadow-cyan-500/30 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Certificate</span>
                    </span>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/30 text-[10px] font-mono uppercase text-cyan-300 backdrop-blur-md">
                    {cert.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Date: {cert.date}</span>
                      </div>
                    </div>

                    {cert.description && (
                      <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalCert(cert)}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
                    >
                      <span>Open File</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel p-10 rounded-2xl border-cyan-500/20 text-center max-w-md mx-auto">
            <FileCheck className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-white mb-1">
              No certificates in "{selectedCategory}" yet
            </h4>
            <p className="text-xs text-slate-400 mb-5">
              Certificates can be dynamically loaded or uploaded using the Import button.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs font-mono text-cyan-400 hover:underline"
            >
              Reset to All Certificates
            </button>
          </div>
        )}
      </div>

      {/* Full Certificate Modal */}
      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </section>
  );
};

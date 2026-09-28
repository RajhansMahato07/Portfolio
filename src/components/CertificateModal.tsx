import React from 'react';
import { CertificateItem } from '../types';
import { X, ExternalLink, Download, Calendar, Building2 } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose
}) => {
  if (!certificate) return null;

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
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/70">
          <div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
              {certificate.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {certificate.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Preview */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#070a16]">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-h-[65vh] w-auto object-contain rounded-lg border border-slate-800 shadow-xl"
          />
        </div>

        {/* Footer Meta & Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-medium text-white">{certificate.issuer}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Issued: {certificate.date}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 hover:bg-cyan-900/50 transition-colors"
            >
              <span>Open Full File</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={certificate.image}
              download={`${certificate.title.replace(/\s+/g, '_')}.jpeg`}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

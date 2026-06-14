import React, { useState } from 'react';
import { CERTIFICATES } from '../constants';
import { X, Calendar, Building2, Award as AwardIcon, ExternalLink, CheckCircle } from 'lucide-react';
import { Certificate } from '../types';

const Resources: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="animate-fade-in py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <AwardIcon size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Professional Credentials</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Certifications & Achievements
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive collection of professional certifications, training programs, and industry recognitions demonstrating continuous learning and expertise.
          </p>
        </div>

        {/* Professional Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => openModal(cert)}
              className="group relative bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <AwardIcon size={64} className="text-gray-300 dark:text-gray-600" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <ExternalLink size={16} />
                    View Details
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Building2 size={14} />
                      <span className="line-clamp-1">{cert.issuer}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                    <CheckCircle size={12} className="text-green-600 dark:text-green-400" />
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">Verified</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>

                {/* Skills Preview */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-primary/10 rounded-md text-xs font-medium text-primary">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Keep the same detailed modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="bg-white dark:bg-dark-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certificate Details
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close certificate details"
                  title="Close"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Certificate Image */}
                <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  {selectedCert.image ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.name}
                      className="w-full h-auto object-contain max-h-[500px]"
                    />
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <AwardIcon size={64} className="text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Certificate Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedCert.name}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <Building2 className="text-primary mt-1" size={20} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issuing Organization</p>
                        {selectedCert.company_link ? (
                          <a
                            href={selectedCert.company_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"
                          >
                            {selectedCert.issuer}
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <p className="font-semibold text-gray-900 dark:text-white">{selectedCert.issuer}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <Calendar className="text-secondary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issue Date</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{selectedCert.date}</p>
                      </div>
                    </div>
                  </div>

                  {selectedCert.description && (
                    <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">Description</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>
                  )}

                  {/* Skills/Tech Stack */}
                  {selectedCert.skills && selectedCert.skills.length > 0 && (
                    <div className="p-4 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg border border-secondary/10">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-semibold">Technical Skills & Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Details */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-semibold flex items-center gap-2">
                      <AwardIcon size={16} />
                      Technical Details
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Certificate Type:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {selectedCert.issuer.includes('Internship') || selectedCert.name.includes('Internship')
                            ? 'Professional Internship'
                            : selectedCert.issuer.includes('Camp') || selectedCert.issuer.includes('Conference')
                              ? 'Training Program'
                              : 'Online Course'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Credential ID:</span>
                        <span className="font-mono text-xs text-gray-900 dark:text-white">{selectedCert.id.toUpperCase()}-{selectedCert.date.split(' ')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Status:</span>
                        <span className="font-medium text-green-600 dark:text-green-400">✓ Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
import React, { useState } from 'react';
import ChromaGrid from '../components/ChromaGrid';
import { CERTIFICATES } from '../constants';
import { X, Calendar, Building2, Award as AwardIcon } from 'lucide-react';
import { Certificate } from '../types';

// Color palette for certificates
const certificationColors = [
  { borderColor: '#3B82F6', gradient: 'linear-gradient(145deg, #3B82F6, #1E40AF, #000)' }, // Blue
  { borderColor: '#10B981', gradient: 'linear-gradient(145deg, #10B981, #047857, #000)' }, // Green
  { borderColor: '#8B5CF6', gradient: 'linear-gradient(145deg, #8B5CF6, #6D28D9, #000)' }, // Purple
  { borderColor: '#F59E0B', gradient: 'linear-gradient(145deg, #F59E0B, #D97706, #000)' }, // Amber
  { borderColor: '#EF4444', gradient: 'linear-gradient(145deg, #EF4444, #DC2626, #000)' }, // Red
  { borderColor: '#06B6D4', gradient: 'linear-gradient(145deg, #06B6D4, #0891B2, #000)' }, // Cyan
  { borderColor: '#EC4899', gradient: 'linear-gradient(145deg, #EC4899, #DB2777, #000)' }, // Pink
  { borderColor: '#6366F1', gradient: 'linear-gradient(145deg, #6366F1, #4F46E5, #000)' }, // Indigo
];

const Resources: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  // Transform certificates data for ChromaGrid
  const chromaItems = CERTIFICATES.map((cert, index) => {
    const colors = certificationColors[index % certificationColors.length];
    return {
      image: cert.image || '/images/default-cert.jpg',
      title: cert.name,
      subtitle: cert.issuer,
      handle: cert.date,
      borderColor: colors.borderColor,
      gradient: colors.gradient,
      onClick: () => openModal(cert)
    };
  });

  return (
    <div className="animate-fade-in py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Certifications & Achievements
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional certifications and training programs demonstrating continuous learning and expertise.
          </p>
        </div>

        {/* ChromaGrid Component */}
        <div style={{ minHeight: '800px', position: 'relative' }}>
          <ChromaGrid
            items={chromaItems}
            radius={350}
            damping={0.5}
            fadeOut={0.4}
            ease="power3.out"
          />
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
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issuing Organization</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{selectedCert.issuer}</p>
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
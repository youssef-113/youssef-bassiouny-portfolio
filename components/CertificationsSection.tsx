import React, { useState } from 'react';
import { CERTIFICATES } from '../constants';
import { ExternalLink, X, Calendar, Building2, Award as AwardIcon } from 'lucide-react';
import { Certificate } from '../types';

const CertificationsSection: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const openModal = (cert: Certificate) => {
        setSelectedCert(cert);
    };

    const closeModal = () => {
        setSelectedCert(null);
    };

    return (
        <section id="certifications" className="py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-display font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                    Certifications & Achievements
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    Professional certifications and training programs that demonstrate my commitment to continuous learning.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATES.map((cert) => (
                        <div
                            key={cert.id}
                            className="group bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <AwardIcon size={48} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                    {cert.name}
                                </h3>
                                <p className="text-sm font-medium text-primary mb-1">{cert.issuer}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mb-4">{cert.date}</p>

                                {cert.description && (
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 flex-1">
                                        {cert.description}
                                    </p>
                                )}

                                <button
                                    onClick={() => openModal(cert)}
                                    className="mt-auto w-full py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                                >
                                    View Details <ExternalLink size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
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
                                title="Close"
                                aria-label="Close modal"
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
        </section>
    );
};

export default CertificationsSection;

import React from 'react';
import { X, CheckCircle, Lightbulb, TrendingUp, Code } from 'lucide-react';
import { Project } from '../types';
import ImageGalleryModal from './ImageGalleryModal';

interface ProjectDetailsModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, isOpen, onClose }) => {
    const [showGallery, setShowGallery] = React.useState(false);
    const hasGallery = project.gallery_images && project.gallery_images.length > 0;

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4"
                onClick={onClose}
            >
                <div
                    className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${project.type === 'data analysis' ? 'bg-green-500/30 border border-green-300' :
                                        project.type === 'ds' ? 'bg-purple-500/30 border border-purple-300' :
                                            project.type === 'software' ? 'bg-blue-500/30 border border-blue-300' :
                                                'bg-amber-500/30 border border-amber-300'
                                        }`}>
                                        {project.type === 'data analysis' ? 'Data Analysis' :
                                            project.type === 'ds' ? 'Data Science' :
                                                project.type === 'software' ? 'Software' :
                                                    'Power BI'}
                                    </span>
                                    <span className="text-sm opacity-90">{project.year}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                                <p className="text-white/90 text-sm">{project.short_description}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors ml-4 flex-shrink-0"
                                title="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Gallery Preview */}
                        {hasGallery && (
                            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                        <Code size={20} className="text-primary" />
                                        Project Screenshots ({project.gallery_images!.length})
                                    </h3>
                                    <button
                                        onClick={() => setShowGallery(true)}
                                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                                    >
                                        View All Images
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {project.gallery_images!.slice(0, 4).map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all"
                                            onClick={() => setShowGallery(true)}
                                        >
                                            <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                                            {idx === 3 && project.gallery_images!.length > 4 && (
                                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold">
                                                    +{project.gallery_images!.length - 4} more
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Problem Solved */}
                        {project.problem_solved && (
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                                    <Lightbulb size={20} className="text-orange-500" />
                                    Problem Solved
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.problem_solved}</p>
                            </div>
                        )}

                        {/* Technical Highlights */}
                        {project.technical_highlights && project.technical_highlights.length > 0 && (
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                                    <Code size={20} className="text-blue-500" />
                                    Technical Highlights
                                </h3>
                                <ul className="space-y-2">
                                    {project.technical_highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                            <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Business Impact */}
                        {project.business_impact && project.business_impact.length > 0 && (
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                                    <TrendingUp size={20} className="text-green-500" />
                                    Business Impact
                                </h3>
                                <ul className="space-y-2">
                                    {project.business_impact.map((impact, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                            <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{impact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery Modal */}
            {hasGallery && (
                <ImageGalleryModal
                    images={project.gallery_images!}
                    isOpen={showGallery}
                    onClose={() => setShowGallery(false)}
                    projectTitle={project.title}
                />
            )}
        </>
    );
};

export default ProjectDetailsModal;

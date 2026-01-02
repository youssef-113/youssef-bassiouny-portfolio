import React, { useState } from 'react';
import { Github, ExternalLink, BookOpen, FileText, Images, Info } from 'lucide-react';
import { Project } from '../types';
import ImageGalleryModal from './ImageGalleryModal';
import ProjectDetailsModal from './ProjectDetailsModal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const hasGallery = project.gallery_images && project.gallery_images.length > 1;
  const hasDetails = project.problem_solved || project.technical_highlights || project.business_impact;

  const handleImageClick = () => {
    if (hasGallery) {
      setIsGalleryOpen(true);
    }
  };

  return (
    <>
      <div
        className="group relative bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.5deg] flex flex-col h-full animate-slide-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div
          className={`relative h-48 overflow-hidden ${hasGallery ? 'cursor-pointer' : ''}`}
          onClick={handleImageClick}
        >
          <img
            src={project.thumbnail_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Type Badge */}
          <div className="absolute top-3 right-3">
            <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm ${project.type === 'data analysis' ? 'bg-green-500/30 text-green-100 border border-green-500/30' :
              project.type === 'ds' ? 'bg-purple-500/30 text-purple-100 border border-purple-500/30' :
                project.type === 'software' ? 'bg-blue-500/30 text-blue-100 border border-blue-500/30' :
                  project.type === 'powerbi' ? 'bg-amber-500/30 text-amber-100 border border-amber-500/30' :
                    'bg-gray-500/30 text-gray-100 border border-gray-500/30'
              }`}>
              {project.type === 'data analysis' ? 'Data Analysis' :
                project.type === 'ds' ? 'Data Science' :
                  project.type === 'software' ? 'Software' :
                    project.type === 'powerbi' ? 'Power BI' :
                      'Other'}
            </span>
          </div>

          {/* Gallery Badge */}
          {hasGallery && (
            <div className="absolute top-3 left-3">
              <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
                <Images size={14} className="text-white" />
                <span className="text-xs font-bold text-white">{project.gallery_images!.length}</span>
              </div>
            </div>
          )}

          {/* Gallery Hint on Hover */}
          {hasGallery && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <Images size={32} className="mx-auto mb-2" />
                <p className="text-sm font-semibold">Click to view gallery</p>
                <p className="text-xs text-gray-300">{project.gallery_images!.length} images</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex-grow flex flex-col relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-xs text-gray-500 font-mono">{project.year}</span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {project.short_description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech_stack.slice(0, 4).map(tech => (
              <span key={tech} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 rounded border border-transparent dark:group-hover:border-gray-700 transition-colors">
                {tech}
              </span>
            ))}
            {project.tech_stack.length > 4 && (
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded">+{project.tech_stack.length - 4}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
            {/* View Details Button */}
            <button
              onClick={() => setIsDetailsOpen(true)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-105"
              title="View Full Project Details"
            >
              <Info size={16} />
              <span>View Details</span>
            </button>

            {/* View Gallery Button */}
            {hasGallery && (
              <button
                onClick={handleImageClick}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors transform hover:scale-105"
                title="View Image Gallery"
              >
                <Images size={16} />
                <span>Gallery</span>
              </button>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-105"
                title="View Source Code"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors transform hover:scale-105"
                title="View Live Demo"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            )}
            {project.notebook_url && project.notebook_url !== '#' && (
              <a
                href={project.notebook_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-400 transition-colors transform hover:scale-105"
                title="Open Notebook"
              >
                <BookOpen size={16} />
                <span>Notebook</span>
              </a>
            )}
            {project.presentation_url && project.presentation_url !== '#' && (
              <a
                href={project.presentation_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-105"
                title="View Presentation (PPT/PDF)"
              >
                <FileText size={16} />
                <span>Slides</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={project}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />

      {/* Image Gallery Modal */}
      {hasGallery && (
        <ImageGalleryModal
          images={project.gallery_images!}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          projectTitle={project.title}
        />
      )}
    </>
  );
};

export default ProjectCard;
import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ds' | 'software'>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.type === (filter === 'software' ? 'software' : 'ds'));
  }, [filter]);

  return (
    <div className="animate-fade-in py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            A collection of my work spanning Data Science, Machine Learning, and Full Stack Web Development.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center bg-gray-100 dark:bg-dark-card p-1 rounded-lg border border-gray-200 dark:border-dark-border">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              filter === 'all' 
                ? 'bg-white dark:bg-gray-700 text-primary shadow-sm' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('ds')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              filter === 'ds' 
                ? 'bg-white dark:bg-gray-700 text-primary shadow-sm' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Data Science & ML
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              filter === 'software' 
                ? 'bg-white dark:bg-gray-700 text-primary shadow-sm' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Software & Web
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No projects found for this category.
        </div>
      )}
    </div>
  );
};

export default Projects;
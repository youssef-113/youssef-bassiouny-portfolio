import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { Filter, BarChart3, Brain, Code, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dataanalysis' | 'ds' | 'powerbi' | 'software'>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    // Data Analysis includes both 'dataanalysis' and 'powerbi' projects
    if (filter === 'dataanalysis') return PROJECTS.filter(p => p.type === 'data analysis' || p.type === 'powerbi');
    // Data Science shows only 'ds' projects
    if (filter === 'ds') return PROJECTS.filter(p => p.type === 'ds');
    // Power BI shows only powerbi projects
    if (filter === 'powerbi') return PROJECTS.filter(p => p.type === 'powerbi');
    // Software shows only software projects
    return PROJECTS.filter(p => p.type === filter);
  }, [filter]);

  return (
    <div className="animate-fade-in py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            A collection of my work spanning Data Science, Machine Learning, Power BI Analytics, and Full Stack Web Development.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center bg-gray-100 dark:bg-dark-card p-1 rounded-lg border border-gray-200 dark:border-dark-border gap-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${filter === 'all'
              ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
          >
            <Filter size={16} />
            All
          </button>
          <button
            onClick={() => setFilter('dataanalysis')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${filter === 'dataanalysis'
              ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
          >
            <Brain size={16} />
            Data Analysis
          </button>
          <button
            onClick={() => setFilter('ds')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${filter === 'ds'
              ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
          >
            <Database size={16} />
            Data Science
          </button>
          <button
            onClick={() => setFilter('powerbi')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${filter === 'powerbi'
              ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
          >
            <BarChart3 size={16} />
            Power BI
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${filter === 'software'
              ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
          >
            <Code size={16} />
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
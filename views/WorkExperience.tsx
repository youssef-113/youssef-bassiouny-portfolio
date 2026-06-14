import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { EXPERIENCE, EDUCATION, HERO_CONTENT, INTERNSHIPS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in py-8 md:py-12 px-4 md:px-6">

      {/* Work Experience Section */}
      <section className="mb-12 md:mb-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 md:mb-8 flex items-center gap-3">
          <Briefcase className="text-primary" /> Professional Experience
        </h1>

        <div className="space-y-8 md:space-y-12 border-l-2 border-gray-200 dark:border-gray-800 ml-3 pl-6 md:pl-8 relative">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className="relative">
              <span className="absolute -left-[33px] md:-left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-dark-bg bg-primary"></span>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                <span className="text-xs md:text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-card px-2 py-1 rounded flex items-center gap-1 w-fit mt-2 md:mt-0">
                  <Calendar size={14} /> {job.period}
                </span>
              </div>

              <p className="text-base md:text-lg font-medium text-primary mb-3">{job.company}</p>

              <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                {job.description.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-display font-bold mb-6 md:mb-8 flex items-center gap-3">
          <GraduationCap className="text-primary" /> Education
        </h2>

        <div className="glass dark:bg-dark-card/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{EDUCATION[0].degree}</h3>
          <p className="text-base md:text-lg text-primary font-medium mb-2">{EDUCATION[0].institution}</p>
          <p className="text-xs md:text-sm font-mono text-gray-500 dark:text-gray-400 mb-4">{EDUCATION[0].period}</p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{EDUCATION[0].details}</p>
        </div>
      </section>

      {/* Internships & Training Summary Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-display font-bold flex items-center gap-3">
            <Briefcase className="text-primary" /> Internships & Training
          </h2>
          <Link
            to="/skills"
            className="text-sm text-primary hover:text-secondary transition-colors flex items-center gap-1"
          >
            View Full Details <ExternalLink size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INTERNSHIPS.map((internship) => (
            <div
              key={internship.id}
              className="glass dark:bg-dark-card/50 p-5 rounded-xl border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {internship.role}
                  </h3>
                  <p className="text-sm text-primary font-medium">{internship.company}</p>
                </div>
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded flex items-center gap-1 flex-shrink-0">
                  <Calendar size={12} /> {internship.period.split(' – ')[0]}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <MapPin size={12} className="text-secondary" />
                {internship.location}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                {internship.description[0]}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {internship.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {internship.skills.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md">
                      +{internship.skills.length - 3}
                    </span>
                  )}
                </div>
                <Link
                  to="/skills"
                  className="text-xs text-primary hover:text-secondary transition-colors flex items-center gap-1 font-medium"
                >
                  Details <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
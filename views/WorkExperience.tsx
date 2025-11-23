import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { EXPERIENCE, EDUCATION, HERO_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in py-8 md:py-12 px-4 md:px-6">

      {/* Bio Section */}
      <section className="mb-12 md:mb-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 md:mb-8">About Me</h1>
        <div className="glass dark:bg-dark-card/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-dark-border">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
            I am a motivated Computer Science student at Cairo University with a strong foundation in software development, Data Science, and AI.
            I have experience building end-to-end ML pipelines, creating insightful data visualization dashboards, and developing full-stack web applications.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With strong problem-solving, analytical, and collaboration skills, I am passionate about AI innovation and automation.
            I thrive in environments where I can leverage technology to solve real-world problems, whether it's through predictive modeling, CRM systems, or automating business workflows.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12 md:mb-20">
        <h2 className="text-xl md:text-2xl font-display font-bold mb-6 md:mb-8 flex items-center gap-3">
          <Briefcase className="text-primary" /> Work Experience
        </h2>

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
    </div>
  );
};

export default About;
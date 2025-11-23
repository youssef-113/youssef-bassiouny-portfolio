import React, { useState, useEffect } from 'react';
import { SKILLS, INTERNSHIPS } from '../constants';
import { Briefcase, Calendar, Code, MapPin, User } from 'lucide-react';

const Skills: React.FC = () => {
  // Typing animation state
  const bioText = "I'm a motivated Computer Science student at Cairo University with a strong foundation in software development, Data Science, and Artificial Intelligence. Throughout my journey, I've gained extensive experience building end-to-end machine learning pipelines, creating insightful data visualization dashboards, and developing full-stack web applications. With strong problem-solving, analytical thinking, and collaboration skills, I am deeply passionate about AI innovation and automation. I excel in environments where I can leverage cutting-edge technology to solve real-world challenges—whether through predictive modeling, intelligent CRM systems, or automating complex business workflows.";

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < bioText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(bioText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, bioText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Bio Section with Typing Animation */}
        <section className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <User className="text-primary" size={32} />
            <h1 className="text-3xl md:text-4xl font-display font-bold">About Me</h1>
          </div>

          <div className="glass dark:bg-dark-card/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-primary/30 transition-all duration-300">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-mono">
              {displayedText}
              {currentIndex < bioText.length && (
                <span className={`inline-block w-0.5 h-5 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              )}
            </p>
          </div>
        </section>

        {/* Internships Timeline Section */}
        <section className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary" size={32} />
            <h1 className="text-3xl md:text-4xl font-display font-bold">Internships & Training</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-base md:text-lg">
            Professional internships and training programs that shaped my technical expertise.
          </p>

          <div className="space-y-8 md:space-y-12 border-l-2 border-primary/30 ml-3 pl-6 md:pl-8 relative">
            {INTERNSHIPS.map((internship) => (
              <div key={internship.id} className="relative">
                <span className="absolute -left-[33px] md:-left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-dark-bg bg-primary shadow-lg shadow-primary/50"></span>

                <div className="glass dark:bg-dark-card/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {internship.role}
                      </h3>
                      <p className="text-base md:text-lg text-primary font-semibold mb-2">{internship.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-secondary" />
                          {internship.location}
                        </span>
                        {internship.supervisor && (
                          <span className="text-xs italic">{internship.supervisor}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-2 w-fit mt-3 md:mt-0 flex-shrink-0">
                      <Calendar size={14} /> {internship.period}
                    </span>
                  </div>

                  {/* Technical Skills Learned */}
                  <div className="mb-4 flex items-start gap-2">
                    <Code className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Technical Skills Learned:</p>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Key Responsibilities:</p>
                    <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                      {internship.description.map((point, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-primary mt-1 flex-shrink-0 font-bold">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-base md:text-lg">
            My technical toolkit, categorized by domain expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {SKILLS.map((category, idx) => (
              <div
                key={category.name}
                className="bg-white dark:bg-dark-card p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-dark-border animate-slide-up hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-6 text-primary border-b border-gray-100 dark:border-gray-800 pb-2">
                  {category.name}
                </h3>

                <div className="space-y-5 md:space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                        <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Can Do Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">What I Can Do</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-base md:text-lg">
            Professional capabilities and responsibilities I can deliver across different roles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Data Science & ML Card */}
            <div className="group bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-6 md:p-8 rounded-2xl border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">Data Science & ML</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Build end-to-end ML pipelines and models</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Develop predictive analytics solutions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Deploy deep learning models (TensorFlow, PyTorch)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Perform NLP and text classification tasks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Create GANs and generative models</span>
                </li>
              </ul>
            </div>

            {/* Full Stack Developer Card */}
            <div className="group bg-gradient-to-br from-secondary/5 to-primary/5 dark:from-secondary/10 dark:to-primary/10 p-6 md:p-8 rounded-2xl border-2 border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">Full Stack Developer</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Build modern web apps (React, Next.js, PHP)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Design and develop RESTful APIs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Manage databases (MySQL, MongoDB)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Implement responsive UI/UX designs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Deploy and maintain web applications</span>
                </li>
              </ul>
            </div>

            {/* AI Automation Card */}
            <div className="group bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-6 md:p-8 rounded-2xl border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">AI Automation</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Automate workflows with n8n, Zapier, Make</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Integrate APIs and third-party services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Build chatbots and AI assistants</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Connect Odoo with external platforms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Develop custom Python automation scripts</span>
                </li>
              </ul>
            </div>

            {/* CRM Leader Card */}
            <div className="group bg-gradient-to-br from-secondary/5 to-primary/5 dark:from-secondary/10 dark:to-primary/10 p-6 md:p-8 rounded-2xl border-2 border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">CRM Leader</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Design and implement CRM systems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Manage sales pipelines and deals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Create business intelligence dashboards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Generate insights from customer data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Optimize customer engagement strategies</span>
                </li>
              </ul>
            </div>

            {/* Data Analysis Card */}
            <div className="group bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-6 md:p-8 rounded-2xl border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">Data Analysis</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Perform exploratory data analysis (EDA)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Build interactive dashboards (Power BI, Streamlit)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Conduct statistical analysis and A/B testing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Create data visualizations and reports</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Extract actionable business insights</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
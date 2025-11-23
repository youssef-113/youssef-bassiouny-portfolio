import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Terminal, Award, Github, Linkedin, Phone } from 'lucide-react';
import { HERO_CONTENT, PROJECTS, CERTIFICATES } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 2);
  const featuredCertifications = CERTIFICATES.slice(0, 3);

  // Typing animation state
  const titles = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "AI Automation Specialist",
    "CRM & Analytics Reporting"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        // Continue typing or deleting
        setCurrentText(
          isDeleting
            ? currentTitle.substring(0, currentText.length - 1)
            : currentTitle.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);


  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 relative py-8 lg:py-12 max-w-7xl mx-auto">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 z-10 relative px-4 md:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-4 lg:mb-6 border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Working at Vmax (Full-time) & Hoven AI (Part-time)
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 lg:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {HERO_CONTENT.name}
          </h1>

          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 lg:mb-8 font-mono flex items-center gap-2 min-h-[2em]">
            <Terminal size={20} className="text-primary flex-shrink-0" />
            <span className="typing-animation">
              <span className="typed-text">{currentText}</span>
              <span className="typing-cursor">|</span>
            </span>
          </div>

          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }

            .typing-animation {
              display: inline-block;
              position: relative;
            }

            .typed-text {
              display: inline-block;
              white-space: nowrap;
            }

            .typing-cursor {
              display: inline-block;
              margin-left: 2px;
              animation: blink 0.7s infinite;
              color: var(--color-primary);
              font-weight: bold;
            }
          `}</style>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 lg:mb-10 leading-relaxed">
            {HERO_CONTENT.bio}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              to="/projects"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-sm sm:text-base"
            >
              View Work <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-sm sm:text-base"
            >
              Contact Me
            </Link>
            <a
              href="/Youssef Bassiony - Data Scientist and software Dev .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Eye size={18} /> View Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 relative px-4 md:px-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] group">
            {/* Abstract Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob mix-blend-overlay filter blur-xl"></div>

            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 bg-dark-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img
                src={HERO_CONTENT.image || "/images/profile.jpg"}
                alt={HERO_CONTENT.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 glass p-3 lg:p-4 rounded-xl shadow-xl animate-slide-up hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Current Status</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Working Ds and AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Highlights */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {['Python', 'php', 'javascript', 'Java', 'React', 'Next.js', 'Node.js', 'Odoo', 'Power BI', 'AI Automation', 'Docker'].map(tech => (
            <div key={tech} className="text-xl font-bold font-display text-gray-400 hover:text-primary transition-colors cursor-default select-none">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold font-display mb-2">Featured Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">Selected work in AI and Web Development</p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-medium">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Certifications */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold font-display mb-2">Featured Certifications</h2>
            <p className="text-gray-500 dark:text-gray-400">Professional achievements and training</p>
          </div>
          <Link to="/resources" className="hidden md:flex items-center gap-2 text-primary hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCertifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="group bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
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
                    <Award size={48} />
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
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/resources" className="inline-flex items-center gap-2 text-primary font-medium">
            View All Certifications <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Social Media Section - Top 3 */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-2">Let's Connect</h2>
          <p className="text-gray-500 dark:text-gray-400">Follow me and reach out on these platforms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* GitHub */}
          <a
            href="https://github.com/youssef-113"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glass p-8 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                <Github size={32} className="text-gray-700 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">GitHub</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">@youssef-113</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">Check out my code and projects</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/youssef-bassiony/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glass p-8 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">Youssef Bassiony</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">Connect professionally</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201001725166"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glass p-8 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-green-400 dark:hover:border-green-600 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 dark:bg-green-900/20 group-hover:scale-110 transition-transform duration-300">
                <Phone size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">+20 100 172 5166</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">Send me a message</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
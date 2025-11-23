import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white">Youssef Bassiouny</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Data Scientist and Ml Engineer -  Full Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-500 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>


        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {year} Youssef Bassiouny. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
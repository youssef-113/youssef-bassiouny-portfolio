import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Work Experience', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Me', path: '/skills' },
  { name: 'Certifications', path: '/Resources' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navClass = `fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
    ? 'dark:bg-dark-bg/90 bg-white/90 shadow-lg backdrop-blur-md py-2'
    : 'bg-transparent py-4'
    }`;

  return (
    <nav className={navClass}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card p-1 transition-transform group-hover:scale-105">
              <img
                src="Images\Logo.jpg"
                alt="YB Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg tracking-tight hidden sm:block group-hover:text-primary transition-colors">
              Youssef Bassiouny
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${location.pathname === item.path
                  ? 'text-primary'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-dark-card transition-all duration-300 ease-in-out border-b border-gray-200 dark:border-dark-border shadow-xl ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="flex flex-col px-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={`text-base font-medium block px-4 py-2 rounded-md transition-colors ${location.pathname === item.path
                ? 'text-primary bg-primary/10'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, MessageCircle, Briefcase, Database, Code, UserCheck } from 'lucide-react';
import { SOCIAL_LINKS, SOCIAL_MEDIA_CARDS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Icon component mapping
  const iconMap: any = {
    Github,
    Linkedin,
    MessageCircle,
    Mail,
    Briefcase,
    Database,
    Code,
    UserCheck
  };

  // Color mapping for icons
  const getIconColor = (color: string) => {
    const colorMap: any = {
      'from-gray-700 to-gray-900': 'text-gray-700 dark:text-gray-300',
      'from-blue-600 to-blue-800': 'text-blue-600 dark:text-blue-400',
      'from-green-600 to-green-700': 'text-green-600 dark:text-green-400',
      'from-red-600 to-red-700': 'text-red-600 dark:text-red-400',
      'from-teal-600 to-teal-700': 'text-teal-600 dark:text-teal-400',
      'from-cyan-600 to-cyan-700': 'text-cyan-600 dark:text-cyan-400',
      'from-orange-600 to-orange-700': 'text-orange-600 dark:text-orange-400',
      'from-indigo-600 to-indigo-700': 'text-indigo-600 dark:text-indigo-400'
    };
    return colorMap[color] || 'text-primary';
  };

  return (
    <div className="animate-fade-in py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Let's Work Together</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss Data Science opportunities? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        {/* Connect With Me - Social Media Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-3">Connect With Me</h2>
            <p className="text-gray-500 dark:text-gray-400">Find me on all these platforms</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOCIAL_MEDIA_CARDS.map((social, idx) => {
              const IconComponent = iconMap[social.icon];
              const iconColor = getIconColor(social.color);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glass p-6 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full ${social.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} className={iconColor} />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{social.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-mono">{social.username}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{social.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-3">Get In Touch</h2>
            <p className="text-gray-500 dark:text-gray-400">Send me a message or reach out directly</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="glass p-6 rounded-xl border border-gray-200 dark:border-dark-border flex items-start gap-4 hover:border-primary/30 transition-all duration-300">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <div className="glass p-6 rounded-xl border border-gray-200 dark:border-dark-border flex items-start gap-4 hover:border-secondary/30 transition-all duration-300">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors text-sm">
                    {SOCIAL_LINKS.phone}
                  </a>
                </div>
              </div>

              <div className="glass p-6 rounded-xl border border-gray-200 dark:border-dark-border flex items-start gap-4 hover:border-purple-400/30 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {SOCIAL_LINKS.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card p-8 rounded-2xl border border-gray-200 dark:border-dark-border shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="ِHR ahmed"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="hr@company.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${status === 'success'
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-primary to-secondary text-dark-bg hover:opacity-90 hover:shadow-lg'
                  }`}
              >
                {status === 'sending' ? (
                  <Loader2 className="animate-spin" />
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
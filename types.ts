export interface Project {
  id: string;
  title: string;
  short_description: string;
  long_description?: string;
  tech_stack: string[];
  thumbnail_url: string;
  live_url?: string;
  github_url?: string;
  notebook_url?: string;
  presentation_url?: string;
  type: 'ds' | 'software' | 'dashboard';
  year: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'internship';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
  description?: string;
  skills?: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}
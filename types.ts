export interface Project {
  id: string;
  title: string;
  short_description: string;
  long_description?: string;
  problem_solved?: string; // What problem does this project solve?
  technical_highlights?: string[]; // Key technical achievements and approaches
  business_impact?: string[]; // Business benefits and outcomes
  tech_stack: string[];
  thumbnail_url: string;
  gallery_images?: string[]; // For projects with multiple screenshots (e.g., Power BI dashboards)
  live_url?: string;
  github_url?: string;
  notebook_url?: string;
  presentation_url?: string;
  type: 'dataanalysis' | 'ds' | 'software' | 'powerbi';
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
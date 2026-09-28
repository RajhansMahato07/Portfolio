export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  stream?: string;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    badge?: string;
  }[];
}

export interface InternshipExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  keyLearning: string[];
  referenceDoc?: string;
  isEditableNote?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'All' | 'Web Development' | 'Programming' | 'Others' | 'Internship';
  image: string;
  pdfUrl?: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  status: 'Planned' | 'In Progress' | 'Completed';
  category: string;
  description: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  features: string[];
  futureImprovements: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
}

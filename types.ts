export enum ProjectCategory {
  BLOCKCHAIN = 'Blockchain',
  UI_UX = 'UI/UX Design',
  BI = 'BI & Strategy',
  DATA_SCI = 'Data Science',
  DATA_ENG = 'Data Engineering',
  GEN_AI = 'GenAI Studio'
}

export interface ProjectResource {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  // Deprecated single link in favor of resources array, but kept for backward compat if needed
  link?: string; 
  resources?: ProjectResource[];
  impact?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

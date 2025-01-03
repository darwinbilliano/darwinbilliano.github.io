export interface ProjectModel {
  href: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioModel {
  projects: ProjectModel[];
}

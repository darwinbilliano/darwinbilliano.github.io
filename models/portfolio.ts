export default interface PortfolioModel {
  projects: {
    href: string;
    title: string;
    description: string;
    tags: string[];
  }[];
}

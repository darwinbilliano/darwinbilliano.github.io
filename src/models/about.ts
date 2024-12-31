export default interface AboutModel {
  skills: {
    title: string;
    items: string[];
  }[];
  links: {
    href: string;
    label: string;
  }[];
}

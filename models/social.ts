import type {
  IconDefinition,
  IconLookup,
} from "@fortawesome/fontawesome-svg-core";

export default interface SocialModel {
  links: {
    href: string;
    icon: IconLookup | IconDefinition;
  }[];
}

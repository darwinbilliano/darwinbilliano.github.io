import type HeaderModel from "@/models/header";
import type SocialModel from "@/models/social";
import yaml from "@/utils/content/yaml";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import Nav from "./nav";

export default async function Header({ className }: { className?: string }) {
  const model = await yaml.read<HeaderModel>("header.yaml");
  const socialModel = await yaml
    .read<SocialModel>("social.yaml")
    .then(({ links }) => ({
      links: links.map(({ href, icon }) => ({
        href,
        icon: findIconDefinition(icon),
      })),
    }));

  return (
    <header className={className}>
      <Nav model={model} socialModel={socialModel} />
    </header>
  );
}

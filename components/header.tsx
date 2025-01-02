import type HeaderModel from "@/models/header";
import type SocialModel from "@/models/social";
import loader from "@/utils/loader";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import Nav from "./nav";

export default async function Header({ className }: { className?: string }) {
  const model = await loader.loadAsync<HeaderModel>("header.yaml");
  const socialModel = await loader
    .loadAsync<SocialModel>("social.yaml")
    .then(({ links }) => ({
      links: links.map(({ href, icon }) => ({
        href: href,
        icon: findIconDefinition(icon),
      })),
    }));
  return (
    <header className={className}>
      <Nav model={model} socialModel={socialModel} />
    </header>
  );
}

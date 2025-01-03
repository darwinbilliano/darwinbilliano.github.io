import type HeaderModel from "@/models/header";
import yaml from "@/utils/content/yaml";
import Nav from "./nav";

export default async function Header({ className }: { className?: string }) {
  const model = await yaml.read<HeaderModel>("header.yaml");
  return (
    <header className={className}>
      <Nav model={model} />
    </header>
  );
}

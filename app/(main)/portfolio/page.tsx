import type { PortfolioModel, ProjectModel } from "@/models/portfolio";
import yaml from "@/utils/content/yaml";
import type { Metadata } from "next";
import Link from "next/link";

function ProjectView({ model }: { model: ProjectModel }) {
  const { href, title, description, tags } = model;
  return (
    <Link className="h-full" href={href}>
      <div className="h-full p-8 bg-slate-light border border-light rounded">
        <div className="flex flex-col h-full">
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
          <br />
          <div className="flex flex-1 items-end">
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag}>
                  <span className="px-2 py-1 text-xs bg-red rounded">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProjectsView({ model }: { model: PortfolioModel }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-8">
      {model.projects.map((model) => (
        <li key={model.href}>
          <ProjectView model={model} />
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function PortfolioPage() {
  const model = await yaml.read<PortfolioModel>("portfolio.yaml");
  return (
    <main className="items-center">
      <section className="w-full max-w-6xl">
        <h1 className="font-bold text-2xl text-center">Projects</h1>
        <br />
        <ProjectsView model={model} />
      </section>
    </main>
  );
}

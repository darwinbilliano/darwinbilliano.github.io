import type { Metadata } from "next";
import Link from "next/link";

const projects = [
  {
    href: "https://github.com/darwinbilliano/BiLink",
    title: "BiLink",
    description: "CLI tool that manages Symbolic Link",
    tags: ["C#", "CLI", "Software"],
  },
  {
    href: "https://github.com/darwinbilliano/MechSharp",
    title: "MechSharp",
    description:
      "Recreation of Mechvibes, simulate mechanical keyboard keypress",
    tags: ["C#", "GUI", "Software"],
  },
  {
    href: "https://github.com/darwinbilliano/darwinbilliano.github.io",
    title: "Portfolio",
    description: "This website",
    tags: ["TypeScript", "Front-end"],
  },
];

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <main className="items-center">
      <section className="section-w-6xl">
        <Projects />
      </section>
    </main>
  );
}

function Projects() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
      {projects.map(({ title, description, tags, href }) => (
        <li key={href}>
          <Link className="h-full" href={href}>
            <div className="flex flex-col h-full p-8 bg-red rounded shadow">
              <h2 className="font-bold">{title}</h2>
              <p>{description}</p>
              <br />
              <div className="flex flex-1 items-end">
                <ul className="flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <span className="p-1 text-xs bg-red-light rounded">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

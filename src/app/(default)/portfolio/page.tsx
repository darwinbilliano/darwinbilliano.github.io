import { projects } from "@/content/portfolio";
import type { Metadata } from "next";
import Link from "next/link";

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

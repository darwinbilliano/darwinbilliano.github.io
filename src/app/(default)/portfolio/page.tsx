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
        <h1 className="font-bold text-2xl text-center">Projects</h1>
        <br />
        <Projects />
      </section>
    </main>
  );
}

function Projects() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
      {projects.map(({ href, title, description, tags }) => (
        <li key={href}>
          <Link className="h-full" href={href}>
            <div className="flex flex-col h-full p-8 bg-slate-light border rounded">
              <h2 className="font-bold">{title}</h2>
              <p>{description}</p>
              <br />
              <div className="flex flex-1 items-end">
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <span className="px-2 py-1 text-xs bg-red-light rounded">
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

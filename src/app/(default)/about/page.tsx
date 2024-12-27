import type { Metadata } from "next";
import Link from "next/link";
import type { HTMLProps } from "react";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <main>
      <div className="section-container section-container-center">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">About Me</h1>
          <br />
          <div className="p-8 bg-red rounded shadow">
            Hi! My name&apos;s Darwin Billiano. I&apos;m a high school student
            that love tech. I learn how to program since I was 12 years old. I
            love to learn new things and I&apos;m always curious about how
            things work.
          </div>
        </section>
      </div>
      <div className="section-container section-container-center bg-slate-light">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">More About Me</h1>
          <br />
          <div className="flex max-sm:flex-col gap-4">
            <Link className="flex-grow" href="/about/skills">
              <AboutNode>
                <h2 className="font-bold text-center">Skills</h2>
              </AboutNode>
            </Link>
            <Link className="flex-grow" href="/portfolio">
              <AboutNode>
                <h2 className="font-bold text-center">Portfolio</h2>
              </AboutNode>
            </Link>
            <Link className="flex-grow" href="/articles">
              <AboutNode>
                <h2 className="font-bold text-center">Articles</h2>
              </AboutNode>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function AboutNode({ children }: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return (
    <div className="p-8 bg-red rounded shadow duration-100 hover:scale-105">
      {children}
    </div>
  );
}

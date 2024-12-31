import { links, skills } from "@/content/about";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <section className="w-full max-w-2xl">
          <h1 className="font-bold text-2xl text-center">About Me</h1>
          <br />
          <div className="p-8 text-justify bg-slate-light border rounded">
            Hi! I&apos;m Darwin Billiano, a high school student that love tech
            and a hobbyist self-taught programmer.
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center bg-slate-light">
        <section className="w-full max-w-6xl">
          <h1 className="font-bold text-2xl text-center">Skills</h1>
          <br />
          <Skills />
        </section>
      </div>
      <div className="flex flex-col items-center">
        <section className="w-full max-w-2xl">
          <h1 className="font-bold text-2xl text-center">Go Deeper</h1>
          <br />
          <Links />
        </section>
      </div>
    </main>
  );
}

function Skills() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {skills
        .flatMap(({ skills }) => skills)
        .map((skill) => (
          <li key={skill}>
            <div className="h-full p-4 bg-red border border-light rounded">
              <p className="font-bold text-center">{skill}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

function Links() {
  return (
    <ul className="flex max-sm:flex-col gap-4">
      {links.map(({ href, text }) => (
        <li className="flex-1" key={href}>
          <Link href={href}>
            <div className="p-4 bg-red hover:bg-red-light border border-light rounded">
              <p className="font-bold text-center">{text}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

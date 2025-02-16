import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Darwin Billiano",
};

export default function HomePage() {
  const skills = [
    "C#",
    "ASP.NET",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "Docker",
  ];
  return (
    <>
      <div id="hero" className="grid min-h-screen place-items-center">
        <section className="p-12 text-center">
          <div className="mb-2 font-display text-3xl text-white sm:text-5xl md:text-7xl">
            Darwin Billiano
          </div>
          <div className="mb-6 font-display text-xl">
            Hobbyist Software and Full-stack Developer
          </div>
          <Link className="btn" href="#skills">
            Learn More
          </Link>
        </section>
      </div>
      <div id="skills" className="flex min-h-screen flex-col items-center">
        <section className="w-full max-w-4xl p-12">
          <h1 className="mb-2 font-display text-4xl text-white">Skills</h1>
          <p className="mb-6 font-display">
            Here are some technologies I&apos;ve used in past projects:
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
            {skills.map((skill, i) => (
              <li key={i}>
                <div className="panel text-center">{skill}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

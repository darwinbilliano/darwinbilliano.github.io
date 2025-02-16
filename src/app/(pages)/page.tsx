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
        <section className="section text-center">
          <header className="header">
            <h1 className="header-title md:text-7xl">Darwin Billiano</h1>
            <p className="header-description md:text-xl">
              Hobbyist Software and Full-stack Developer
            </p>
          </header>
          <Link className="btn" href="#skills">
            Learn More
          </Link>
        </section>
      </div>
      <div id="skills" className="flex min-h-screen flex-col items-center">
        <section className="section max-w-4xl">
          <header className="header">
            <h1 className="header-title">Skills</h1>
            <p className="header-description">
              Here are some technologies I&apos;ve used in past projects:
            </p>
          </header>
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

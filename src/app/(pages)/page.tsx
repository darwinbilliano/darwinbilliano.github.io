import content from "@/content/home.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darwin Billiano",
};

export default function HomePage() {
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
          <a className="btn" href="#about">
            Learn More
          </a>
        </section>
      </div>
      <div id="about" className="flex min-h-screen flex-col items-center">
        <section className="section max-w-4xl">
          <header className="header">
            <h1 className="header-title">Skills</h1>
            <p className="header-description">
              Here are some technologies I&apos;ve used in past projects:
            </p>
          </header>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {content.skills.map(({ name }) => (
              <li key={name}>
                <div className="panel text-center duration-200 hover:scale-105">
                  <p>{name}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

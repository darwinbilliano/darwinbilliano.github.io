import { skills } from "@/content/about/skills";
import { Icon } from "@iconify/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darwin Billiano",
};

export default function HomePage() {
  return (
    <>
      <div id="hero" className="grid min-h-screen place-items-center">
        <section className="section text-center">
          <header className="section-header">
            <h1 className="section-title md:text-7xl">Darwin Billiano</h1>
            <p className="section-description md:text-xl">Hobbyist Software and Full-stack Developer</p>
          </header>
          <div>
            <a className="btn" href="#about">
              Learn More
            </a>
          </div>
        </section>
      </div>
      <div className="min-h-screen">
        <div id="about" className="flex flex-col items-center">
          <section className="section max-w-6xl">
            <header className="section-header">
              <h1 className="section-title">Skills</h1>
              <p className="section-description">Here are some technologies I&apos;ve used in past projects:</p>
            </header>
            <div>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">
                {skills.map(({ name, category, icon }) => (
                  <li key={name}>
                    <div className="card flex items-center gap-4 duration-200 hover:scale-105">
                      <div>
                        <Icon className="size-16" icon={icon} />
                      </div>
                      <div>
                        <h2 className="text-white">{name}</h2>
                        <p className="text-sm">{category}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

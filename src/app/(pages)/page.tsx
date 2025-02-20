import { skills } from "@/content/about.json";
import assets from "@/utils/assets";
import type { Metadata } from "next";
import Image from "next/image";

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
        <section className="section max-w-6xl">
          <header className="header">
            <h1 className="header-title">Skills</h1>
            <p className="header-description">
              Here are some technologies I&apos;ve used in past projects:
            </p>
          </header>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">
            {skills.map(async ({ name, category, icon, color }) => {
              const asset = await assets.svg(icon);
              return (
                <li key={name}>
                  <div className="panel flex items-center gap-4 duration-200 hover:scale-105">
                    <div
                      className="size-16 rounded-md p-2"
                      style={{ backgroundColor: color }}
                    >
                      <Image src={asset} alt="" />
                    </div>
                    <div>
                      <h2 className="text-white">{name}</h2>
                      <p className="text-sm">{category}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

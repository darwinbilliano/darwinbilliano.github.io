import type { Metadata } from "next";
import { HTMLProps } from "react";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-col items-center">
        <section className="w-full max-w-2xl px-12 py-8 text-justify">
          <h1 className="font-bold text-2xl">
            Hey there! I&apos;m Darwin Billiano
          </h1>
          <br />
          <p>
            I&apos;m a hobbyist programmer since 2019. I began my programming
            journey through a simple top-down shooter game I made using Java.
            From there, I got into Unity and C# which has since become my
            favorite programming language. I&apos;ve also expanded my skills to
            full-stack web development and software development.
          </p>
          <br />
          <p>
            When I&apos;m not coding, I love playing video games, which often
            inspires some of my projects. Games are also the reason I got into
            programming in the first place, with Minecraft being the game that
            inspired me the most and led me to learn Java.
          </p>
          <br />
          <p>
            When it comes to programming, one thing I&apos;m not a fan of is
            dynamically typed and interpreted languages. I&apos;m looking at
            you, Python and JavaScript!
          </p>
        </section>
      </div>
      <div className="flex flex-col items-center bg-slate-light">
        <section className="w-full max-w-2xl px-12 py-8">
          <h1 className="font-bold text-2xl text-center">Skills</h1>
          <br />
          <div className="flex justify-between gap-4 max-sm:flex-col">
            <SkillGroup>
              <h2 className="font-bold">Software Dev</h2>
              <ul className="list-disc list-inside">
                <li>C#</li>
                <li>Avalonia UI</li>
              </ul>
            </SkillGroup>
            <SkillGroup>
              <h2 className="font-bold">Full-stack Dev</h2>
              <ul className="list-disc list-inside">
                <li>ASP.NET Core</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </SkillGroup>
            <SkillGroup>
              <h2 className="font-bold">Dev Tools</h2>
              <ul className="list-disc list-inside">
                <li>Docker</li>
                <li>Git</li>
                <li>Linux</li>
              </ul>
            </SkillGroup>
          </div>
        </section>
      </div>
    </main>
  );
}

function SkillGroup({ children }: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return (
    <div className="p-8 bg-red rounded duration-100 hover:scale-105">
      {children}
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <main>
      <div className="section-container">
        <section className="section-medium self-center text-justify">
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
      <div className="section-container">
        <section className="section-medium self-center">
          <h1 className="font-bold text-2xl">Skills</h1>
          <ul>
            <li>C#</li>
            <li>Avalonia UI</li>
          </ul>
          <ul>
            <li>ASP.NET Core</li>
            <li>Next.js (you&apos;re looking at it rn)</li>
          </ul>
          <ul>
            <li>Godot</li>
            <li>Unity</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>Ubuntu</li>
            <li>Arch Linux (I use arch btw)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

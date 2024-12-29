import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  return (
    <main>
      <div className="section-container section-container-center">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">Articles</h1>
        </section>
      </div>
      <div className="section-container section-container-center bg-slate-light">
        <section className="section-w-2xl">
          <h1 className="font-bold text-xl">More About Me</h1>
          <br />
          <div className="text-justify">
            <p>
              My name is Darwin Billiano. I&apos;m currently a high school.
              I&apos;m a hobbyist programmer since 2019. I began my programming
              journey through a simple top-down shooter game I made using Java.
              From there, I got into Unity and C# which has since become my
              favorite programming language. I&apos;ve also expanded my skills
              to full-stack web development and software development.
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
          </div>
        </section>
      </div>
    </main>
  );
}

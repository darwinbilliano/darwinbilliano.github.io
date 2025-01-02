import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More About Me",
};

export default function ArticlePage() {
  return (
    <main className="items-center">
      <section className="w-full max-w-2xl">
        <h1 className="font-bold text-2xl text-center">More About Me</h1>
        <br />
        <div className="text-justify">
          <p>
            Hi! I&apos;m Darwin Billiano, a high school student and a hobbyist
            programmer since 2019.
          </p>
          <br />
          <div>
            <h2 className="font-bold">Childhood</h2>
            <p>
              Ever since I was 6 years old, I&apos;ve had access to laptop. I
              spent a lot of time playing games with Minecraft being the game I
              played the most. As I played, I wonder... How does this game work?
              How does this game made? That curiosity sparked my journey into
              the world of programming, especially game development. Also at the
              same time COVID pandemic happened. With schools temporarily shut
              down, I had more time to learn and explore new things.
            </p>
          </div>
          <br />
          <div>
            <h2 className="font-bold">Middle School (2021-2023)</h2>
            <p>
              I started with simple top-down shooter game I made using Java.
              From there, I got into Unity and C#, which has since become my
              favorite programming language. I also learned HTML, CSS, and
              JavaScript along the way.
            </p>
            <br />
            <p>
              New programming languages: Java, C#, HTML, CSS, JavaScript,
              Python. New technologies: Unity, Git, Avalonia UI, and ASP.NET
              Core. Other: Minecraft server.
            </p>
          </div>
          <br />
          <div className="p-8 bg-slate-light border border-light rounded">
            <h2 className="font-bold">Fun Fact</h2>
            <p>
              When it comes to programming, one thing I&apos;m not a fan of is
              dynamically typed and interpreted languages. I&apos;m looking at
              you, Python and JavaScript!
            </p>
          </div>
          <br />
          <div>
            <h2 className="font-bold">High School (2023-2026)</h2>
            <p>
              New programming languages: C, C++, Rust and Go. New technologies:
              Next.js, React, Tailwind, Docker, and Linux. Other: Telegram bot
              and Discord bot.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

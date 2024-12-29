import type { Metadata } from "next";
import Link from "next/link";

const links = [
  {
    href: "/about/skills",
    text: "Skills",
  },
  {
    href: "/portfolio",
    text: "Portfolio",
  },
  {
    href: "/articles",
    text: "Articles",
  },
];

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return (
    <main>
      <div className="section-container section-container-center">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">About Me</h1>
          <br />
          <div className="text-justify">
            Hi! My name&apos;s Darwin Billiano. I&apos;m a high school student
            that love tech. I learn how to program since I was 12 years old. I
            love to learn new things and I&apos;m always curious about how
            things work.
          </div>
        </section>
      </div>
      <div className="section-container section-container-center bg-slate-light">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">More About Me</h1>
          <br />
          <Links />
        </section>
      </div>
    </main>
  );
}

function Links() {
  return (
    <ul className="flex max-sm:flex-col gap-4">
      {links.map(({ href, text }) => (
        <li className="flex-grow" key={href}>
          <Link href={href}>
            <div className="p-4 bg-red hover:bg-red-light rounded shadow">
              <h2 className="font-bold text-center">{text}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

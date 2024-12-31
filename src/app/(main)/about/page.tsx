import type AboutModel from "@/models/about";
import loader from "@/utils/loader";
import type { Metadata } from "next";
import Link from "next/link";

function SkillsView({ model }: { model: AboutModel }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {model.skills
        .flatMap(({ items }) => items)
        .map((item) => (
          <li key={item}>
            <div className="h-full p-4 bg-red border border-light rounded">
              <p className="font-bold text-center">{item}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

function LinksView({ model }: { model: AboutModel }) {
  return (
    <ul className="flex max-sm:flex-col gap-4">
      {model.links.map(({ href, label }) => (
        <li className="flex-1" key={href}>
          <Link href={href}>
            <div className="p-4 bg-red hover:bg-red-light border border-light rounded">
              <p className="font-bold text-center">{label}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AboutPage() {
  const model = await loader.loadAsync<AboutModel>("about.yaml");
  return (
    <main>
      <div className="flex flex-col items-center">
        <section className="w-full max-w-2xl">
          <h1 className="font-bold text-2xl text-center">About Me</h1>
          <br />
          <div className="p-8 text-justify bg-slate-light border rounded">
            Hi! I&apos;m Darwin Billiano, a high school student that love tech
            and a hobbyist self-taught programmer.
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center bg-slate-light">
        <section className="w-full max-w-6xl">
          <h1 className="font-bold text-2xl text-center">Skills</h1>
          <br />
          <SkillsView model={model} />
        </section>
      </div>
      <div className="flex flex-col items-center">
        <section className="w-full max-w-2xl">
          <h1 className="font-bold text-2xl text-center">Go Deeper</h1>
          <br />
          <LinksView model={model} />
        </section>
      </div>
    </main>
  );
}

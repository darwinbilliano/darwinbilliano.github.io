import type AboutModel from "@/models/about";
import yaml from "@/utils/content/yaml";
import type { Metadata } from "next";

function SkillsView({ model }: { model: AboutModel }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {model.skills.map((skill) => (
        <li key={skill}>
          <div className="h-full p-4 bg-red border border-medium rounded">
            <p className="font-bold text-center">{skill}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AboutPage() {
  const model = await yaml.read<AboutModel>("about.yaml");
  return (
    <main>
      <div className="flex flex-col items-center">
        <section className="w-full max-w-2xl">
          <h1 className="font-bold text-2xl text-center">About Me</h1>
          <br />
          <div className="p-8 text-justify bg-slate-light border border-light rounded">
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
    </main>
  );
}

import { skills } from "@/content/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <main>
      <div className="section-container section-container-center">
        <section className="section-w-6xl">
          <div className="text-center">
            <h1 className="font-bold text-2xl">Skills</h1>
            <p>These are my key, frequently used skills</p>
          </div>
          <br />
          <Skills />
        </section>
      </div>
    </main>
  );
}

function Skills() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {skills
        .flatMap(({ skills }) => skills)
        .map((skill) => (
          <li key={skill}>
            <div className="h-full p-4 bg-red border border-light rounded">
              <p className="font-bold text-center">{skill}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

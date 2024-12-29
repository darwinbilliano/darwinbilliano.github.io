import type { Metadata } from "next";

const skills = [
  {
    title: "Software Dev",
    skills: ["C#", "Avalonia UI"],
  },
  {
    title: "Full-stack Dev",
    skills: ["ASP.NET Core", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Dev Tools",
    skills: ["Docker", "Git", "Linux"],
  },
];

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <main>
      <div className="section-container section-container-center">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">Skills</h1>
          <br />
          <Skills />
        </section>
      </div>
    </main>
  );
}

function Skills() {
  return (
    <ul className="flex flex-col gap-4">
      {skills.map(({ title, skills }) => (
        <li key={title}>
          <div className="flex-grow p-8 bg-red rounded shadow">
            <h2 className="font-bold">{title}</h2>
            <ul className="list-disc list-inside">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

import type { Metadata } from "next";
import type { HTMLProps } from "react";

export const metadata: Metadata = {
  title: "Skills",
};

export default function Skills() {
  return (
    <main>
      <div className="section-container section-container-center">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">Skills</h1>
          <br />
          <div className="flex flex-col gap-4">
            <SkillNode>
              <h2 className="font-bold">Software Dev</h2>
              <ul className="list-disc list-inside">
                <li>C#</li>
                <li>Avalonia UI</li>
              </ul>
            </SkillNode>
            <SkillNode>
              <h2 className="font-bold">Full-stack Dev</h2>
              <ul className="list-disc list-inside">
                <li>ASP.NET Core</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </SkillNode>
            <SkillNode>
              <h2 className="font-bold">Dev Tools</h2>
              <ul className="list-disc list-inside">
                <li>Docker</li>
                <li>Git</li>
                <li>Linux</li>
              </ul>
            </SkillNode>
          </div>
        </section>
      </div>
    </main>
  );
}

function SkillNode({ children }: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return <div className="flex-grow p-8 bg-red rounded shadow">{children}</div>;
}

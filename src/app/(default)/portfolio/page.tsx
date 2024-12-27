import type { Metadata } from "next";
import Link from "next/link";
import type { HTMLProps } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <main>
      <div className="section-container section-container-center">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">Software</h1>
          <br />
          <div className="flex flex-col gap-4">
            <Link href="https://github.com/darwinbilliano/BiLink">
              <ProjectNode>
                <h2 className="font-bold">BiLink</h2>
                <p>CLI tool that manages Symbolic Link</p>
              </ProjectNode>
            </Link>
            <ProjectNode>
              <h2 className="font-bold">MechSharp (Private)</h2>
              <p>
                Recreation of Mechvibes, simulate mechanical keyboard keypress
              </p>
            </ProjectNode>
          </div>
        </section>
      </div>
      <div className="section-container section-container-center bg-slate-light">
        <section className="section-w-2xl">
          <h1 className="font-bold text-2xl text-center">Full-stack</h1>
          <br />
          <div className="flex flex-col gap-4">
            <Link href="https://github.com/darwinbilliano/darwinbilliano.github.io">
              <ProjectNode>
                <h2 className="font-bold">Portfolio</h2>
                <p>This website</p>
              </ProjectNode>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectNode({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return (
    <div className="flex-1 p-8 bg-red rounded shadow duration-500 hover:scale-105">
      {children}
    </div>
  );
}

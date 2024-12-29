import type { Metadata } from "next";
import Link, { type LinkProps } from "next/link";
import type { HTMLProps } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <main className="items-center">
      <section className="section-w-6xl">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
          <ProjectNode href="https://github.com/darwinbilliano/BiLink">
            <div>
              <h2 className="font-bold">BiLink</h2>
              <p>CLI tool that manages Symbolic Link</p>
            </div>
            <br />
            <div className="flex flex-1 items-end">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <TagNode>C#</TagNode>
                </li>
                <li>
                  <TagNode>CLI</TagNode>
                </li>
                <li>
                  <TagNode>Software</TagNode>
                </li>
              </ul>
            </div>
          </ProjectNode>
          <ProjectNode href="https://github.com/darwinbilliano/MechSharp">
            <div>
              <h2 className="font-bold">MechSharp</h2>
              <p>
                Recreation of Mechvibes, simulate mechanical keyboard keypress
              </p>
            </div>
            <br />
            <div className="flex flex-1 items-end">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <TagNode>C#</TagNode>
                </li>
                <li>
                  <TagNode>GUI</TagNode>
                </li>
                <li>
                  <TagNode>Software</TagNode>
                </li>
              </ul>
            </div>
          </ProjectNode>
          <ProjectNode href="https://github.com/darwinbilliano/darwinbilliano.github.io">
            <div>
              <h2 className="font-bold">Portfolio</h2>
              <p>This website</p>
            </div>
            <br />
            <div className="flex flex-1 items-end">
              <ul className="flex flex-wrap">
                <li>
                  <TagNode>TypeScript</TagNode>
                </li>
                <li>
                  <TagNode>Front-end</TagNode>
                </li>
              </ul>
            </div>
          </ProjectNode>
        </div>
      </section>
    </main>
  );
}

function ProjectNode({
  children,
  href,
}: Pick<HTMLProps<HTMLDivElement>, "children"> & Pick<LinkProps, "href">) {
  return (
    <Link className="flex flex-col p-8 bg-red rounded shadow" href={href}>
      {children}
    </Link>
  );
}

function TagNode({ children }: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return <span className="p-1 text-xs bg-red-light rounded">{children}</span>;
}

"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { HTMLProps } from "react";

export default function Header({
  className,
}: Pick<HTMLProps<HTMLDivElement>, "className">) {
  className ??= "sticky top-0 bg-red border-b";
  return (
    <header className={className}>
      <nav className="flex items-center justify-between px-32 max-md:px-12 font-bold">
        <h1 className="text-xl">
          <Link href="/">@billiano</Link>
        </h1>
        <div className="flex items-center gap-8">
          <ul>
            <li className="inline-block">
              <NavLink href="/about">About Me</NavLink>
            </li>
            <li className="inline-block">
              <NavLink href="/portfolio">Portfolio</NavLink>
            </li>
            <li className="inline-block">
              <NavLink href="/articles">Articles</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="https://github.com/darwinbilliano">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  children,
  href,
}: Pick<HTMLProps<HTMLAnchorElement>, "children"> & Pick<LinkProps, "href">) {
  const path = usePathname();
  const className = classNames("inline-block px-6 py-4 hover:underline", {
    underline: path === href,
  });
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

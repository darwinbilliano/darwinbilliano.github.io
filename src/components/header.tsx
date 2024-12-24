"use client";

import classNames from "classnames";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { HTMLProps } from "react";

export default function Header({
  className,
}: Pick<HTMLProps<HTMLDivElement>, "className">) {
  className ??= "sticky top-0 font-bold bg-red border-b";
  return (
    <header className={className}>
      <nav className="flex items-center justify-between px-12">
        <h1 className="text-xl">
          <Link href="/">@billiano</Link>
        </h1>
        <ul>
          <li>
            <NavLink href="/about">About Me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({
  children,
  href,
}: Pick<LinkProps, "href"> & Pick<HTMLProps<HTMLAnchorElement>, "children">) {
  const path = usePathname();
  const className = classNames("inline-block px-8 py-4 hover:underline", {
    underline: path === href,
  });
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

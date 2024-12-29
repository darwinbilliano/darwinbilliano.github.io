"use client";

import { NavLinks } from "@/client/header";
import { socialLinks } from "@/content/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
          <NavLinks />
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}

function SocialLinks() {
  return (
    <ul>
      {socialLinks.map(({ href, icon }) => (
        <li className="inline-block" key={href}>
          <Link href={href}>
            <FontAwesomeIcon className="fa-xl" icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { HTMLProps } from "react";

const navLinks = [
  { href: "/about", text: "About Me" },
  { href: "/portfolio", text: "Portfolio" },
  { href: "/articles", text: "Articles" },
];

const socialLinks = [
  { href: "https://github.com/darwinbilliano", icon: faGithub },
];

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

function NavLinks() {
  return (
    <ul>
      {navLinks.map(({ href, text }) => (
        <li className="inline-block" key={href}>
          <Link className="inline-block px-6 py-4 hover:underline" href={href}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
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

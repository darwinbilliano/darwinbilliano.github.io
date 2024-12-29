"use client";

import { NavLinks } from "@/client/header";
import { socialLinks } from "@/content/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  className ??= "sticky top-0 bg-red border-b border-strong";
  return (
    <header className={className}>
      <nav className="flex items-center justify-between h-14 px-12 md:px-32 font-bold">
        <h1 className="text-xl">
          <Link href="/">@billiano</Link>
        </h1>
        <div className="flex items-center gap-8 max-sm:hidden">
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
          <Link className="p-1" href={href}>
            <FontAwesomeIcon className="fa-xl" icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

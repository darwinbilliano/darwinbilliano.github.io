"use client";

import { navLinks } from "@/content/header";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const path = usePathname();
  return (
    <ul>
      {navLinks.map(({ href, text }) => {
        const className = classNames("inline-block px-6 py-4 hover:underline", {
          underline: path === href,
        });
        return (
          <li className="inline-block" key={href}>
            <Link className={className} href={href}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

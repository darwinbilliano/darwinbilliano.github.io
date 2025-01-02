"use client";

import type HeaderModel from "@/models/header";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ model }: { model: HeaderModel }) {
  const path = usePathname();
  return (
    <ul>
      {model.links.map(({ href, label }) => {
        const className = classNames("inline-block px-6 py-2 hover:underline", {
          underline: path.startsWith(href),
        });
        return (
          <li className="inline-block" key={href}>
            <Link className={className} href={href}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

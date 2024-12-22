import Link from "next/link";
import type { HTMLProps } from "react";

export default function Header({ className }: HTMLProps<HTMLDivElement>) {
  return (
    <header
      className={className ?? "sticky top-0 font-bold bg-accent border-b"}
    >
      <nav className="flex items-center justify-between px-12">
        <h1 className="text-[1.4rem]">
          <Link href="/">@billiano</Link>
        </h1>
        <ul>
          <li>
            <Link
              className="inline-block px-8 py-4 hover:underline"
              href="/about"
            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

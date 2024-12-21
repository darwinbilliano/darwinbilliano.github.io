import Link from "next/link";
import type { HTMLProps } from "react";

export default function Header({ className }: HTMLProps<HTMLDivElement>) {
  return (
    <header className={className}>
      <nav>
        <h1>
          <Link href="/">@billiano</Link>
        </h1>
        <ul>
          <li>
            <Link href="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

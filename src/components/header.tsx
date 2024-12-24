import Link, { type LinkProps } from "next/link";
import type { HTMLProps } from "react";

export default function Header({
  className,
}: Pick<HTMLProps<HTMLDivElement>, "className">) {
  className ??= "sticky top-0 font-bold bg-red border-b";
  return (
    <header className={className}>
      <nav className="flex items-center justify-between px-12">
        <h1 className="text-[1.4rem]">
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
  return (
    <Link className="inline-block px-8 py-4 hover:underline" href={href}>
      {children}
    </Link>
  );
}

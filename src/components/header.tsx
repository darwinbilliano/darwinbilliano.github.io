import Link from "next/link";

export default function Header() {
  return (
    <header>
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="justify-center">
      <section className="text-center">
        <div className="font-display font-semibold tracking-widest">
          <h1 className="text-3xl md:text-5xl">Darwin Billiano</h1>
          <br />
          <h2 className="text-2xl md:text-4xl">
            Software and Full-stack Developer
          </h2>
        </div>
        <br />
        <br />
        <Link className="btn" href="/about">
          About Me
        </Link>
      </section>
    </main>
  );
}
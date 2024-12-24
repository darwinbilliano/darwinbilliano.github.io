import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <section className="px-12 py-8 text-center">
        <div className="font-display tracking-widest">
          <h1 className="text-3xl">Darwin Billiano</h1>
          <br />
          <p className="text-2xl">Software, Game, and Full-stack Developer</p>
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

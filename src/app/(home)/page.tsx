import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="justify-center">
      <section className="text-center">
        <div className="font-display tracking-widest">
          <h1 className="font-bold text-3xl">Darwin Billiano</h1>
          <br />
          <p className="font-bold text-2xl">
            Software and Full-stack Developer
          </p>
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

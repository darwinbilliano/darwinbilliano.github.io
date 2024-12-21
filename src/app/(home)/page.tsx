import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="justify-center">
      <div className="section-container">
        <section className="self-center text-center">
          <div>
            <h1 className="text-4xl">Darwin Billiano</h1>
            <br />
            <p className="text-2xl">Software, Game, and Full-stack Developer</p>
          </div>
          <br />
          <br />
          <br />
          <Link className="btn" href="/about">
            Learn More
          </Link>
        </section>
      </div>
    </main>
  );
}

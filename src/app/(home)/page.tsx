import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="justify-center">
      <div className="section-container">
        <section className="align-center size-small text-center">
          <h1>Darwin Billiano</h1>
          <p>Hi! I&apos;m a hobbyist programmer</p>
          <br />
          <hr />
          <Link className="button" href="/about">
            Learn more
          </Link>
        </section>
      </div>
    </main>
  );
}

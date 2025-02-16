import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Darwin Billiano",
};

export default function HomePage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="p-12 text-center">
        <div className="mb-2 font-display text-3xl text-white sm:text-5xl md:text-7xl">
          Darwin Billiano
        </div>
        <div className="mb-6 font-display text-xl">
          Hobbyist Software and Full-stack Developer
        </div>
        <Link className="btn" href="/">
          Learn More
        </Link>
      </section>
    </div>
  );
}

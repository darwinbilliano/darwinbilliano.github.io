import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="section text-center">
        <header className="header">
          <h1 className="header-title md:text-5xl">404</h1>
          <p className="header-description md:text-xl">It looks like you&apos;re lost. Here is the way back!</p>
        </header>
        <Link className="btn" href="/">
          Go Back
        </Link>
      </section>
    </div>
  );
}

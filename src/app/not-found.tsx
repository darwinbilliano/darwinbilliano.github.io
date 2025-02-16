import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="p-12 text-center">
        <h1 className="mb-2 font-display text-5xl text-white md:text-7xl">
          404
        </h1>
        <p className="mb-6 font-display text-xl">
          It looks like you&apos;re lost. Here is the way back!
        </p>
        <Link className="btn" href="/">
          Go Back
        </Link>
      </section>
    </div>
  );
}

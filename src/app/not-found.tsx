import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main>
      <section>
        <h1>404</h1>
        <p>There&apos;s nothing here</p>
        <Link href="/">Go back</Link>
      </section>
    </main>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFoundPage() {
  return (
    <>
      <Header className="sticky top-0 bg-red border-b border-strong" />
      <main className="items-center">
        <section className="text-center">
          <h1 className="font-bold text-2xl">Not Found</h1>
          <br />
          <p>It looks like you&apos;re lost, here&apos;s the way back</p>
          <br />
          <br />
          <Link className="btn" href="/">
            Go Back
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

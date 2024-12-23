import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <section className="max-w-lg px-12 py-8 text-center">
          <h1 className="font-bold text-2xl">Not Found</h1>
          <p>It looks like you&apos;re lost, here&apos;s the way back</p>
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

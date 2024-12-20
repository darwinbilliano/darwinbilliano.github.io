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
      <main className="justify-center">
        <div className="section-container">
          <section className="align-center size-medium text-center">
            <h1>Page not found</h1>
            <p>There&apos;s nothing here</p>
            <Link className="button" href="/">
              Go back
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

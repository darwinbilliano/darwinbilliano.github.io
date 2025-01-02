import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  return (
    <main className="items-center">
      <section className="w-full max-w-2xl">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Contact Me</h1>
          <p>Contact is not available at the time.</p>
        </div>
      </section>
    </main>
  );
}

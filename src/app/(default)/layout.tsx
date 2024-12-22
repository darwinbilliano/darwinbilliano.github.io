import Footer from "@/components/footer";
import Header from "@/components/header";
import type { HTMLProps } from "react";

export default function DefaultLayout({ children }: HTMLProps<HTMLDivElement>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

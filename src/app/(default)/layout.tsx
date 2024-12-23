import Footer from "@/components/footer";
import Header from "@/components/header";
import type { HTMLProps } from "react";

export default function DefaultLayout({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

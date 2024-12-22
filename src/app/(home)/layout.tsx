import Header from "@/components/header";
import type { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header className="fixed w-full font-bold" />
      {children}
    </>
  );
}

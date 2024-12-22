import Header from "@/components/header";
import type { HTMLProps } from "react";

export default function HomeLayout({ children }: HTMLProps<HTMLDivElement>) {
  return (
    <>
      <Header className="home" />
      {children}
    </>
  );
}

import Header from "@/components/header";
import type { HTMLProps } from "react";

export default function HomeLayout({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return (
    <>
      <Header className="fixed w-full font-bold" />
      {children}
    </>
  );
}

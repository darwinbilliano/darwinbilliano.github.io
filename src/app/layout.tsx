import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import type { HTMLProps } from "react";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }: HTMLProps<HTMLDivElement>) {
  return (
    <html className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}

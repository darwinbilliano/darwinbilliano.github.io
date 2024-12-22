import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import type { ReactNode } from "react";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}

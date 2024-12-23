import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Nunito_Sans } from "next/font/google";
import type { HTMLProps } from "react";

// Disable fontawesome auto css injection
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return (
    <html className={nunito.className}>
      <body className="flex flex-col min-h-dvh bg-primary text-white">
        {children}
      </body>
    </html>
  );
}

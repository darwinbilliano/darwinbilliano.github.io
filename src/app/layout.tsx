import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Nunito_Sans } from "next/font/google";
import type { HTMLProps } from "react";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  return (
    <html className={nunito.variable}>
      <body className="flex flex-col min-h-dvh bg-slate text-white">
        {children}
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import classNames from "classnames";
import { Nunito_Sans, Raleway } from "next/font/google";
import type { HTMLProps } from "react";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  const fonts = classNames(nunito.variable, raleway.variable);
  return (
    <html className={fonts}>
      <body className="flex flex-col min-h-dvh bg-slate text-white">
        {children}
      </body>
    </html>
  );
}

import "@/utils/fa";
import "@fortawesome/fontawesome-svg-core/styles.css";
import classNames from "classnames";
import { Nunito_Sans, Raleway } from "next/font/google";
import "./globals.css";

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
}: {
  children: React.ReactNode;
}) {
  const className = classNames(nunito.variable, raleway.variable);
  return (
    <html className={className}>
      <body className="flex flex-col min-h-dvh bg-slate text-white">
        {children}
      </body>
    </html>
  );
}

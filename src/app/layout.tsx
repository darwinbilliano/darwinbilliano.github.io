import "@/styles/globals.css";
import { Nunito_Sans, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={`scroll-smooth ${nunitoSans.variable} ${spaceGrotesk.variable}`} lang="en">
      <body className="bg-zinc-950 text-zinc-300">{children}</body>
    </html>
  );
}

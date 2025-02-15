import { Nunito_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${nunitoSans.variable} ${spaceGrotesk.variable}`}
      lang="en"
    >
      <body className="flex min-h-screen flex-col bg-zinc-950 text-gray-300">
        <main className="flex-1">{children}</main>
        <footer className="p-12 text-center">
          &copy; 2025 Darwin Billiano
        </footer>
      </body>
    </html>
  );
}

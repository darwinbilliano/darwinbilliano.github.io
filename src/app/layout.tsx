import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}

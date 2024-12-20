import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html className={font.className}>
      <body>{children}</body>
    </html>
  );
}

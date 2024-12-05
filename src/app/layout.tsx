import { Nunito_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Layout({ children }) {
  return (
    <html style={font.style}>
      <body>
        <header>
          <nav>
            <h1>
              <Link href="/" className="blank">
                @billiano
              </Link>
            </h1>
            <ul>
              <li>
                <Link href="/about">About Me</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2024 Darwin Billiano</p>
          <p>This website is under construction...</p>
        </footer>
      </body>
    </html>
  );
}

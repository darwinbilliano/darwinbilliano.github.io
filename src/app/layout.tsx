import "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-zinc-950 text-gray-300">
        <main className="flex-1">{children}</main>
        <footer className="p-12 text-center">
          &copy; 2025 Darwin Billiano
        </footer>
      </body>
    </html>
  );
}

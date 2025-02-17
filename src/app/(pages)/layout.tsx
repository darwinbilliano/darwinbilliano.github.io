import { ReactNode } from "react";

export default function PagesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <footer className="section text-center">
        &copy; 2025 Darwin Billiano
      </footer>
    </div>
  );
}

import { Footer } from "@/components/footer";
import type { ReactNode } from "react";

export default function PagesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

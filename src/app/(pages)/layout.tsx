export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <footer className="p-12 text-center">&copy; 2025 Darwin Billiano</footer>
    </div>
  );
}

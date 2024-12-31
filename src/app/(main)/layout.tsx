import Footer from "@/components/footer";
import Header from "@/components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header className="sticky top-0 bg-red border-b border-strong" />
      {children}
      <Footer />
    </>
  );
}

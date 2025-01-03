import Header from "@/components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header className="fixed left-0 right-0 bg-slate border-light" />
      {children}
    </>
  );
}

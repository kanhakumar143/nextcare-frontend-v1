import Navbar from "@/components/layouts/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 md:px-12 lg:px-24 py-8">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}

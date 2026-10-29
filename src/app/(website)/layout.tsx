import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import StickyRobot from "@/components/layouts/sticky-robot";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <StickyRobot />
      <Footer />
    </>
  );
}

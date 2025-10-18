import PageWrapper from "@/components/pageWrapper";
import Footer from "@/components/footer";
import HeroSection from "@/components/jumbotron";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroSection />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
}

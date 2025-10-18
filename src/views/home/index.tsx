import LatestSection from "./sections/latest";
import TestimonialSection from "@/components/testi";
import FeaturedMenu from "@/components/featuredMenu";
import MenuTabs from "@/components/menuTabs";
import AboutSection from "@/components/aboutus";
import TeamsSection from "@/components/team";
import BlogSection from "@/components/blog";
export default function HomeView() {
  return (
    <div className="items-center justify-center">
      <AboutSection />
      <MenuTabs />
      <FeaturedMenu />
      <TestimonialSection />
      <TeamsSection />
      <BlogSection />
      <LatestSection />
    </div>
  );
}

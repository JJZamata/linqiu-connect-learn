import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TabPanel from "@/components/TabPanel";
import FeaturesSection from "@/components/FeaturesSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TabPanel />
      <FeaturesSection />
      <RoadmapSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

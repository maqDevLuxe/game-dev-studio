/* ===== Homepage — All 14 Sections ===== */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PublishPlatforms from "@/components/home/PublishPlatforms";
import LogicFeatures from "@/components/home/LogicFeatures";
import AssetLibrary from "@/components/home/AssetLibrary";
import PerformanceMetrics from "@/components/home/PerformanceMetrics";
import MultiplayerTools from "@/components/home/MultiplayerTools";
import Monetization from "@/components/home/Monetization";
import ShowcasePromo from "@/components/home/ShowcasePromo";
import PlatformCounters from "@/components/home/PlatformCounters";
import TutorialsBlog from "@/components/home/TutorialsBlog";
import CommunityForums from "@/components/home/CommunityForums";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* 1. Navbar (above) */}
    {/* 2. Hero with parallax + editor mockup */}
    <HeroSection />
    {/* 3. Publish platforms */}
    <PublishPlatforms />
    {/* 4. No-code logic features */}
    <LogicFeatures />
    {/* 5. Asset library preview */}
    <AssetLibrary />
    {/* 6. Engine performance metrics */}
    <PerformanceMetrics />
    {/* 7. Multiplayer/networking */}
    <MultiplayerTools />
    {/* 8. Monetization integrations */}
    <Monetization />
    {/* 9. Massive showcase promo */}
    <ShowcasePromo />
    {/* 10. Platform counters */}
    <PlatformCounters />
    {/* 11. Tutorials/blog */}
    <TutorialsBlog />
    {/* 12. Community & forums */}
    <CommunityForums />
    {/* 13. Testimonials */}
    <Testimonials />
    {/* 14. CTA + Footer */}
    <CTASection />
    <Footer />
  </div>
);

export default Index;

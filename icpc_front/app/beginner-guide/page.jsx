import HeroSection from "@/components/beginner-guide/HeroSection";
import Section1ReadyCheck from "@/components/beginner-guide/Section1ReadyCheck";
import Section2BeforeAfter from "@/components/beginner-guide/Section2BeforeAfter";
import Section3Journey from "@/components/beginner-guide/Section3Journey";
import Section4Prepare from "@/components/beginner-guide/Section4Prepare";
import Section5WhyAndWhatIf from "@/components/beginner-guide/Section5WhyAndWhatIf";
import CTASection from "@/components/beginner-guide/CTASection";
import SiteFooter from "@/components/landing_page/SiteFooter";

export default function BeginnerGuide() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <HeroSection />
      <Section1ReadyCheck />
      <Section2BeforeAfter />
      <Section3Journey />
      <Section4Prepare />
      <Section5WhyAndWhatIf />
      <CTASection />
      <SiteFooter/>
    </main>
  );
}

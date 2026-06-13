import CTABanner from "@/components/landing_page/CTABanner";
import SiteFooter from "@/components/landing_page/SiteFooter";
import HeroSection from "@/components/why-amrita/HeroSection";
import WhatMakesSpecial from "@/components/why-amrita/WhatMakesSpecial";

export default function WhyChooseAmritapuri() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <WhatMakesSpecial />
      <CTABanner/>
      <SiteFooter/>
      
    </main>
  );
}

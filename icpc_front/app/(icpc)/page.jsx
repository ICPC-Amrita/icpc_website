import HowToRegister from "@/components/tables/how_register";
import WhyParticipate from "@/components/about/why_participate";
import AboutAmrita from "@/components/about/amrita_vv2";
import AltHero from "@/components/hero/alt_hero";
import ExclusivePerks2 from "@/components/about/perks_2";
import WhatsICPC from "@/components/about/icpc";
import Sponsors from "@/components/tables/sponsors";
import Faq from "@/components/tables/faq";
import WebinarBanner from "@/components/tables/webinarbanner";
import HeroSection from "@/components/landing_page/HeroSection";
import WhatIsICPC from "@/components/landing_page/WhatIsICPC";
import HowICPCWorks from "@/components/landing_page/HowICPCWorks";
import ChooseYourCity from "@/components/landing_page/ChooseYourCity";
import ParticipantTestimonials from "@/components/landing_page/ParticipantTestimonials";
import ICPCChampions from "@/components/landing_page/ICPCChampions";
import CTABanner from "@/components/landing_page/CTABanner";
import SiteFooter from "@/components/landing_page/SiteFooter";
// import WebinarSection from "@/components/tables/past-sessions";
export default function Trial(){
    return(
        // <div className="min-h-[100vh] flex-1">
        //     {/* <Hero/> */}
        //     <HeroSection/>
        //     {/* <WebinarBanner/> */}
        //     <WhatsICPC/>
        //     <WhyParticipate/>
        //     <ExclusivePerks2/>
        //     <div className="pt-[8vw] bg-white">
        //         <HowToRegister/>
        //         {/* <WebinarSection/> */}
        //         <Sponsors/>
        //         {/* <OutreachPartners/> */}
        //         <Faq/>          {/* Moved FAQ before AboutAmrita */}
        //         <AboutAmrita/>  {/* Contact section now comes last */}
        //     </div>
        // </div>
    <main className="flex-1 bg-white">
            <HeroSection />
            <WhatIsICPC />
            <HowICPCWorks />
            <ChooseYourCity />
            <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
                <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ParticipantTestimonials />
                <ICPCChampions />
                </div>
            </section>
            <Sponsors/>
            <Faq/>
            <CTABanner/>
            <SiteFooter/>
    </main>

    )
}
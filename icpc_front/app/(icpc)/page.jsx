import HeroSection from "@/components/landing_page/HeroSection";
import ScoreboardStats from "@/components/landing_page/ScoreboardStats";
import WhatIsICPC from "@/components/landing_page/WhatIsICPC";
import HowICPCWorks from "@/components/landing_page/HowICPCWorks";
import AudienceSplit from "@/components/landing_page/AudienceSplit";
import ChooseYourCity from "@/components/landing_page/ChooseYourCity";
import ImportantDates from "@/components/landing_page/ImportantDates";
import ParticipantTestimonials from "@/components/landing_page/ParticipantTestimonials";
import ICPCChampions from "@/components/landing_page/ICPCChampions";
import CommunityProof from "@/components/landing_page/CommunityProof";
import CTABanner from "@/components/landing_page/CTABanner";
import SiteFooter from "@/components/landing_page/SiteFooter";
import Sponsors from "@/components/tables/sponsors";
import Faq from "@/components/tables/faq";

export default function Trial(){
    return (
        <main className="flex-1 bg-white">
            <HeroSection />
            <ScoreboardStats />
            <ImportantDates />
            <HowICPCWorks />
            <AudienceSplit />
            <WhatIsICPC />
            <ChooseYourCity />
            <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
                <div className="max-w-full mx-auto flex flex-col items-center justify-center">
                    <ParticipantTestimonials />
                    {/* <ICPCChampions /> */}
                </div>
            </section>
            <Sponsors />
            <Faq />
            <CommunityProof />
            <CTABanner />
            <SiteFooter />
        </main>
    );
}
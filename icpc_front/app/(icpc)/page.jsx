import HeroSection from "@/components/landing_page/HeroSection";
import ScoreboardStats from "@/components/landing_page/ScoreboardStats";
import WhatIsICPC from "@/components/landing_page/WhatIsICPC";
import AudienceSplit from "@/components/landing_page/AudienceSplit";
import HowICPCWorks from "@/components/landing_page/HowICPCWorks";
import ImportantDates from "@/components/landing_page/ImportantDates";
import ChooseYourCity from "@/components/landing_page/ChooseYourCity";
import ParticipantTestimonials from "@/components/landing_page/ParticipantTestimonials";
import CommunityProof from "@/components/landing_page/CommunityProof";
import CTABanner from "@/components/landing_page/CTABanner";
import SiteFooter from "@/components/landing_page/SiteFooter";
import Reveal from "@/components/landing_page/Reveal";
import Sponsors from "@/components/tables/sponsors";
import Faq from "@/components/tables/faq";
import { contestInfo } from "@/app/_constants/contestInfo";

const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: contestInfo.regionalName,
    description: `ICPC's premier university programming regional in India, held across ${contestInfo.hostCities.join(", ")}.`,
    startDate: "2027-01-01",
    endDate: "2027-01-02",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: contestInfo.hostCities.map((city) => ({
        "@type": "Place",
        name: `Amrita Vishwa Vidyapeetham, ${city}`,
        address: {
            "@type": "PostalAddress",
            addressLocality: city,
            addressCountry: "IN",
        },
    })),
    organizer: {
        "@type": "Organization",
        name: "Amrita Vishwa Vidyapeetham",
        url: "https://amritaicpc.in",
    },
    offers: {
        "@type": "Offer",
        url: contestInfo.registrationUrl,
        price: "1500",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
    },
    url: "https://amritaicpc.in",
};

export default function Trial(){
    return (
        <main className="flex-1 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
            />
            <HeroSection />
            <ScoreboardStats />
            <WhatIsICPC />
            <AudienceSplit />
            <HowICPCWorks />
            <ImportantDates />
            <ChooseYourCity />
            <ParticipantTestimonials />
            <CommunityProof />
            <Reveal><Sponsors /></Reveal>
            <Reveal><Faq /></Reveal>
            <CTABanner />
            <SiteFooter />
        </main>
    );
}

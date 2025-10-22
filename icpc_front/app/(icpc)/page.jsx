import HowToRegister from "@/components/tables/how_register";
import WhyParticipate from "@/components/about/why_participate";
import AboutAmrita from "@/components/about/amrita_vv2";
import AltHero from "@/components/hero/alt_hero";
import ExclusivePerks2 from "@/components/about/perks_2";
import WhatsICPC from "@/components/about/icpc";
import Sponsors from "@/components/tables/sponsors";
import Faq from "@/components/tables/faq";
import WebinarBanner from "@/components/tables/webinarbanner";
import WebinarSection from "@/components/tables/past-sessions";
export default function Trial(){
    return(
        <div className="min-h-[100vh]">
            {/* <Hero/> */}
            <AltHero/>
            {/* <WebinarBanner/> */}
            <WhatsICPC/>
            <WhyParticipate/>
            <ExclusivePerks2/>
            <div className="pt-[8vw] bg-white">
                <HowToRegister/>
                <WebinarSection/>
                <Sponsors/>
                {/* <OutreachPartners/> */}
                <Faq/>          {/* Moved FAQ before AboutAmrita */}
                <AboutAmrita/>  {/* Contact section now comes last */}
            </div>
        </div>
    )
}
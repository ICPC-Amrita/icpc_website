import HowToRegister from "@/app/archive/components25/tables/how_register";
import WhyParticipate from "@/app/archive/components25/about/why_participate";
import AboutAmrita from "@/app/archive/components25/about/amrita_vv2";
import AltHero from "@/app/archive/components25/hero/alt_hero";
import ExclusivePerks2 from "@/app/archive/components25/about/perks_2";
import WhatsICPC from "@/app/archive/components25/about/icpc";
import Sponsors from "@/app/archive/components25/tables/sponsors";
import Faq from "@/app/archive/components25/tables/faq";
import WebinarBanner from "@/app/archive/components25/tables/webinarbanner";
import WebinarSection from "@/app/archive/components25/tables/past-sessions";
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
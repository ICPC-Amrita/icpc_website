'use client';

import { Button } from "@/app/archive/components25/ui/button";
import { Card, CardContent } from "@/app/archive/components25/ui/card";
import { Badge } from "@/app/archive/components25/ui/badge";
import { Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const WebinarBanner = () => {

   const handleRegistration = () => {
    // Replace with your actual registration URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfbMxRlw01gCY-4ipxA6q3Nplht9ZETRh8Na45rXMkuieGdrQ/viewform', '_blank');
  };

  return (
    <section className="w-full">
      <Card className="w-full border-0 shadow-xl overflow-hidden bg-blue-950 text-white relative rounded-none">
        <CardContent className="relative py-8 px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            {/* Left Content - More centered */}
            <div className="flex-1 max-w-md space-y-4 text-center md:text-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold leading-tight mb-3">
                  Join Our Upcoming Webinar!
                </h2>
                <p className="text-blue-100 text-sm md:text-base">
                 From Contests to Career: How to Build a Competitive Programming Career

                </p>
              </div>

              {/* Event Details - Centered */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-blue-100">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Calendar className="w-3 h-3" />
                  <span className="font-medium">Oct 15</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Clock className="w-3 h-3" />
                  <span className="font-medium">6:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* Right Section - With more gaps */}
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-8 md:gap-8">
                {/* Profile Image */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 shadow-lg ring-2 ring-white/20">
                  <Image
                    src="/abhijith.jpg"
                    alt="ABHIJITH R PILLAI - ICPC@Amrita Club Lead"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Host Information - Centered */}
                <div className="text-center">
                  <p className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold mb-1">
                    HOSTED BY
                  </p>
                  <h3 className="font-bold text-sm md:text-base leading-tight">ABHIJITH R PILLAI</h3>
                  <p className="text-xs text-blue-100">ICPC@Amrita Club Lead</p>
                </div>
                
                {/* Register Button */}
                <Button 
                  size="sm"
                  onClick={handleRegistration}
                  className="bg-white text-blue-700 hover:bg-yellow-50 font-bold px-5 md:px-7 py-2.5 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-xs md:text-sm whitespace-nowrap"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Passcode - Below the button */}
              {/* <p className="text-sm text-blue-200 text-center">
                Passcode: <span className="font-mono font-semibold text-white">481217</span>
              </p> */}
            </div>

          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default WebinarBanner;

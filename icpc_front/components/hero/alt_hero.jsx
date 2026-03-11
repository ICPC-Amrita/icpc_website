'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import AnnouncementModal from "../tables/announcement-modal";

export default function AltHero() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [timeLeftEnd, setTimeLeftEnd] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Added for contest end countdown
    const [showTimer, setShowTimer] = useState(true);
    const [showEndTimer, setShowEndTimer] = useState(false); // added for contest end countdown
    useEffect(() => {
        const prelimsDate = new Date('2025-12-24T11:47:00').getTime();
        const contestEndDate = new Date('2025-12-24T13:30:00').getTime(); // ADD THIS LINE

        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = prelimsDate - now;
            const distanceEnd = contestEndDate - now; // ADD THIS LINE


            // Hide timer when contest starts (at 1:30 PM)
            setShowTimer(distance > 0);
            setShowEndTimer(distance <= 0 && distanceEnd > 0); // ADD THIS LINE


            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }

            if (distanceEnd > 0) {
            setTimeLeftEnd({
                days: Math.floor(distanceEnd / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distanceEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distanceEnd % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distanceEnd % (1000 * 60)) / 1000)
            });
        } else {
            setTimeLeftEnd({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }

        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const carouselImages = [
        '/ICPC_Photos/ICPC_25/Day-1/first.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/second.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/third.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2543.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2545.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2547.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2549.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2550.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2552.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2555.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2557.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2562.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2603.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/IMG_2783.JPG',
        '/ICPC_Photos/ICPC_25/Day-1/Team photo .jpg',
        '/ICPC_Photos/ICPC_25/Day-1/Women only team .jpg',
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full">
            
            {/* ===== TOP SECTION: Carousel Background with Text ===== */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden">
                
                {/* Background Carousel */}
                <div className="absolute inset-0 z-0">
                    {carouselImages.map((src, index) => (
                        <Image
                            key={src}
                            src={src}
                            alt={`ICPC Amritapuri 2025 Day 1 - ${index + 1}`}
                            fill
                            quality={80}
                            className={`object-cover object-top transition-opacity duration-1000 ease-in-out ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                            sizes="100vw"
                            priority={index === 0}
                        />
                    ))}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Slide indicators */}
                <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-8 flex flex-col gap-1 sm:gap-1.5 z-20">
                    {carouselImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                                i === currentSlide ? 'bg-white !h-4 sm:!h-5' : 'bg-white/40'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Centered-Left Text Content */}
                <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.1] drop-shadow-lg tracking-tight text-left">
                            ICPC 2026
                            <br />
                            <span className="text-blue-400">AMRITAPURI REGIONALS</span>
                        </h1>
                        
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-medium mb-4 sm:mb-6 md:mb-8 leading-relaxed text-left">
                            <Link href={'/reach-us/bengaluru'} className="hover:text-blue-400 transition-colors duration-300">
                                Bengaluru
                            </Link> , <Link href={'/reach-us/coimbatore'} className="hover:text-blue-400 transition-colors duration-300">
                                Coimbatore
                            </Link> , <Link href={'/reach-us/amritapuri'} className="hover:text-blue-400 transition-colors duration-300">
                                Kollam
                            </Link> , <span className="hover:text-blue-400 transition-colors duration-300">
                                Mysuru
                            </span>
                        </p>

                        <p className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4 px-6 sm:px-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
                            Coming Soon...
                        </p>
                    </div>
                </div>

                {/* Blue line at bottom of carousel */}
                <div className="absolute bottom-0 left-0 right-0 h-1  z-20" />
            </div>

            {/* ===== BOTTOM SECTION: White BG — Video + TBD (normal flow, NOT inside carousel) ===== */}
            <div className="bg-white">
                
          {/* YouTube Video - Centered */}
{/* YouTube Video - Centered */}
{/* YouTube Video - Centered & Fully Responsive */}
{/* YouTube Video - Centered & Fully Responsive */}
{/* YouTube Video */}
<div className="max-w-4xl mx-auto px-4 py-12">
  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/b9nyNA30hAM?autoplay=1&loop=1&playlist=b9nyNA30hAM&rel=0&modestbranding=1&controls=0&showinfo=0"
      title="ICPC Amritapuri"
      allowFullScreen
    />
  </div>
</div>
{/* TBD Timeline - normal flow */}
                <div className="border-t border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
                        <div className="flex justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
                            
                            <div className="text-center">
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">TBD</div>
                                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Registration Ends</div>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">TBD</div>
                                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Online Prelims</div>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">TBD</div>
                                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Onsite Regionals</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
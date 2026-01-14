'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState,useRef } from "react"; 

import { FaMedal } from "react-icons/fa";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
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
     const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Required for autoplay
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  }

    return (
        <div className="relative w-full min-h-screen bg-white overflow-hidden">
            
            {/* Main Content Container - Reduced padding for mobile */}
            <div className="flex flex-col lg:flex-row min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-24 xl:pt-20 max-w-7xl mx-auto gap-x-8">
                
                {/* Left Content Section */}
                <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-8 py-4 sm:py-6 lg:py-20">
                    
                    {/* Highlight Badge */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
    <span className="inline-block text-blue-700 text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 ">
        {/* Highlights: 310+ Onsite Slots ! Thankyou Everyone for making ICPC Amritapuri Regionals 2025 a Huge Success! */}
    </span>
</div>

                    {/* Main Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
                        ICPC 2025
                        <br />
                        <span className="text-blue-600">AMRITAPURI REGIONALS</span>
                    </h1>
                    
                    {/* Location List */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                        <Link href={'/reach-us/bengaluru'} className="hover:text-blue-600 transition-colors duration-300">
                            Bengaluru
                        </Link> , <Link href={'/reach-us/coimbatore'} className="hover:text-blue-600 transition-colors duration-300">
                            Coimbatore
                        </Link> , <Link href={'/reach-us/amritapuri'} className="hover:text-blue-600 transition-colors duration-300">
                            Kollam
                        </Link> , <span className="hover:text-blue-600 transition-colors duration-300">
                            Mysuru
                        </span>
                    </p>
            
{/* Announcement Section */}
{/* Announcement Section */}
<div className="mb-6 sm:mb-8 md:mb-12 space-y-3">

  {/* Inline Heading */}
  <p className="text-base sm:text-lg font-semibold leading-snug flex flex-wrap items-center gap-1">
    <span className="whitespace-nowrap">Announcement:</span>
    <strong className="font-semibold">Ranklist Asia Amritapuri Regionals 2025 released!</strong>
  </p>

  {/* Description */}
   
  <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
    {/* The list of teams qualified for the ICPC Amritapuri Onsite Regional Contest,
    to be held at the Amritapuri, Coimbatore, Bengaluru, and Mysuru Amrita campuses 
    on 2–3 January 2026, is now available. */}
    Winner: Div4Maxxer [Indian Institute of Technology - Kharagpur]

  </p>

</div>

                    {/* Problem Sets - Always visible */}
                    <div className="mb-6 sm:mb-8">
           <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
  {/* <FaMedal className="shrink-0 text-base sm:text-lg" /> */}
                    <a
  href="/onsite-ranklist"

  className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 sm:py-4 px-6 sm:px-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-center inline-block"
>
Final Ranklist – Amritapuri 2025</a>

  
  {/* <p className="m-0 leading-tight">
    Announcement:
    <strong className="ml-1">Teams Selected for Kanpur Onsite Round</strong>
  </p>  */}
</div>



                        <div className="flex flex-wrap gap-2">
                            {/* <Link
                                href="https://drive.google.com/drive/folders/17EeWUv5dLfnYgL2f37Uc_hd3ysMFeYjs?usp=sharing"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 text-xs sm:text-sm font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-md transition duration-200 hover:bg-blue-50"
                            >
                                Link 1
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1I0L0ToUdkvHfv_q0ljwOFnFNC8QXTuOO?usp=sharing"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 text-xs sm:text-sm font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-md transition duration-200 hover:bg-blue-50"
                            >
                                Link 2
                            </Link>
                            <Link
                                href="https://drive.google.com/drive/folders/1O0k-SHeSRjSLUR5482gy5rM9_3-7Qyy7?usp=sharing"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 text-xs sm:text-sm font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-md transition duration-200 hover:bg-blue-50"
                            >
                                Link 3
                            </Link> */}
                       {/* <p className="text-gray-700 text-sm sm:text-base mb-3 font-medium">
                        The list of teams qualified for the ICPC Kanpur Onsite Regional Contest, 
                        to be held at CSJM University, Kanpur on 22–23 December 2025, is now available.
                        </p> */}
                        </div>
                    </div>

                   {/* Countdown and Quick Links Section */}
<div className="mb-6 sm:mb-8 border-t border-gray-200 pt-6">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10">

    {/* Countdown Timer - Left Side - Only show before contest start/s */}
    {/* {showTimer && (
      <div>
        <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
          Prelims starts in:
        </p>
        <div className="flex gap-1 sm:gap-2 items-center">
          <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
            <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeft.days}</span>
            <span className="text-[10px] text-gray-600 font-medium mt-1">Days</span>
          </div>
          <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
            <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeft.hours}</span>
            <span className="text-[10px] text-gray-600 font-medium mt-1">Hr</span>
          </div>
          <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
            <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeft.minutes}</span>
            <span className="text-[10px] text-gray-600 font-medium mt-1">Min</span>
          </div>
          <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
            <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeft.seconds}</span>
            <span className="text-[10px] text-gray-600 font-medium mt-1">Sec</span>
          </div>
        </div>
      </div>
    )}ADD THIS ENTIRE BLOCK - Contest End Timer */}
{/* {showEndTimer && (
  <div>
    <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
      Contest ends in:
    </p>
    <div className="flex gap-1 sm:gap-2 items-center">
      <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
        <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeftEnd.days}</span>
        <span className="text-[10px] text-gray-600 font-medium mt-1">Days</span>
      </div>
      <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
        <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeftEnd.hours}</span>
        <span className="text-[10px] text-gray-600 font-medium mt-1">Hr</span>
      </div>
      <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
        <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeftEnd.minutes}</span>
        <span className="text-[10px] text-gray-600 font-medium mt-1">Min</span>
      </div>
      <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
        <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeftEnd.seconds}</span>
        <span className="text-[10px] text-gray-600 font-medium mt-1">Sec</span>
      </div>
    </div>
  </div>
)} */}
{/* {(showTimer || showEndTimer) && <div className="hidden sm:block w-px bg-gray-200 h-16"></div>} */}


    {/* Optional Divider for Desktop - Only show when timer is visible */}
    {/* {showTimer && <div className="hidden sm:block w-px bg-gray-200 h-16"></div>} */}

    {/* Quick Links - Right Side */}
    <div className={showTimer ? "" : "w-full"}>
      <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
        Download important documents:
      </p>
      <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 text-[#0066FF] text-sm font-semibold">
                    <a
  href="/data/Ranklist Asia Amritapuri Regionals 2025(Tentative)-1.pdf"
  download
  className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 sm:py-4 px-6 sm:px-8  transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-center inline-block"
>
  Download Ranklist
</a>
            <a
  href="/data/ICPC_Amritapuri_2025___26.pdf"
  download
  className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 sm:py-4 px-6 sm:px-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-center inline-block"
>
  Download Problem Set
</a>
      {/* <a
  href="/data/ICPC_Amritapuri_2025___26.pdf"
  download
  className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 sm:py-4 px-6 sm:px-8 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-center inline-block"
>
  Download Directors Report
</a> */}
        {/* <a
          href="/data/FAQ ICPC_V2.0.pdf"
          download="FAQ ICPC_V2.0.pdf"
          className="hover:underline hover:text-blue-700 transition-colors flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          FAQ
        </a>

        <a
          href="/data/ICPC_Contest_Guidelines_V2.0.pdf"
          download="ICPC_Contest_Guidelines_V2.0.pdf"
          className="hover:underline hover:text-blue-700 transition-colors flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Rules
        </a>

        <a
          href="/data/Onsite selction Process 2025_V 2.1.pdf"
          download="Onsite_selection_Process_2025_VV2.1.pdf"
          className="hover:underline hover:text-blue-700 transition-colors flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Selection Process
        </a> */}
        
          {/* <a
          href="/data/OBS Setup Guide for ICPC Proctoring - V2.pdf"
          download="OBS Setup Guide for ICPC Proctoring - V2.pdf"
          className="hover:underline hover:text-blue-700 transition-colors flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          OBS Setup Guide
        </a> */}
      </div>
    </div>
  </div>
</div>


                    {/* Sponsored by section */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4 uppercase tracking-wider">
                            Sponsored By
                        </p>
                        <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
                            <div className="flex flex-col items-start">
                                <div className="h-6 sm:h-8 md:h-10 flex items-center justify-start mb-1 sm:mb-2">
                                    <Image
                                        src="/jane2.png"
                                        alt="Jane Street"
                                        width={100}
                                        height={35}
                                        className="h-full w-auto object-contain "
                                    />
                                </div>
                                <p className="text-gray-600 text-[10px] sm:text-xs font-medium leading-tight">
                                    ICPC Titanium Multi-<br />Regional Sponsor
                                </p>
                            </div>

                            <div className="flex flex-col items-start">
                                <div className="h-6 sm:h-8 md:h-10 flex items-center justify-start mb-1 sm:mb-2">
                                    <Image
                                        src="/jetbrains_logo.svg"
                                        alt="JetBrains"
                                        width={70}
                                        height={25}
                                        className="h-3/4 w-auto object-contain "
                                    />
                                </div>
                                <p className="text-gray-600 text-[10px] sm:text-xs font-medium leading-tight">
                                    ICPC Global Sponsor<br />Programming Tools
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="flex-1 relative min-h-[280px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-screen mt-4 sm:mt-6 lg:mt-0 flex items-start justify-center px-4 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-36">
                    <div className="relative w-full max-w-lg lg:max-w-xl">
                        {/* <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
                            <defs>
                                <clipPath id="clip-main-image" clipPathUnits={'objectBoundingBox'}>
                                    <path
                                        d='M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z'
                                        fill='#D9D9D9'
                                    />
                                </clipPath>
                            </defs>
                        </svg> */}
 <figure
    
      className="w-full aspect-[4/3] relative overflow-hidden rounded-md "
    >
      {/* Thumbnail fallback - shows until video plays */}
      <img
        src="/icpc_thumbnail.jpg"
        alt="ICPC Amritapuri"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        ref={videoRef}
        loop
        autoPlay
        playsInline
        preload="auto"
        poster="/icpc_thumbnail.jpg"
        className="absolute inset-0 w-full h-full object-cover
                   transition-all duration-300 hover:scale-105"
        onLoadedData={(e) => {
          // Hide the fallback image once video is ready
          e.target.previousSibling.style.display = 'none';
        }}
      >
        <source
          src="https://cun3z2lpwvdcmhvy.public.blob.vercel-storage.com/final.mp4"
          type="video/mp4"
        />
      </video>
      {/* Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 z-10"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>
    </figure>
                    </div>
                </div>
            </div>

            {/* Timeline Section - Full Width Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
                    <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                        
                        <div className="text-center">
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">31 OCT</div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Registration Ends</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">8 NOV</div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Online Prelims</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">2-3 JAN</div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">Onsite Regionals</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* <AnnouncementModal /> */}
        </div>
    )
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import TeamRegistrationModal from '../modal/TeamRegistrationModal';
import { contestInfo } from "@/app/_constants/contestInfo";

const heroImages = [
  // Column 1 (Offset down)
  {
    src: "/assets/hero/IMG_2507.JPG",
    alt: "ICPC Regional Onsite Contest Arena",
    col: 1,
    aspect: "aspect-[3/4]",
  },
  // Column 2 (Top + Bottom)
  {
    src: "/assets/hero/IMG_2863.JPG",
    alt: "Contestants and Teams from Across India",
    col: 2,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/assets/hero/Team Photo2.JPG",
    alt: "ICPC Champions Celebration",
    col: 2,
    aspect: "aspect-[4/3]",
  },
  // Column 3 (Slightly offset Top + Bottom)
  {
    src: "/assets/hero/Women only team .jpg",
    alt: "ICPC Women in Tech Teams",
    col: 3,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/assets/hero/Contest Arena.jpg",
    alt: "ICPC Regional Runner-Up Teams",
    col: 3,
    aspect: "aspect-[4/3]",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <TeamRegistrationModal />
      
      {/* Main hero container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          {/* Left Column: Typography & CTAs (5 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
            
            {/* Supertitle / Eyebrow */}
            <p className="text-sm sm:text-base tracking-wide text-contest-blue font-semibold">
              The world&apos;s premier university programming competition
            </p>

            {/* Main Headline with Rough-Notation Animation */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.05] text-ink tracking-tight relative">
              Your ICPC journey<br className="hidden sm:inline" />{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">starts here.</span>
                {/* Rough Annotation Animated Highlighter / Underline */}
                <svg
                  className="rough-annotation absolute -bottom-1 left-0 w-full h-4 overflow-visible pointer-events-none"
                  viewBox="0 0 250 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 3 14 C 50 16, 120 11, 247 13"
                    stroke="#facc15"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="opacity-80"
                    style={{
                      strokeDasharray: 260,
                      strokeDashoffset: 260,
                      animation: "rough-draw 0.7s ease-out 0.2s forwards",
                    }}
                  />
                  <path
                    d="M 5 16 C 70 18, 160 13, 245 15"
                    stroke="#eab308"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="opacity-90"
                    style={{
                      strokeDasharray: 260,
                      strokeDashoffset: 260,
                      animation: "rough-draw 0.7s ease-out 0.4s forwards",
                    }}
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-heading */}
            <p className="text-2xl sm:text-3xl font-bold text-contest-blue leading-snug">
              {contestInfo.regionalName}
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-xl">
              Bring your best three-person team and compete against talented programmers from
              across India.
            </p>

            {/* Tagline & Locations */}
            <div className="space-y-1 pt-1">
              <p className="text-lg font-semibold text-gray-800">
                One regional. Four locations. {contestInfo.onsiteSlots} onsite opportunities.
              </p>
              <p className="text-base sm:text-lg text-gray-500 font-medium">
                {contestInfo.hostCities.join(" · ")}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                id="register-button"
                href={contestInfo.registrationUrl}
                className="inline-flex items-center justify-center bg-contest-blue hover:bg-contest-blue-dark active:bg-contest-blue-dark text-white text-lg font-semibold px-7 py-3.5 rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap"
              >
                Register your team
              </Link>
              <Link
                href="/onsite-selection-process"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 active:bg-red-700 text-white text-lg font-semibold px-7 py-3.5 rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap"
              >
                Selection process criteria
              </Link>
            </div>

            {/* Important date line */}
            <div className="flex items-center gap-3 pt-2 text-gray-900">
              <Calendar className="size-5 sm:size-6 text-contest-blue shrink-0" strokeWidth={2.2} />
              <span className="text-base sm:text-lg text-gray-700 font-medium">
                Mock contest starts {" "}
                <strong className="text-contest-blue font-bold">
                  {contestInfo.mockContestDate}
                </strong>
                {" "}· payment closes {contestInfo.paymentDeadline}
              </span>
            </div>

            {/* Keyframe animation style for rough notation */}
            <style>{`
              @keyframes rough-draw {
                to {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>


          </div>

          {/* Right Column: Staggered Multi-Column Image Collage (7 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 items-start w-full">
            
            {/* Column 1: Starts lower down (Offset) */}
            <div className="flex flex-col pt-8 sm:pt-14 lg:pt-20">
              <div className="relative aspect-[3/4] overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Column 2: Starts at the top with 2 stacked images */}
            <div className="flex flex-col gap-2 sm:gap-4 pt-0">
              <div className="relative aspect-[4/5]   overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3]  overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Column 3: Starts slightly offset with 2 stacked images (hidden on smallest mobile, shown sm+) */}
            <div className="hidden sm:flex flex-col gap-2 sm:gap-4 pt-4 sm:pt-8 lg:pt-10">
              <div className="relative aspect-[4/5]   overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3]  overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[4].src}
                  alt={heroImages[4].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

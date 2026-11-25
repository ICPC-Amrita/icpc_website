"use client";

import Image from "next/image";
import Link from "next/link";
import TeamRegistrationModal from '../modal/TeamRegistrationModal';
import { contestInfo } from "@/app/_constants/contestInfo";

const headerSponsors = [
  {
    title: "ICPC Titanium Multi-Regional Sponsor",
    name: "Jane Street",
    href: "https://www.janestreet.com/",
    src: "/jane2.png",
    imgClassName: "h-5 sm:h-6 w-auto object-contain",
  },
  {
    title: "ICPC Global Sponsor Programming Tools",
    name: "JetBrains",
    href: "https://www.jetbrains.com/",
    src: "/jetbrains_logo.svg",
    imgClassName: "h-4 sm:h-5 w-auto object-contain",
  },
];

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

      {/* Regionals Header Sponsors with Title */}
      {headerSponsors.length > 0 && (
        <section
          className="w-full border-y border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70"
          style={{ animation: "sponsor-strip-in 0.5s ease-out both" }}
        >
          <div className="w-full flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-2 sm:px-10 lg:px-16 xl:px-20">

            {/* Section Label */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-contest-blue opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-contest-blue" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-contest-blue leading-none">
                Our Sponsors
              </span>
            </div>

            <span className="hidden sm:block h-5 w-px bg-gray-300/80" aria-hidden="true" />

            {/* Sponsor Logos with Titles */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
              {headerSponsors.map((sponsor, idx) => (
                <a
                  key={sponsor.name}
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sponsor.title}: ${sponsor.name}`}
                  style={{
                    animation: `sponsor-logo-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.12 * (idx + 1)}s both`,
                  }}
                  className="group inline-flex flex-col items-center gap-0.5 rounded-lg px-2.5 py-0.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-sm"
                >
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500 leading-none text-center">
                    {sponsor.title}
                  </span>
                  <Image
                    src={sponsor.src}
                    alt={`${sponsor.name} Logo`}
                    width={130}
                    height={32}
                    unoptimized
                    className={`max-h-6 w-auto max-w-[120px] object-contain ${sponsor.imgClassName}`}
                  />
                </a>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Main hero container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
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

            {/* Teams selected for onsite + waiting lists (same combined width) */}
            <div className="pt-2 w-full">
              <div className="inline-grid w-fit max-w-full grid-cols-[repeat(2,minmax(0,1fr))] gap-2 sm:gap-3">
                <Link
                  href="/selected-amritapuri"
                  className="col-span-2 inline-flex items-center justify-center bg-contest-blue hover:opacity-90 active:opacity-80 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3.5 rounded-lg transition-all shadow-sm hover:shadow"
                >
                  Teams Selected for Amritapuri Onsite Round
                </Link>
                <Link
                  href="/amritapuri-waitlist"
                  className="inline-flex items-center justify-center text-center bg-white border-2 border-contest-blue text-contest-blue hover:bg-contest-blue hover:text-white active:opacity-80 text-sm sm:text-base font-semibold px-3 sm:px-4 py-3 rounded-lg transition-all shadow-sm hover:shadow"
                >
                  General Waitlist
                </Link>
                <Link
                  href="/amritapuri-waitlist-women"
                  className="inline-flex items-center justify-center text-center bg-white border-2 border-contest-blue text-contest-blue hover:bg-contest-blue hover:text-white active:opacity-80 text-sm sm:text-base font-semibold px-3 sm:px-4 py-3 rounded-lg transition-all shadow-sm hover:shadow"
                >
                  Women Only Waitlist
                </Link>
              </div>
            </div>


            {/* Keyframe animation styles */}
            <style>{`
              @keyframes rough-draw {
                to {
                  stroke-dashoffset: 0;
                }
              }
              @keyframes sponsor-strip-in {
                from {
                  opacity: 0;
                  transform: translateY(-6px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes sponsor-logo-in {
                from {
                  opacity: 0;
                  transform: translateY(6px) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
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

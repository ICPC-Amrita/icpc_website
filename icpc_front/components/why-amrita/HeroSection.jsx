"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, MapPin, CalendarDays, Trophy, Heart, Play, ArrowRight, X } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-7 h-7 text-blue-500" />,
    value: "310+",
    label: "Onsite Seats",
    sub: "Highest in Asia West",
  },
  {
    icon: <MapPin className="w-7 h-7 text-indigo-500" />,
    value: "4",
    label: "Cities",
    sub: "Across South India",
  },
  {
    icon: <CalendarDays className="w-7 h-7 text-blue-500" />,
    value: "13+",
    label: "Years",
    sub: "Of excellence",
  },
  {
    icon: <Trophy className="w-7 h-7 text-yellow-400" />,
    value: null,
    label: "A Gateway to",
    bold: "World Finals",
    sub: "Many teams made it!",
  },
  {
    icon: <Heart className="w-7 h-7 text-pink-500" />,
    value: null,
    label: "Thousands of",
    bold: "Happy Participants",
    sub: "And counting...",
  },
];

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="bg-white overflow-hidden">
      {/* Hero */}
      <div className="max-w-[100rem] mx-auto px-8 lg:px-16 pt-14 pb-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        {/* Left */}
        <div className="flex-1 z-10">
          <p className="text-gray-700 text-sm font-medium mb-2">Why ICPC Amrita?</p>
          <h1 className="text-[2.75rem] lg:text-[3.4rem] font-extrabold text-gray-900 leading-tight mb-5">
            The{" "}
            <span className="text-blue-600">Best Start</span>
            <br />
            for Your ICPC Journey
          </h1>
          <p className="text-gray-500 text-[1.05rem] leading-relaxed max-w-lg mb-9">
            More seats. Amazing experiences. Unforgettable memories.
            <br />
            This is why thousands of students choose ICPC Amrita
            <br />
            to begin their journey.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              id="register-button"
              href="https://icpc.global/login?redirect_uri=/private/teamRegistration/site/40197"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Register Your Team 
              {/* <ArrowRight className="w-4 h-4" /> */}
            </a>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              <span className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-blue-600 text-blue-600 ml-0.5" />
              </span>
              See last year&apos;s highlights
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 relative flex justify-center items-end min-h-[374px] lg:min-h-[462px]">
          <Image
            src="/assets/why-amrita/image1.png"
            alt="Students working together on ICPC problems"
            width={638}
            height={462}
            className="object-contain object-bottom w-full max-w-[638px]"
            priority
          />
          {/* Floating badge */}

        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-2 px-8 lg:px-16">
        <div className="max-w-[100rem] mx-auto bg-[#0d1b3e] rounded-xl py-6 px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 divide-x-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-start gap-3 lg:px-8 first:pl-0 last:pr-0">
              <div className="flex-shrink-0 mt-0.5">{stat.icon}</div>
              <div>
                {stat.value && (
                  <p className="text-white text-2xl font-bold leading-none">{stat.value}</p>
                )}
                {stat.bold ? (
                  <>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                    <p className="text-white font-bold text-sm leading-tight">{stat.bold}</p>
                  </>
                ) : (
                  <p className="text-white font-semibold text-sm leading-tight">{stat.label}</p>
                )}
                <p className="text-gray-400 text-xs mt-0.5">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/b9nyNA30hAM?autoplay=1&loop=1&playlist=b9nyNA30hAM&rel=0&modestbranding=1&controls=0&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

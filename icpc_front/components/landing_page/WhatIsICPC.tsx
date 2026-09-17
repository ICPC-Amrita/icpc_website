import Image from "next/image";
import Link from "next/link";
import MobileCarousel from "./MobileCarousel";
import BeginnersSection from "./BeginnersSection";
import { contestInfo } from "@/app/_constants/contestInfo";

const quickFacts = [
  { value: contestInfo.teamSize, label: "Contestants per team" },
  { value: contestInfo.hostCitiesCount, label: "Host cities" },
  { value: contestInfo.registrationFee, label: "Prelims fee per team" },
];

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M9.5 4C6.5 4 4 6.5 4 9.5c0 2.1 1.2 3.9 2.9 4.9L7.5 17h9l.6-2.6A5.5 5.5 0 0014.5 4H9.5z" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 17v2a1 1 0 001 1h4a1 1 0 001-1v-2" stroke="#10B981" strokeWidth="1.5" />
        <path d="M10 10l1.5 1.5L14 8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "bg-green-50",
    title: "Build problem-solving skills",
    desc: "Tackle unfamiliar problems under real contest pressure.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M8 7h8M8 11h8M8 15h5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 15l1.5 1.5L19 13" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "bg-blue-50",
    title: "Strengthen your profile",
    desc: "A globally recognized contest that stands out beyond the classroom.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="#8B5CF6" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="3" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M2 19a6 6 0 0112 0" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 14a6 6 0 016 5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    bg: "bg-purple-50",
    title: "Learn to work as a team",
    desc: "Three people, one computer, one shared goal.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>
    ),
    bg: "bg-orange-50",
    title: "Take the next step",
    desc: "Your regional contest can be the start of a much bigger journey.",
  },
];

export default function WhatIsICPC() {
  return (
    <section id="why-icpc" className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 py-14">
      {/* What is ICPC */}
      <div className="max-w-full mx-auto border border-hairline rounded-2xl p-8 sm:p-10">
        <div className="text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">What is ICPC?</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 mt-10">
          {/* Left: illustration */}
          <div className="w-full lg:flex-1 flex justify-center ">
            <Image
              src="/assets/hero/Image 2.JPG"
              alt="Students collaborating on programming"
              width={540}
              height={400}
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-none object-contain select-none rounded-lg"
              draggable={false}
            />
          </div>

          {/* Right: content */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-snug">
              Why ICPC Amritapuri?
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-contest-blue">
              More than a contest. It&apos;s a chance to see what your team can do.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              ICPC brings together university students who love solving hard problems under
              pressure. Your journey starts with the online prelims and can take you all the
              way to the World Finals.
            </p>

            {/* Quick facts row */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-2 pt-2 border-t border-hairline">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-2xl font-bold text-ink">{fact.value}</p>
                  <p className="text-sm text-gray-500">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why participate */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">What do you get from participating?</h2>
          </div>

          <MobileCarousel desktopGrid="grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${r.bg} flex items-center justify-center shrink-0`}>
                  {r.icon}
                </div>
                <p className="text-sm font-bold text-gray-900 leading-snug">{r.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </MobileCarousel>
        </div>

        <BeginnersSection />
      </div>
    </section>
  );
}

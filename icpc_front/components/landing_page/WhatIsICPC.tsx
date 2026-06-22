import Image from "next/image";
import Link from "next/link";
import MobileCarousel from "./MobileCarousel";
import BeginnersSection from "./BeginnersSection";


const icpcStats = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: "100+",
    label: "Countries",
    color: "text-blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L2 9l10 6 10-6-10-6z" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 6 10-6" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 13l10 6 10-6" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    value: "Thousands",
    label: "Universities",
    color: "text-emerald-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="3" stroke="#8B5CF6" strokeWidth="1.5" />
        <path d="M5 20a7 7 0 0114 0" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="7" r="2.5" stroke="#8B5CF6" strokeWidth="1.2" />
        <path d="M21.5 18a5.5 5.5 0 00-4-3" stroke="#8B5CF6" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="5" cy="7" r="2.5" stroke="#8B5CF6" strokeWidth="1.2" />
        <path d="M2.5 18a5.5 5.5 0 014-3" stroke="#8B5CF6" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    value: "50,000+",
    label: "Students",
    color: "text-purple-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M8 21h8M12 17v4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 3h14l-2 8H7L5 3z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 11c0 2.761 2.239 5 5 5s5-2.239 5-5" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M5 3H3v5a3 3 0 003 3M19 3h2v5a3 3 0 01-3 3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: "World",
    label: "Finals",
    color: "text-amber-500",
  },
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
    title: "Improve Problem Solving",
    desc: "Learn how top engineers think.",
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
    title: "Strengthen Your Resume",
    desc: "Recognized by leading technology companies.",
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
    title: "Work as a Team",
    desc: "Compete in teams of three.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#F97316" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#F97316" strokeWidth="1.5" />
        <path d="M12 12v4M10 14h4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    bg: "bg-orange-50",
    title: "Prepare for Placements",
    desc: "Many coding interview skills overlap with ICPC preparation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" stroke="#EC4899" strokeWidth="1.5" />
        <path d="M7 13l-3 7 8-3 8 3-3-7" stroke="#EC4899" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 3v10" stroke="#EC4899" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    bg: "bg-pink-50",
    title: "Win Recognition",
    desc: "Certificates and regional rankings.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M8 21h8M12 17v4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 3h14l-2 8H7L5 3z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 11c0 2.761 2.239 5 5 5s5-2.239 5-5" stroke="#F59E0B" strokeWidth="1.5" />
        <path d="M5 3H3v5a3 3 0 003 3M19 3h2v5a3 3 0 01-3 3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    bg: "bg-yellow-50",
    title: "Qualify for Higher Rounds",
    desc: "Advance toward the Continental Championship.",
  },
];

export default function WhatIsICPC() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 py-14">
      {/* What is ICPC */}
      <div className="max-w-full mx-auto border border-gray-200 rounded-2xl p-8 sm:p-10">
        <div className="text-center ">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What is ICPC?</h2>
          <div className="mx-auto mt-2 w-12 h-0.5 bg-blue-500 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          {/* Left: illustration */}
          <div className="w-full lg:flex-1 flex justify-center">
            <Image
              src="/assets/image2.png"
              alt="Students collaborating on programming"
              width={540}
              height={400}
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-none object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Right: content */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              International Collegiate Programming Contest (ICPC)
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              ICPC is the world&apos;s most prestigious university programming competition.
              Every year, thousands of teams from universities worldwide compete
              through regional contests to reach the World Finals.
            </p>
            <p className="text-sm sm:text-base text-blue-600 font-semibold italic">
              Think of it as the Olympics of Programming.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mt-1">
              {icpcStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 min-w-[110px]">
                  <span className="shrink-0">{stat.icon}</span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <div className="mt-2">
              <Link
                href="/beginner-guide"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
              >
                Learn More About ICPC
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Why participate */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why should you participate?</h2>
          </div>

          <MobileCarousel desktopGrid="grid-cols-3 lg:grid-cols-6 gap-4">
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

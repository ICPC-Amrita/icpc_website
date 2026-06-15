import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5.197-3.76M9 20H4v-2a4 4 0 015.197-3.76M15 7a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 11-6 0 3 3 0 016 0zm-18 0a3 3 0 116 0 3 3 0 01-6 0z" />
      </svg>
    ),
    value: "310+",
    label: "Onsite Slots",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m4-10h2m4 0h2M7 7h2m4 0h2" />
      </svg>
    ),
    value: "4",
    label: "Cities",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    value: "13+",
    label: "Years Running",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <text x="3" y="18" fontSize="15" fontWeight="700" fill="currentColor" stroke="none">₹</text>
      </svg>
    ),
    value: "₹500",
    label: "Per Person",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      {/* Main hero */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-10 sm:pt-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

          {/* Left: text */}
          <div className="w-full lg:flex-1 flex flex-col items-start gap-3">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              Registration Open
            </span>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] leading-[1.1] font-extrabold text-gray-900 tracking-tight">
              The World&apos;s Largest<br />University Programming<br />Competition
            </h1>

            {/* Sub-heading */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 leading-snug">
              ICPC Asia Amritapuri Regional 2026
            </p>

            {/* Description */}
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              Compete with thousands of students across India. Solve real-world coding challenges, earn
              certificates, and qualify for the onsite regional contest.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                id="register-button"
                href="https://icpc.global/login?redirect_uri=/private/teamRegistration/site/40197"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base font-semibold px-6 py-3 rounded-md transition-colors shadow-sm shadow-blue-200 whitespace-nowrap"
              >
                Register Your Team
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/beginner-guide"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 text-base font-medium px-6 py-3 rounded-md border border-gray-200 transition-colors whitespace-nowrap"
              >
                First Time Here?
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <Image
              src="/assets/image1.png"
              alt="Students collaborating on programming competition"
              width={620}
              height={440}
              priority
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-none object-contain select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      {/* <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mt-6">
        <div className="border-t border-gray-100 inline-flex flex-row flex-wrap divide-x divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3.5 py-5 px-7 first:pl-0">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <div className="scale-[1.35]">{stat.icon}</div>
              </div>
              <div className="leading-tight">
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

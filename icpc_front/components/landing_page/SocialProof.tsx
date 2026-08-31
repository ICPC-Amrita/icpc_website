import Link from "next/link";

const highlights = [
  {
    title: "13+ Years",
    label: "Of ICPC at Amritapuri",
    desc: "Hosting regional contests and fostering competitive programming since 2012.",
  },
  {
    title: "5,000+ Teams",
    label: "One ICPC Journey",
    desc: "Students from premier universities across India compete annually.",
  },
  {
    title: "4 Cities",
    label: "Multisite Experience",
    desc: "Onsite regional opportunities across Kollam, Bengaluru, Coimbatore & Mysuru.",
  },
];

export default function SocialProof() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
      <div className="max-w-full mx-auto border border-gray-200 rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-white to-gray-50/50">

        {/* Section 14 — Social Proof */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase px-3.5 py-1 rounded-full border border-blue-100 mb-3">
            Global Programming Community
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            You&apos;re not joining a random coding contest.
            <br className="hidden sm:inline" />
            <span className="text-blue-600"> You&apos;re joining a global programming community.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Every year, students from universities across India and around the world take on ICPC.
            The Amritapuri Regional has hosted teams from some of India&apos;s leading institutions and has been part of the ICPC ecosystem for years.
          </p>
          <div className="mx-auto mt-4 w-12 h-0.5 bg-blue-500 rounded-full" />
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow text-center"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">{h.title}</p>
              <p className="text-sm font-bold text-gray-900 mb-2">{h.label}</p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Social Proof */}
        <div className="text-center py-4 px-6 rounded-xl bg-blue-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base font-bold tracking-wide uppercase">
              Real Teams. Real Contests. Real ICPC Journeys.
            </p>
            <p className="text-xs text-blue-100 mt-0.5">
              Explore hall of fame winners, finalists, and past performance rankings.
            </p>
          </div>
          <Link
            href="/halloffame"
            className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-blue-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Explore Hall of Fame →
          </Link>
        </div>

      </div>
    </section>
  );
}

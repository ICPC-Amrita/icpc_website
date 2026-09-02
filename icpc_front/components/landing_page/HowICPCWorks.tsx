import MobileCarousel from "./MobileCarousel";

const perks = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Compete at Scale",
    desc: "Join one of India's largest ICPC multisite regionals with 350+ onsite slots.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 10v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4" strokeLinecap="round" />
        <path d="M14 2H6a2 2 0 00-2 2v4" strokeLinecap="round" />
        <path d="M12 2v6l2-2 2 2V2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
    title: "Pre-Contest Prep",
    desc: "Access guided preparation sessions before the preliminary round.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 8h10M7 12h6" strokeLinecap="round" />
        <path d="M14 15l1.5 1.5L18 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "Live assistance throughout registration, verification, and contest day.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19a6 6 0 0112 0" strokeLinecap="round" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M20.5 17.5a4.5 4.5 0 00-3.5-2" strokeLinecap="round" />
      </svg>
    ),
    title: "Direct WF Pathway",
    desc: "Regional winners advance directly to the ICPC World Finals stage.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
    title: "Vibrant Community",
    desc: "Network with top coders and mentors across 4 premier campuses.",
  },
];

export default function HowICPCWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white dark:bg-neutral-950 px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black dark:text-white">
            How ICPC Works:{" "}
            <span className="inline-flex items-center gap-1.5 align-middle">
              <span className="relative inline-flex items-center justify-center rounded-md bg-gradient-to-b from-blue-500 to-blue-700 shadow-md ring-1 ring-white/20 ring-offset-2 ring-offset-blue-500 px-2.5 py-0.5 text-4xl font-bold text-white uppercase tracking-wider">
                Roadmap
              </span>
            </span>{" "}
            to the World Finals
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            From team registration to the World Finals stage — here is the official qualification pathway.
          </p>
        </div>

        {/* ROADMAP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* PHASE 1: THE ROAD TO AMRITAPURI REGIONAL (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 shadow-black/5 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-full ring-1 ring-blue-500/20">
                  Stage 1
                </span>
                <span className="text-xs text-neutral-400 font-mono">Steps 1–3</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-black dark:text-white mt-1">
                Regional Qualification
              </h3>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                The three initial steps to reach the onsite contest:
              </p>

              {/* Dotted Branch Tree */}
              <div className="relative mt-7 flex flex-col gap-6 pl-8">
                {/* SVG Dashed Tree Connector */}
                <svg
                  width="28"
                  height="260"
                  className="pointer-events-none absolute top-2 left-0 text-neutral-300 dark:text-neutral-700"
                  fill="none"
                >
                  <path
                    d="M 8 2 Q 8 16 16 16 L 28 16 M 8 16 V 95 Q 8 105 16 105 L 28 105 M 8 105 V 190 Q 8 200 16 200 L 28 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Step 1 */}
                <div className="flex flex-col gap-1">
                  <div className="flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-blue-800 bg-blue-50 ring-1 ring-blue-500/20 dark:text-blue-300 dark:bg-blue-950/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 shrink-0">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    <span>1. Register Your Team</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed pl-1">
                    Register your team of 3 students from any branch with a faculty coach for the <span className="font-semibold text-neutral-900 dark:text-white">ICPC Amritapuri Preliminary Round 2026</span>.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-1">
                  <div className="flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-emerald-800 bg-emerald-50 ring-1 ring-emerald-500/20 dark:text-emerald-300 dark:bg-emerald-950/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 shrink-0">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span>2. Compete in Online Prelims</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed pl-1">
                    Participate in the <span className="font-semibold text-neutral-900 dark:text-white">ICPC India Preliminary Online</span> contest from your college and solve algorithmic challenges.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col gap-1">
                  <div className="flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-purple-800 bg-purple-50 ring-1 ring-purple-500/20 dark:text-purple-300 dark:bg-purple-950/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 shrink-0">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>3. Amritapuri Regional Onsite</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed pl-1">
                    Qualify the preliminary round and compete onsite in the <span className="font-semibold text-neutral-900 dark:text-white">Amritapuri Multi-Site Regional</span> across our 4 campuses.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>Onsite Campuses:</span>
              <span className="font-medium text-neutral-800 dark:text-neutral-200">Kollam · Bengaluru · Coimbatore · Mysuru</span>
            </div>
          </div>

          {/* PHASE 2: ADVANCEMENT TO WORLD FINALS (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 shadow-black/5 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full ring-1 ring-amber-500/20">
                  After the Amritapuri Regional
                </span>
                <span className="text-xs text-neutral-400 font-mono">Stage 2</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-black dark:text-white mt-1">
                Two Routes to the World Finals
              </h3>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Official routes to reach the World Finals from Amritapuri:
              </p>

              {/* Two Branch Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">

                {/* Track A: Direct Winner Route */}
                <div className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 shadow-sm">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                      Direct Qualification
                    </div>

                    <h4 className="font-semibold text-sm text-neutral-900 dark:text-white">
                      Amritapuri Regional Winner
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                      Advances directly to the <span className="font-semibold text-neutral-900 dark:text-white">ICPC World Finals</span>. Further few top performing teams will get chance to compete in ICPC Asia West Championship.
                    </p>
                  </div>
                </div>

                {/* Track B: Asia West Playoff Route */}
                <div className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 shadow-sm">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Asia West Qualification
                    </div>

                    <h4 className="font-semibold text-sm text-neutral-900 dark:text-white">
                      Top-Performing Teams
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                      Compete at the <span className="font-semibold text-neutral-900 dark:text-white">ICPC Asia West Championship</span>, where top performers also advance to the World Finals.
                    </p>
                  </div>
                </div>

              </div>

              {/* PIXEL-PERFECT SVG BRANCH CONNECTOR (Desktop/Tablet) */}
              <div className="hidden md:block w-full h-10 pointer-events-none text-neutral-300 dark:text-neutral-700">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none">
                  {/* Left Drop Line from Center of Card A (25%) */}
                  <path d="M 25 0 V 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
                  {/* Right Drop Line from Center of Card B (75%) */}
                  <path d="M 75 0 V 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
                  {/* Horizontal Bridge Line (from 25% to 75%) */}
                  <path d="M 25 20 H 75" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
                  {/* Center Drop Line to World Finals Card (at 50%) */}
                  <path d="M 50 20 V 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              {/* Mobile Single Drop Line */}
              <div className="md:hidden flex justify-center py-2 text-neutral-300 dark:text-neutral-700">
                <svg width="2" height="24" className="overflow-visible" fill="none">
                  <path d="M 1 0 V 24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                </svg>
              </div>

              {/* CONNECTED DESTINATION CARD: ICPC WORLD FINALS 2027 */}
              <div className="max-w-sm mx-auto w-full">
                <div className="rounded-2xl p-5 bg-neutral-50/90 dark:bg-neutral-800/80 border border-neutral-200/90 dark:border-neutral-700 shadow-sm ring-1 shadow-black/5 ring-black/5 dark:ring-white/10 text-center flex flex-col items-center justify-center hover:shadow-md transition-all">
                  <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                    ICPC World Finals 2027
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    The ultimate global competitive programming stage
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* SECTION: CHOOSING AMRITAPURI / PERKS */}
        <div className="mt-20 pt-12 border-t border-neutral-200/80 dark:border-neutral-800">
          <div className="mb-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black dark:text-white">
              Choosing your ICPC Regional?
            </h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Don&apos;t just choose a contest. Choose the experience across 4 world-class campuses.
            </p>
          </div>

          <MobileCarousel desktopGrid="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col justify-between rounded-xl bg-white p-5 shadow-sm ring-1 shadow-black/5 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10 hover:shadow-md transition-all h-full"
              >
                <div>
                  <div className="size-9 rounded-lg bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center ring-1 ring-black/5 dark:ring-white/10 mb-3">
                    {perk.icon}
                  </div>
                  <h4 className="text-sm font-medium text-black dark:text-white mb-1">{perk.title}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

      </div>
    </section>
  );
}

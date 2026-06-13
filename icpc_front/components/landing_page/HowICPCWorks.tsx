import MobileCarousel from "./MobileCarousel";

const steps = [
  {
    color: "#3B82F6",
    bg: "bg-blue-500",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19a6 6 0 0112 0" strokeLinecap="round" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M20.5 17.5a4.5 4.5 0 00-3.5-2" strokeLinecap="round" />
      </svg>
    ),
    title: "Register Team",
    desc: "Team of 3 students from any branch. Register online.",
  },
  {
    color: "#10B981",
    bg: "bg-emerald-500",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <path d="M7 8h5M7 11h3" strokeLinecap="round" />
        <path d="M15 10l1.5 1.5L19 8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Online Prelims",
    desc: "Solve as many problems as you can from your college.",
  },
  {
    color: "#F97316",
    bg: "bg-orange-500",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
    title: "Regional Contest",
    desc: "Top teams qualify for the onsite contest at one of our 4 cities.",
  },
  {
    color: "#8B5CF6",
    bg: "bg-purple-500",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <path d="M5 3h14l-2 8H7L5 3z" strokeLinejoin="round" />
        <path d="M7 11c0 2.761 2.239 5 5 5s5-2.239 5-5" />
        <path d="M5 3H3v5a3 3 0 003 3M19 3h2v5a3 3 0 01-3 3" strokeLinecap="round" />
      </svg>
    ),
    title: "Continental Championship",
    desc: "Top regional teams compete at the Asia West Continental Championship.",
  },
  {
    color: "#3B82F6",
    bg: "bg-blue-600",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
    title: "World Finals",
    desc: "The best teams in the world compete for the ICPC World Championship!",
  },
];

const perks = [
  {
    color: "#F59E0B",
    bg: "bg-amber-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth={1.6}>
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <path d="M5 3h14l-2 8H7L5 3z" strokeLinejoin="round" />
        <path d="M7 11c0 2.761 2.239 5 5 5s5-2.239 5-5" />
        <path d="M5 3H3v5a3 3 0 003 3M19 3h2v5a3 3 0 01-3 3" strokeLinecap="round" />
      </svg>
    ),
    title: "India's Largest Regional Site",
    desc: "~310 onsite slots across 4 cities. Better odds of qualifying.",
  },
  {
    color: "#10B981",
    bg: "bg-emerald-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth={1.6}>
        <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
    title: "4 Cities",
    desc: "Kochi, Coimbatore and Mysuru. Pick the city closest to you.",
  },
  {
    color: "#3B82F6",
    bg: "bg-blue-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={1.6}>
        <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Telegram Support",
    desc: "Dedicated support channel at every stage of the contest.",
  },
  {
    color: "#8B5CF6",
    bg: "bg-purple-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth={1.6}>
        <path d="M22 10v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4" strokeLinecap="round" />
        <path d="M14 2H6a2 2 0 00-2 2v4" strokeLinecap="round" />
        <path d="M12 2v6l2-2 2 2V2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
    title: "Free Preparation Webinars",
    desc: "Sessions by Algo Zenith & ICPC Finalists to help you prepare.",
  },
  {
    color: "#6366F1",
    bg: "bg-indigo-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth={1.6}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 8h10M7 12h6" strokeLinecap="round" />
        <path d="M14 15l1.5 1.5L18 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Certificates for Every Team",
    desc: "Submit at least one solution and get a participation certificate.",
  },
  {
    color: "#3B82F6",
    bg: "bg-blue-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={1.6}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19a6 6 0 0112 0" strokeLinecap="round" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M20.5 17.5a4.5 4.5 0 00-3.5-2" strokeLinecap="round" />
      </svg>
    ),
    title: "Coach Recognition",
    desc: "Coaches registering 5 or more teams get a special certificate.",
  },
];


export default function HowICPCWorks() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
      <div className="max-w-full mx-auto border border-gray-200 rounded-2xl p-8 sm:p-10">

        {/* How ICPC Works */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How ICPC works</h2>
          <div className="mx-auto mt-2 w-12 h-0.5 bg-blue-500 rounded-full" />
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-2">
          {steps.map((step, i) => (
            <div key={step.title} className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-0 flex-1 relative">
              {/* Arrow between steps (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden sm:flex absolute left-[calc(50%+36px)] top-[28px] w-[calc(100%-72px)] items-center z-10">
                  <div className="flex-1 h-[3.5px] bg-gray-300" />
                  <svg className="w-4 h-4 text-gray-400 shrink-0 -ml-px" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}

              {/* Circle icon */}
              <div
                className={`w-16 h-16 rounded-full ${step.bg} flex items-center justify-center shrink-0 sm:mx-auto`}
              >
                {step.icon}
              </div>

              {/* Text */}
              <div className="sm:text-center sm:mt-4 sm:px-2">
                <p className="text-sm font-bold text-gray-900 leading-snug">{step.title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose Amritapuri */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why choose Amritapuri?</h2>
            <div className="mx-auto mt-2 w-12 h-0.5 bg-blue-500 rounded-full" />
          </div>

          <MobileCarousel desktopGrid="grid-cols-3 lg:grid-cols-6 gap-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${perk.bg} flex items-center justify-center shrink-0`}>
                  {perk.icon}
                </div>
                <p className="text-sm font-bold text-gray-900 leading-snug">{perk.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </MobileCarousel>
        </div>

      </div>
    </section>
  );
}

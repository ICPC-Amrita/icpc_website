import MobileCarousel from "./MobileCarousel";

const steps = [
  {
    step: "01",
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
    title: "Form Your Team",
    desc: "Build an eligible team of three student contestants from your institution and identify your coach according to the official ICPC eligibility rules.",
  },
  {
    step: "02",
    color: "#06B6D4",
    bg: "bg-cyan-500",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Register",
    desc: "Complete your ICPC registration for the Amritapuri preliminary round.",
  },
  {
    step: "03",
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
    title: "Compete Online",
    desc: "Participate in the ICPC India Preliminary Online Round.",
  },
  {
    step: "04",
    color: "#F59E0B",
    bg: "bg-amber-500",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Earn Your Onsite Spot",
    desc: "Teams are evaluated according to the applicable ICPC selection process. Eligible top-performing teams receive onsite invitations.",
  },
  {
    step: "05",
    color: "#F97316",
    bg: "bg-orange-500",
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
    title: "Compete at the Regional",
    desc: "Experience the full ICPC Regional onsite with your team.",
  },
  {
    step: "06",
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
    title: "Aim Higher",
    desc: "Strong performances can lead toward the next stages of the ICPC pathway, including the Asia West Championship and ultimately the World Finals, subject to official qualification rules.",
  },
];

const perks = [
  {
    color: "#3B82F6",
    bg: "bg-blue-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={1.6}>
        <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Compete at Scale",
    desc: "Join one of India's major ICPC regional opportunities.",
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
    title: "Prepare Before You Compete",
    desc: "Access preparation sessions designed to help teams approach the preliminary round with confidence.",
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
    title: "Get Support Throughout the Journey",
    desc: "From registration questions to contest preparation, participants have access to dedicated support channels.",
  },
  {
    color: "#10B981",
    bg: "bg-emerald-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth={1.6}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19a6 6 0 0112 0" strokeLinecap="round" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M20.5 17.5a4.5 4.5 0 00-3.5-2" strokeLinecap="round" />
      </svg>
    ),
    title: "Aim Beyond the Regional",
    desc: "A strong regional performance can open the door to the next stages of the ICPC journey.",
  },
  {
    color: "#EC4899",
    bg: "bg-pink-50",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
    title: "Experience ICPC",
    desc: "Meet strong programmers, compete under real contest conditions, work as a team and become part of the ICPC community.",
  },
];


export default function HowICPCWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
      <div className="max-w-full mx-auto border border-gray-200 rounded-2xl p-8 sm:p-10">

        {/* How ICPC Works */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How ICPC works</h2>
          <div className="mx-auto mt-2 w-12 h-0.5 bg-blue-500 rounded-full" />
          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">From your first registration to the Regional</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Choosing your ICPC Regional?</h2>
            <div className="mx-auto mt-2 w-12 h-0.5 bg-blue-500 rounded-full" />
            <p className="mt-3 text-base font-semibold text-blue-600">Don&apos;t just choose a contest. Choose the experience.</p>
            <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">Amritapuri brings the ICPC Regional experience to four locations, giving teams more options for where they experience the onsite contest. But location is only one part of the decision.</p>
          </div>

          <MobileCarousel desktopGrid="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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

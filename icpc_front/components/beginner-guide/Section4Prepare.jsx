const resources = [
  {
    title: "Beginner Roadmap",
    desc: "A step-by-step plan to guide you from basics to contest readiness.",
    bg: "bg-green-100",
    iconColor: "text-green-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Free Training Sessions",
    desc: "Learn from experienced competitive programmers and past finalists.",
    bg: "bg-blue-100",
    iconColor: "text-blue-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Live Webinars",
    desc: "Preparation sessions before the contest to boost your confidence.",
    bg: "bg-purple-100",
    iconColor: "text-purple-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Telegram Community",
    desc: "Ask doubts, find teammates and get real-time support.",
    bg: "bg-sky-100",
    iconColor: "text-sky-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Practice Resources",
    desc: "Curated problems, editorials and study materials.",
    bg: "bg-orange-100",
    iconColor: "text-orange-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Contest Strategy Workshops",
    desc: "Understand how to approach, plan and solve in contests.",
    bg: "bg-red-100",
    iconColor: "text-red-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Section4Prepare() {
  return (
    <section className="w-screen px-8 sm:px-14 md:px-20 lg:px-28 xl:px-32 py-14 md:py-20">
      <div className="border border-yellow-200 bg-yellow-50/50 rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
          4
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          We Don&apos;t Just Run a Contest. We Help You Prepare.
        </h2>
      </div>
      <p className="text-gray-500 text-sm mb-10 ml-12">
        When you register, you get access to exclusive resources and support.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {resources.map((r) => (
          <div key={r.title} className="bg-white rounded-2xl p-4 flex flex-col items-start gap-3 shadow-sm border border-gray-100">
            <div className={`w-14 h-14 rounded-xl ${r.bg} flex items-center justify-center ${r.iconColor}`}>
              {r.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-snug mb-1">{r.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom banner */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4 flex items-start gap-3">
        <span className="text-yellow-500 text-lg flex-shrink-0 mt-0.5">★</span>
        <p className="text-gray-700 text-sm leading-relaxed">
          You don&apos;t need to figure everything out yourself.{" "}
          <span className="text-blue-600 font-medium">
            We&apos;ve already built the path
          </span>{" "}
          — you just have to take the first step.
        </p>
      </div>
      </div>
    </section>
  );
}

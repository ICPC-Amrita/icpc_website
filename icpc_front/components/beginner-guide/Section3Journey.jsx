const milestones = [
  {
    label: "First Contest",
    sub: "Nervous but excited",
    bg: "bg-blue-100",
    icon: (
      <svg className="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "First Accepted Solution",
    sub: "The best feeling!",
    bg: "bg-green-100",
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 11l3 3 5-5" />
      </svg>
    ),
  },
  {
    label: "First Regional",
    sub: "A big achievement",
    bg: "bg-indigo-100",
    icon: (
      <svg className="w-7 h-7 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    label: "First Internship",
    sub: "Opportunities start opening",
    bg: "bg-yellow-100",
    icon: (
      <svg className="w-7 h-7 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "World Finals",
    sub: "The dream is within reach!",
    bg: "bg-orange-100",
    icon: (
      <svg className="w-7 h-7 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M5 3h14l-1.5 8A5 5 0 017.5 11 5 5 0 015 3z" />
      </svg>
    ),
  },
];

export default function Section3Journey() {
  return (
    <section className="w-screen bg-white px-8 sm:px-14 md:px-20 lg:px-28 xl:px-32 py-14 md:py-20">
      <div className="border border-blue-200  rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
          3
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Every Expert Started as a Beginner
        </h2>
      </div>

      {/* Timeline */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-0">
        {milestones.map((m, i) => (
          <div key={i} className="flex sm:flex-col items-center sm:items-center flex-1 w-full sm:w-auto relative">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-full ${m.bg} flex items-center justify-center flex-shrink-0 relative z-10`}>
              {m.icon}
            </div>

            {/* Dashed line to next — desktop horizontal */}
            {i < milestones.length - 1 && (
              <div className="hidden sm:block absolute top-8 left-1/2 w-full h-px" style={{ zIndex: 0 }}>
                <svg width="100%" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="32" y1="5" x2="100" y2="5" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5 3"/>
                  <polygon points="96,2 100,5 96,8" fill="#9CA3AF"/>
                </svg>
              </div>
            )}

            {/* Dashed line — mobile vertical */}
            {i < milestones.length - 1 && (
              <div className="sm:hidden flex flex-col items-center my-1">
                <svg width="10" height="28" viewBox="0 0 10 28">
                  <line x1="5" y1="0" x2="5" y2="22" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <polygon points="2,18 5,22 8,18" fill="#9CA3AF"/>
                </svg>
              </div>
            )}

            {/* Label below icon */}
            <div className="sm:mt-3 ml-4 sm:ml-0 text-left sm:text-center">
              <p className="font-semibold text-gray-900 text-sm leading-snug">{m.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{m.sub}</p>
            </div>
          </div>
        ))}

        {/* Final "Your journey" card */}
        <div className="flex-shrink-0 sm:ml-3 w-full sm:w-40">
          <div className="border-2 border-dashed border-purple-300 rounded-xl p-4 bg-purple-50 text-center">
            <p className="text-gray-700 text-sm font-medium leading-snug mb-2">
              Your journey can look exactly like this.
            </p>
            <span className="text-pink-400 text-lg">♡</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

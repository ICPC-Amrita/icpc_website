import Link from "next/link";

const dates = [
  {
    title: "Registration Opens",
    date: "15 June 2026",
    status: "Upcoming",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Registration Closes",
    date: "25 September 2026",
    status: "Deadline",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    icon: (
      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Preliminary Round",
    date: "3 October 2026",
    status: "Online Contest",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Regional Onsite",
    date: "TBA",
    status: "4 Multisite Locations",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Asia West Championship",
    date: "TBA",
    status: "Continental",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "ICPC World Finals",
    date: "TBA",
    status: "Global Final",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    icon: (
      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const journeyStages = [
  {
    stage: "STAGE 01",
    title: "Amritapuri Regional",
    description: "Multisite contest across Kollam, Bengaluru, Coimbatore, and Mysuru.",
    badge: "Regional Onsite",
    color: "border-blue-200 bg-blue-50/40 hover:border-blue-400",
    badgeStyle: "bg-blue-100/80 text-blue-800 border-blue-200",
    textColor: "text-blue-600",
  },
  {
    stage: "STAGE 02",
    title: "Asia West Championship",
    description: "Top qualifying teams compete against the best across South & West Asia.",
    badge: "Continental",
    color: "border-purple-200 bg-purple-50/40 hover:border-purple-400",
    badgeStyle: "bg-purple-100/80 text-purple-800 border-purple-200",
    textColor: "text-purple-600",
  },
  {
    stage: "STAGE 03",
    title: "ICPC World Finals",
    description: "The global championship where premier university teams compete for the world title.",
    badge: "World Stage",
    color: "border-amber-200 bg-amber-50/40 hover:border-amber-400",
    badgeStyle: "bg-amber-100/80 text-amber-800 border-amber-200",
    textColor: "text-amber-600",
  },
];

const communityHighlights = [
  {
    title: "13+ Years",
    label: "Of ICPC at Amritapuri",
    desc: "Hosting regional contests and fostering competitive programming since 2012.",
  },

];

export default function ImportantDates() {
  return (
    <section id="important-dates" className="w-full bg-white px-4 sm:px-8 lg:px-14 xl:px-20 pb-14">
      <div className="max-w-full mx-auto space-y-12">

        {/* ============================================================ */}
        {/* SECTION 12 — IMPORTANT DATES                                  */}
        {/* ============================================================ */}
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-10 bg-white shadow-sm">
          <div className="text-center mb-8 sm:mb-10">
            {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full  text-xs font-semibold uppercase tracking-wider mb-2.5">
              Roadmap to Regional & World Finals
            </div> */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Important Dates
            </h2>
            <p className="mt-2 text-sm sm:text-base font-semibold text-blue-600">
              Your road to ICPC Amritapuri 2026
            </p>
            <div className="mx-auto mt-3 w-12 h-0.5 bg-blue-500 rounded-full" />
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-4">
            {dates.map((d) => (
              <div
                key={d.title}
                className="p-4 sm:p-5 border border-gray-100 bg-gray-50/50 flex items-start gap-3.5"
              >
                <div className="p-2.5 sm:p-3 shrink-0 ">
                  {d.icon}
                </div>
                <div className="flex-1 min-w-0">
                  {/* <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border ${d.badgeColor}`}>
                      {d.status}
                    </span>
                  </div> */}
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{d.title}</p>
                  <p className="text-sm sm:text-base font-extrabold text-gray-900 mt-0.5">{d.date}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-gray-400 italic pt-2">
            * Dates and qualification details are subject to official ICPC announcements.
          </p>
        </div>


        {/* ============================================================ */}
        {/* SECTION 13 — THE BIGGER JOURNEY                               */}
        {/* ============================================================ */}
        {/* <div className="border border-gray-200 rounded-2xl p-6 sm:p-10 bg-white shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Where can ICPC take you?
            </h2>
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-500 max-w-xl mx-auto">
              Your regional contest is not the end of the journey.
            </p>
            <div className="mx-auto mt-3 w-12 h-0.5 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {journeyStages.map((stage, i) => (
              <div
                key={stage.title}
                className={`rounded-xl border p-5 sm:p-6 flex flex-col justify-between ${stage.color} transition-all relative`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black tracking-wider ${stage.textColor}`}>
                      {stage.stage}
                    </span>
               
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {i < journeyStages.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-gray-300 shadow-sm items-center justify-center text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 p-6 sm:p-10 text-center text-white shadow-md">
            <div className="max-w-2xl mx-auto space-y-2 text-sm sm:text-base text-gray-200">
              <p className="text-blue-200/90 font-medium">At every stage, the field gets stronger.</p>
              <p className="text-blue-200/90 font-medium">The problems get harder.</p>
              <p className="text-blue-200/90 font-medium">The pressure gets higher.</p>
              <p className="text-base sm:text-lg font-bold text-white pt-1">
                And the opportunity gets bigger.
              </p>
              <p className="text-yellow-400 font-extrabold text-base sm:text-xl pt-2">
                Could your team be the next one to make the journey?
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href="https://icpc.global/login?redirect_uri=/private/teamRegistration/site/40197"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-gray-900 font-bold px-7 py-3 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-yellow-400/20"
              >
                Start Your ICPC Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div> */}


        {/* ============================================================ */}
        {/* SECTION 14 — GLOBAL PROGRAMMING COMMUNITY (SOCIAL PROOF)      */}
        {/* ============================================================ */}
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-10 bg-gradient-to-b from-white to-gray-50/50 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            {/* <span className="inline-flex items-center gap-1.5 font-bold tracking-widest uppercase  text-2xl px-3.5 py-1 underline mb-3">
              Global Programming Community
              
            </span> */}
           
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              You&apos;re not joining a random coding contest.
              <br />
              <span className="text-blue-600">You&apos;re joining a global programming community.</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-gray-600 leading-relaxed">
              Every year, students from universities across India and around the world take on ICPC.
              The Amritapuri Regional has hosted teams from some of India&apos;s leading institutions and has been part of the ICPC ecosystem for years.
            </p>
            <div className="mx-auto mt-4 w-12 h-0.5 bg-blue-500 rounded-full" />
          </div>

          {/* 2-Column Grid: 13+ Years Card on Left, Real Teams Banner on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {/* Left: 13+ Years Card */}
            <div className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow text-center flex flex-col justify-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">13+ Years</p>
              <p className="text-sm font-bold text-gray-900 mb-1.5">Of ICPC at Amritapuri</p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Hosting regional contests and fostering competitive programming since 2012.
              </p>
            </div>

            {/* Right: Real Teams. Real Contests. Real ICPC Journeys. Card */}
            <div className="p-6 rounded-xl bg-blue-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg font-bold tracking-wide uppercase">
                  Real Teams. Real Contests. Real ICPC Journeys.
                </p>
                <p className="text-xs sm:text-sm text-blue-100 mt-1">
                  Explore hall of fame winners, finalists, and past performance rankings.
                </p>
              </div>
        
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

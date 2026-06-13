const stats = [
  {
    value: "310+",
    label: "Onsite Slots",
    sub: "One of India's largest onsite capacity",
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: "4",
    label: "Cities",
    sub: "Kollam, Bengaluru, Coimbatore, Mysuru",
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: "13+",
    label: "Years",
    sub: "Of experience in hosting regionals",
    icon: (
      <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: "Free",
    label: "Preparation Sessions",
    sub: "Webinars, training & workshops",
    icon: (
      <svg className="w-7 h-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    value: "Certificates",
    label: "For All Participants",
    sub: "Recognizing your effort and learning",
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    value: "Dedicated",
    label: "Support Team",
    sub: "Here for you at every step",
    icon: (
      <svg className="w-7 h-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const whatIfPoints = [
  "Real contest experience that stays with you forever",
  "New friends and a strong network",
  "Participation certificate",
  "Stronger profile for internships & placements",
  "Better coding and problem solving skills",
  "The motivation to come back stronger",
];

export default function Section5WhyAndWhatIf() {
  return (
    <section className="w-screen bg-white px-8 sm:px-14 md:px-20 lg:px-28 xl:px-32 py-14 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left box: Why Thousands Choose */}
        <div className="flex-1 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
              5
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
              Why Thousands Choose<br />ICPC Amritapuri
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <div className="mb-1">{s.icon}</div>
                <p className="font-extrabold text-gray-900 text-xl leading-none">{s.value}</p>
                <p className="font-semibold text-gray-800 text-sm leading-snug">{s.label}</p>
                <p className="text-gray-500 text-xs leading-snug">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right box: What If I Don't Qualify */}
        <div className="flex-1 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
              6
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              What If I Don&apos;t Qualify?
            </h2>
          </div>
          <p className="text-gray-500 text-sm mb-5 ml-12">
            You still gain much more than you imagine.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
            {whatIfPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 text-sm leading-snug">{point}</span>
              </div>
            ))}
          </div>

          {/* Bottom motivational card */}
          <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4 text-center">
            <p className="text-gray-800 text-sm font-semibold leading-snug">
              Your first ICPC is not about winning.<br />
              <span className="text-gray-700 font-normal">It&apos;s about starting.</span>
            </p>
            <span className="text-purple-500 text-lg mt-1 inline-block">♥</span>
          </div>
        </div>

      </div>
    </section>
  );
}

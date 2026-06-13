export default function Section1ReadyCheck() {
  const checks = [
    "You know loops and basic programming",
    "You understand arrays / strings",
    "You can write programs in C / C++ / Java / Python",
    "You enjoy solving problems",
    "You want to learn and improve",
  ];

  return (
    <section className="w-screen px-8 sm:px-14 md:px-20 lg:px-28 xl:px-32 py-14 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-6 border border-green-200 rounded-2xl bg-green-50 px-8 py-8">

        {/* Left — number badge + title + subtitle */}
        <div className="flex-shrink-0 lg:w-64">
          <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-base mb-4">
            1
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-snug mb-2">
            <span className="block whitespace-nowrap">You&apos;re More Ready</span>
            <span className="block whitespace-nowrap">Than You Think</span>
          </h2>
          <p className="text-gray-500 text-sm">
            If you can do these, you&apos;re ready for your first ICPC.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px self-stretch bg-green-200 mx-2" />

        {/* Middle — checklist */}
        <ul className="flex-1 space-y-3">
          {checks.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-700 text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* Arrow */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 28 Q50 2 92 18" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 3"/>
            <polygon points="88,12 98,18 88,24" fill="#9CA3AF"/>
          </svg>
        </div>

        {/* Right card */}
        <div className="flex-shrink-0 w-full lg:w-48 bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex items-start gap-3">
          {/* Star */}
          <svg className="w-7 h-7 flex-shrink-0 mt-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
          </svg>
          {/* Text */}
          <div>
            <p className="text-gray-500 text-xs leading-snug mb-1">
              If you checked even 3 of these boxes,
            </p>
            <p className="text-green-600 text-lg font-extrabold leading-tight">
              you&apos;re ready
            </p>
            <p className="text-gray-800 text-sm font-semibold leading-snug">
              for your first ICPC!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

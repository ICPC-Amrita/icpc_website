import Image from "next/image";
import Link from "next/link";

const topics = ["Arrays", "Sorting", "Loops", "Functions", "Basic DS"];

export default function BeginnersSection() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#f6f8fc] mt-10">
      {/* Desktop layout */}
      <div className="hidden sm:flex flex-row items-stretch min-h-[200px]">
        {/* Left: text content */}
        <div className="flex flex-col justify-center gap-3 px-8 py-8 w-[52%] shrink-0 z-10">
          <p className="text-base font-bold text-gray-900">Can beginners participate?</p>
          <p className="text-3xl font-extrabold text-blue-600 leading-none">Absolutely.</p>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-gray-500">You don&apos;t need to be a Codeforces expert.</p>
            <p className="text-sm text-gray-500">If you&apos;ve learned:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="text-xs text-gray-600 border border-gray-300 bg-white rounded-full px-3 py-1 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <span>⭐</span> Most participants are first-timers.
          </p>
          <div>
            <Link
              href="/beginner-guide"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors shadow-sm shadow-blue-200"
            >
              Read Beginner Guide
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: desktop image */}
        <div className="flex-1 relative">
          <Image
            src="/assets/image3.png"
            alt="Beginner student giving thumbs up"
            fill
            className="object-cover object-left"
            draggable={false}
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden">
        {/* Mobile image */}
        <div className="w-full relative" style={{ aspectRatio: "1535/1024" }}>
          <Image
            src="/assets/image3.1.png"
            alt="Beginner student giving thumbs up"
            fill
            className="object-cover object-top"
            draggable={false}
          />
        </div>
        {/* Mobile text */}
        <div className="flex flex-col gap-3 px-6 py-6">
          <p className="text-base font-bold text-gray-900">Can beginners participate?</p>
          <p className="text-3xl font-extrabold text-blue-600 leading-none">Absolutely.</p>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-gray-500">You don&apos;t need to be a Codeforces expert.</p>
            <p className="text-sm text-gray-500">If you&apos;ve learned:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="text-xs text-gray-600 border border-gray-300 bg-white rounded-full px-3 py-1 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <span>⭐</span> Most participants are first-timers.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors shadow-sm shadow-blue-200 self-start"
          >
            Read Beginner Guide
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

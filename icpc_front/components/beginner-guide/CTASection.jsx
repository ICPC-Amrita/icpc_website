import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-screen px-8 sm:px-14 md:px-20 lg:px-28 xl:px-32 py-10 md:py-14">
      <div className="relative rounded-2xl overflow-hidden">

        {/* Mobile image (square, shown below sm) */}
        <Image
          src="/assets/beginner/image2.2.png"
          alt="ICPC team celebrating"
          width={1254}
          height={1254}
          className="block sm:hidden w-full h-auto"
          priority
        />

        {/* Desktop image (landscape, hidden below sm) */}
        <Image
          src="/assets/beginner/image2.png"
          alt="ICPC team celebrating"
          width={2100}
          height={749}
          className="hidden sm:block w-full h-auto"
          priority
        />

        {/* Text overlay — bottom-center on mobile, right-center on desktop */}
        <div className="absolute inset-0 flex sm:items-center sm:justify-start items-end justify-center
                        pb-6 sm:pb-0"
             style={{ paddingLeft: "0" }}>

          {/* Mobile layout: centered at bottom */}
          <div className="flex sm:hidden flex-col items-center gap-3 px-4 text-center">
            <p className="text-white text-base font-bold leading-snug drop-shadow">
              Every ICPC World Finalist once participated in their first contest.
              <br />
              <span className="text-[#f5c518] italic underline underline-offset-4 decoration-[#f5c518]">
                This could be yours.
              </span>
            </p>
            <div className="flex flex-col gap-2 w-full">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-[#1a2faa] text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Register Your Team <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/beginner-guide#prepare"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-white/70 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Preparation Resources
              </Link>
            </div>
          </div>

          {/* Desktop layout: right of illustration */}
          <div className="hidden sm:flex flex-col items-start gap-4 max-w-sm pr-4"
               style={{ marginLeft: "52%" }}>
            <p className="text-white text-base md:text-xl lg:text-2xl font-bold leading-snug">
              Every ICPC World Finalist once participated in their first contest.
              <br />
              <span className="text-[#f5c518] italic underline underline-offset-4 decoration-[#f5c518]">
                This could be yours.
              </span>
            </p>
            <div className="flex flex-col gap-2 w-full">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-[#1a2faa] text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Register Your Team <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/beginner-guide#prepare"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-white/70 text-white text-sm font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Explore Preparation Resources
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

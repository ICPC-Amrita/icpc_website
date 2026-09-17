import Image from "next/image";
import Link from "next/link";
import { contestInfo } from "@/app/_constants/contestInfo";

export default function CTABanner() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
      <div className="relative rounded-2xl overflow-hidden min-h-45 flex items-center">
        {/* Mobile background */}
        <Image
          src="/assets/mobile_bottom_banner.png"
          alt=""
          fill
          className="object-cover object-right sm:hidden"
          aria-hidden
        />
        {/* Desktop background */}
        <Image
          src="/assets/bottom banner.png"
          alt=""
          fill
          className="object-cover object-right hidden sm:block"
          aria-hidden
        />
        <div className="relative z-10 px-8 sm:px-12 py-10 max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            Start your ICPC journey.
          </h2>
          <p className="text-base text-blue-100 mt-3 leading-relaxed">
            You don&apos;t need to know if you can win — you just need to decide if you&apos;re
            ready to try.
          </p>
          <p className="text-sm sm:text-base text-blue-200 mt-2 font-medium">
            {contestInfo.registrationFee} per team &nbsp;·&nbsp; Registration closes {contestInfo.dates[1].date}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              id="register-button"
              href={contestInfo.registrationUrl}
              className="inline-flex items-center bg-brass hover:bg-brass-light text-white font-semibold px-6 py-3 rounded-lg text-base transition-colors shadow-sm"
            >
              Register your team
            </Link>
            <Link
              href="/beginner-guide"
              className="inline-flex items-center border border-white text-white font-semibold px-6 py-3 rounded-lg text-base hover:bg-white/10 transition-colors"
            >
              New to ICPC? Start here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

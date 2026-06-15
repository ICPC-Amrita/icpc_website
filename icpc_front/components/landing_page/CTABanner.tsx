import Image from "next/image";
import Link from "next/link";

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
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Ready to take your first step?
          </h2>
          <p className="text-sm text-blue-200 mt-2">
            ₹1500 per team &nbsp;·&nbsp; Registration closes October 2026
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              id="register-button"
              href="https://icpc.global/login?redirect_uri=/private/teamRegistration/site/40197"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Register Your Team &rarr;
            </Link>
            <Link
              href="/beginner-guide"
              className="inline-flex items-center border border-white text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              Read the Guide First &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

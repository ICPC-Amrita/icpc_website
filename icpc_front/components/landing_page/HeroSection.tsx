import Image from "next/image";
import Link from "next/link";
import TeamRegistrationModal from '../modal/TeamRegistrationModal';

const heroImages = [
  // Column 1 (Offset down)
  {
    src: "/assets/hero/arena.jpg",
    alt: "ICPC Regional Onsite Contest Arena",
    col: 1,
    aspect: "aspect-[3/4]",
  },
  // Column 2 (Top + Bottom)
  {
    src: "/assets/hero/Team photo .jpg",
    alt: "Contestants and Teams from Across India",
    col: 2,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/assets/hero/first.jpg",
    alt: "ICPC Champions Celebration",
    col: 2,
    aspect: "aspect-[4/3]",
  },
  // Column 3 (Slightly offset Top + Bottom)
  {
    src: "/assets/hero/Women only team .jpg",
    alt: "ICPC Women in Tech Teams",
    col: 3,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/assets/hero/second.jpg",
    alt: "ICPC Regional Runner-Up Teams",
    col: 3,
    aspect: "aspect-[4/3]",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <TeamRegistrationModal />
      
      {/* Main hero container */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          {/* Left Column: Typography & CTAs (5 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
            
            {/* Supertitle / Eyebrow */}
            <p className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase">
              THE WORLD&apos;S PREMIER UNIVERSITY PROGRAMMING COMPETITION
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.08] text-gray-950 tracking-tight">
              Your ICPC Journey<br className="hidden sm:inline" /> Starts Here.
            </h1>

            {/* Sub-heading */}
            <p className="text-xl sm:text-2xl font-bold text-blue-600 leading-snug">
              ICPC Asia Amritapuri Regional 2026
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed max-w-xl">
              Bring your best three-person team. Compete against talented programmers from across India.
              Prove your problem-solving skills, experience the intensity of an ICPC Regional, and compete
              for the opportunity to advance further in the ICPC journey.
            </p>

            {/* Tagline & Locations */}
            <div className="space-y-1 pt-1">
              <p className="text-base font-semibold text-gray-800">
                One Regional. Four Locations. Hundreds of Onsite Opportunities.
              </p>
              <p className="text-sm sm:text-base text-gray-500 font-medium">
                Kollam · Bengaluru · Coimbatore · Mysuru
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                id="register-button"
                href="https://icpc.global/login?redirect_uri=/private/teamRegistration/site/40197"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base font-semibold px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap"
              >
                Register Your Team
              </Link>
              <Link
                href="/beginner-guide"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 text-base font-medium px-5 py-3 rounded-lg border border-gray-300 transition-all whitespace-nowrap"
              >
                NEW TO ICPC? START HERE
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>

            {/* Price & Date note */}
            <p className="text-xs sm:text-sm text-gray-500 font-medium pt-0.5">
              ₹1,500 per team · Preliminary Round: 3 October 2026
            </p>

          </div>

          {/* Right Column: Staggered Multi-Column Image Collage (7 cols on lg/xl) */}
          <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 items-start w-full">
            
            {/* Column 1: Starts lower down (Offset) */}
            <div className="flex flex-col pt-8 sm:pt-14 lg:pt-20">
              <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Column 2: Starts at the top with 2 stacked images */}
            <div className="flex flex-col gap-3.5 sm:gap-4 pt-0">
              <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Column 3: Starts slightly offset with 2 stacked images (hidden on smallest mobile, shown sm+) */}
            <div className="hidden sm:flex flex-col gap-3.5 sm:gap-4 pt-4 sm:pt-8 lg:pt-10">
              <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-gray-200/70 border border-gray-100/80 bg-gray-100 group">
                <Image
                  src={heroImages[4].src}
                  alt={heroImages[4].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

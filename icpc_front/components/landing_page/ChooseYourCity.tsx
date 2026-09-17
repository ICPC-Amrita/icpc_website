import Image from "next/image";
import Link from "next/link";
import MobileCarousel from "./MobileCarousel";
import ExpandableCard from "./ExpandableCard";
import { contestInfo } from "@/app/_constants/contestInfo";

const perks = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Compete at scale",
    desc: `${contestInfo.onsiteSlots} onsite slots — one of India's largest ICPC regionals.`,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 8h10M7 12h6" strokeLinecap="round" />
        <path d="M14 15l1.5 1.5L18 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dedicated support",
    desc: "Live help through registration, verification, and contest day.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19a6 6 0 0112 0" strokeLinecap="round" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M20.5 17.5a4.5 4.5 0 00-3.5-2" strokeLinecap="round" />
      </svg>
    ),
    title: "Direct WF pathway",
    desc: "Regional winners advance straight to the World Finals.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
      </svg>
    ),
    title: "Vibrant community",
    desc: `Network with coders and mentors across ${contestInfo.hostCitiesCount} campuses.`,
  },
];

const cities = [
  {
    name: "Kollam",
    image: "/assets/kollam.png",
    campus: "Amritapuri campus,",
    state: "Kerala",
    tag: "The home of the Amritapuri Regional.",
    href: "/reach-us/amritapuri",
  },
  {
    name: "Bengaluru",
    image: "/assets/bengaluru.png",
    campus: "Amrita campus,",
    state: "Karnataka",
    tag: "Compete in India's technology hub.",
    href: "/reach-us/bengaluru",
  },
  {
    name: "Coimbatore",
    image: "/assets/coimbatore.png",
    campus: "Amrita campus,",
    state: "Tamil Nadu",
    tag: "A major education and technology destination.",
    href: "/reach-us/coimbatore",
  },
  {
    name: "Mysuru",
    image: "/assets/mysore.png",
    campus: "Amrita campus,",
    state: "Karnataka",
    tag: "Another chance to experience the Amritapuri Regional onsite.",
    href: "/reach-us/mysuru",
  },
];

export default function ChooseYourCity() {
  return (
    <section className="w-full bg-paper px-6 sm:px-10 lg:px-16 xl:px-20 py-14">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">
            Choosing your ICPC regional?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just choose a contest. Choose the experience.
          </p>
        </div>

        <MobileCarousel desktopGrid="grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk) => (
            <ExpandableCard key={perk.title} icon={perk.icon} title={perk.title} desc={perk.desc} />
          ))}
        </MobileCarousel>

        <div className="mt-14 pt-14 border-t border-hairline">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink">One regional. Four locations.</h3>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose the location that works best for your team. The contest experience and
              competitive standards remain the same everywhere.
            </p>
          </div>

          <MobileCarousel desktopGrid="grid-cols-2 lg:grid-cols-4 gap-4" cardWidth="w-[80%]">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="group rounded-xl border border-hairline bg-white overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <p className="text-lg font-bold mb-1 text-ink">
                    {city.name}
                  </p>
                  <p className="text-sm text-gray-600">{city.campus}</p>
                  <p className="text-sm text-gray-600">{city.state}</p>
                  <p className="text-sm mt-1 text-gray-500">
                    {city.tag}
                  </p>
                  <p className="mt-auto pt-3 text-sm font-semibold text-contest-blue group-hover:text-contest-blue-dark transition-colors">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </MobileCarousel>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import MobileCarousel from "./MobileCarousel";

const cities = [
  {
    name: "Kollam",
    color: "#F97316",
    image: "/assets/kollam.png",
    campus: "Amritapuri campus,",
    state: "Kerala",
    tag: "The home of the Amritapuri Regional.",
    tagColor: null,
    href: "/reach-us/amritapuri",
  },
  {
    name: "Bengaluru",
    color: "#3B82F6",
    image: "/assets/bengaluru.png",
    campus: "Amrita campus,",
    state: "Karnataka",
    tag: "Compete in India's technology hub.",
    tagColor: null,
    href: "/reach-us/bengaluru",
  },
  {
    name: "Coimbatore",
    color: "#8B5CF6",
    image: "/assets/coimbatore.png",
    campus: "Amrita campus,",
    state: "Tamil Nadu",
    tag: "A major education and technology destination.",
    tagColor: null,
    href: "/reach-us/coimbatore",
  },
  {
    name: "Mysuru",
    color: "#10B981",
    image: "/assets/mysore.png",
    campus: "Amrita campus,",
    state: "Karnataka",
    tag: "Another opportunity to experience the Amritapuri Regional onsite.",
    tagColor: "#10B981",
    href: "/reach-us/mysuru",
  },
];

export default function ChooseYourCity() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
      <div className="max-w-full mx-auto border border-gray-200 rounded-2xl p-8 sm:p-10">

        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">One Regional. Four Locations.</h2>
          <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Choose the location that works best for your team. The contest experience and competitive standards remain the same. Your team gets to experience the ICPC Regional at one of the announced Amritapuri multisite locations.
          </p>
          <div className="mx-auto mt-3 w-12 h-0.5 bg-blue-500 rounded-full" />
        </div>

        <MobileCarousel desktopGrid="grid-cols-2 lg:grid-cols-4 gap-4" cardWidth="w-[80%]">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer"
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
                <p className="text-base font-bold mb-1" style={{ color: city.color }}>
                  {city.name}
                </p>
                <p className="text-xs text-gray-600">{city.campus}</p>
                <p className="text-xs text-gray-600">{city.state}</p>
                <p
                  className="text-xs mt-1"
                  style={{ color: city.tagColor ?? "#6B7280" }}
                >
                  {city.tag}
                </p>
                <p
                  className="mt-auto pt-3 text-sm font-semibold group-hover:opacity-80 transition-opacity duration-300"
                  style={{ color: city.color }}
                >
                  Learn More →
                </p>
              </div>
            </Link>
          ))}
        </MobileCarousel>

        {/* <div className="mt-8 text-center pt-2">
          <p className="text-sm font-semibold text-gray-700">Four locations. One ICPC Regional experience.</p>
          <div className="mt-3">
            <Link
              href="/reach-us"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
            >
              EXPLORE THE CENTRES
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div> */}

      </div>
    </section>
  );
}

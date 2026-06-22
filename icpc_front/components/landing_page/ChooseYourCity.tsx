import Image from "next/image";
import MobileCarousel from "./MobileCarousel";

const cities = [
  {
    name: "Kollam",
    color: "#F97316",
    image: "/assets/kollam.png",
    campus: "Amritapuri campus,",
    state: "Kerala",
    tag: "Backwaters setting",
    tagColor: null,
  },
  {
    name: "Bengaluru",
    color: "#3B82F6",
    image: "/assets/bengaluru.png",
    campus: "Amrita campus,",
    state: "Karnataka",
    tag: "Tech hub of India",
    tagColor: null,
  },
  {
    name: "Coimbatore",
    color: "#8B5CF6",
    image: "/assets/coimbatore.png",
    campus: "Amrita campus,",
    state: "Tamil Nadu",
    tag: "Scenic hills",
    tagColor: null,
  },
  {
    name: "Mysuru",
    color: "#10B981",
    image: "/assets/mysore.png",
    campus: "Amrita campus,",
    state: "Karnataka",
    tag: "New in 2025",
    tagColor: "#10B981",
  },
];

export default function ChooseYourCity() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
      <div className="max-w-full mx-auto border border-gray-200 rounded-2xl p-8 sm:p-10">

        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Choose your city</h2>
          <p className="mt-2 text-sm text-gray-500">
            Same contest. Same problems. Same qualifying standards — just a different city.
          </p>
        </div>

        <MobileCarousel desktopGrid="grid-cols-2 lg:grid-cols-4 gap-4" cardWidth="w-[80%]">
          {cities.map((city) => (
            <div
              key={city.name}
              className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
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

                <div className="mt-auto pt-3 flex justify-end">
                  {/* <button
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                    aria-label={`Go to ${city.name}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </MobileCarousel>

      </div>
    </section>
  );
}

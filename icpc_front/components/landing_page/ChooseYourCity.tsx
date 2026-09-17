import Image from "next/image";
import Link from "next/link";
import MobileCarousel from "./MobileCarousel";

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
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 pb-14">
      <div className="max-w-full mx-auto border border-hairline rounded-2xl p-8 sm:p-10">

        <div className="text-center mb-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink">One regional. Four locations.</h2>
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
              className="group rounded-xl border border-hairline overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer"
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
    </section>
  );
}

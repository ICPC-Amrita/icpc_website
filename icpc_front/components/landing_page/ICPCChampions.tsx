import Image from "next/image";

const champions = [
  {
    year: "2025–26",
    team: "Div4Maexer",
    college: "IIT Kharagpur",
    trophy: "/assets/trophy/1st.png",
    featured: true,
  },
  {
    year: "2023–24",
    team: "DunderMifflin",
    college: "IIT Kharagpur",
    trophy: "/assets/trophy/2st.png",
    featured: false,
  },
  {
    year: "2022–23",
    team: "Paradigm Shift",
    college: "IIT Indore",
    trophy: "/assets/trophy/3rd.png",
    featured: false,
  },
];

export default function ICPCChampions() {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base font-bold text-gray-900">Champions since 2012</h3>
        <a href="#" className="text-sm text-blue-500 hover:underline whitespace-nowrap">
          View all 13 years →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-3 flex-1">
        {champions.map((c) => (
          <div
            key={c.year}
            className={`relative rounded-xl border p-4 flex flex-col items-center text-center ${
              c.featured
                ? "border-orange-400 bg-orange-50"
                : "border-gray-200"
            }`}
          >
            {c.featured && (
              <svg
                className="absolute top-2 left-2 w-4 h-4 text-orange-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l1.8 5.4H19l-4.5 3.3 1.7 5.3L12 13l-4.2 3 1.7-5.3L5 7.4h5.2z" />
              </svg>
            )}
            <div className="relative w-14 h-14 mb-2">
              <Image
                src={c.trophy}
                alt={`${c.year} champion trophy`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs font-bold text-gray-900">{c.year}</p>
            <p className="text-xs font-semibold text-gray-800 mt-0.5">{c.team}</p>
            <p className="text-xs text-gray-500">{c.college}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

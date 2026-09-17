import { contestInfo } from "@/app/_constants/contestInfo";

const stats = [
  { value: contestInfo.onsiteSlots, label: contestInfo.onsiteSlotsLabel },
  { value: contestInfo.womenOnsiteSlots, label: contestInfo.womenOnsiteSlotsLabel },
  { value: contestInfo.prizePoolShort, label: contestInfo.prizePoolLabel },
  { value: contestInfo.hostCitiesCount, label: contestInfo.hostCitiesLabel },
];

export default function ScoreboardStats() {
  return (
    <section className="w-full bg-scoreboard">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 sm:divide-x">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-4 py-5 sm:py-0 ${
                i % 2 === 0 ? "border-white/10" : ""
              }`}
            >
              <p className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm sm:text-base font-medium text-blue-100/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

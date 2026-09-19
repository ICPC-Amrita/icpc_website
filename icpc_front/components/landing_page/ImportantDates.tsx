import { contestInfo } from "@/app/_constants/contestInfo";
import Reveal from "./Reveal";

const dates = contestInfo.dates;

export default function ImportantDates() {
  return (
    <section id="important-dates" className="w-full bg-white px-4 sm:px-8 lg:px-14 xl:px-20 pb-14">
      <div className="max-w-full mx-auto">

       <div className="border border-hairline rounded-2xl bg-white shadow-sm overflow-hidden">
  <div className="p-6 sm:p-10">
    <Reveal className="max-w-md">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
        Important dates
      </h2>

      <p className="text-gray-600 mt-2 text-base sm:text-lg">
        Your road to ICPC Amritapuri {contestInfo.year}
      </p>
    </Reveal>

    <ol className="mt-10 flex flex-col divide-y divide-hairline sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:divide-y-0 sm:gap-4">
      {dates.map((d, i) => (
        <Reveal
          as="li"
          key={d.title}
          delay={(i % 3) * 0.09}
          className="flex items-start gap-4 py-4 sm:py-0 sm:flex-col sm:gap-2 sm:border sm:border-hairline sm:rounded-xl sm:p-5"
        >
          <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-paper text-contest-blue font-display font-bold text-sm sm:hidden">
            {i + 1}
          </span>
          <div className="min-w-0">
            <p className="text-gray-500 text-sm font-medium">{d.status}</p>
            <p className="text-ink text-lg sm:text-xl font-bold mt-0.5">{d.title}</p>
            <p className="text-contest-blue text-base sm:text-lg font-semibold mt-1">
              {d.date}
            </p>
            {d.time && (
              <p className="text-gray-500 text-sm font-medium mt-0.5">{d.time}</p>
            )}
          </div>
        </Reveal>
      ))}
    </ol>

    <Reveal as="p" className="text-sm text-center text-gray-400 italic pt-8">
      * Dates and qualification details are subject to official ICPC announcements.
    </Reveal>
  </div>
</div>

      </div>
    </section>
  );
}

import Link from "next/link";
import { contestInfo } from "@/app/_constants/contestInfo";
import ICPCChampions from "./ICPCChampions";

export default function CommunityProof() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-14 xl:px-20 pb-14">
      <div className="max-w-full mx-auto border border-hairline rounded-2xl p-6 sm:p-10 bg-paper shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight">
            You&apos;re not joining a random coding contest.
            <br />
            <span className="text-contest-blue">You&apos;re joining a global programming community.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Students from universities across India have taken on ICPC at Amritapuri for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          <div className="p-6 rounded-xl border border-hairline bg-white hover:shadow-md transition-shadow text-center flex flex-col justify-center">
            <p className="font-display text-4xl sm:text-5xl font-bold text-contest-blue mb-1">
              {contestInfo.yearsRunning} years
            </p>
            <p className="text-base font-bold text-ink mb-1.5">Of ICPC at Amritapuri</p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Hosting regional contests since 2012.
            </p>
          </div>

          <ICPCChampions />

          <Link
            href="/halloffame"
            className="p-6 rounded-xl bg-contest-blue text-white flex flex-col justify-center items-center text-center gap-2 shadow-sm hover:bg-contest-blue-dark transition-colors"
          >
            <p className="text-lg font-bold">
              Real teams. Real contests. Real ICPC journeys.
            </p>
            <p className="text-sm text-blue-100">
              Explore Hall of Fame winners and past rankings.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

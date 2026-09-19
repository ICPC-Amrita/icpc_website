import Link from "next/link";
import { contestInfo } from "@/app/_constants/contestInfo";
import Reveal from "./Reveal";

export default function AudienceSplit() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 py-14">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Wherever you&apos;re starting from, there&apos;s a way in.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Newcomers */}
          <Reveal effect="left" className="flex flex-col rounded-2xl border border-hairline bg-paper p-8 sm:p-10">
            <p className="text-sm font-semibold text-contest-blue uppercase tracking-wide">
              First time at ICPC
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
              New here? Start with the basics.
            </h3>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
              You don&apos;t need to be an expert. If your team knows arrays and loops,
              you&apos;re ready to begin.
            </p>
            <Link
              href="/beginner-guide"
              className="mt-6 inline-flex w-fit items-center gap-2 bg-white hover:bg-gray-50 text-ink text-base font-semibold px-6 py-3 rounded-lg border border-gray-300 transition-all"
            >
              Read the beginner guide
            </Link>
          </Reveal>

          {/* Experienced */}
          <Reveal effect="right" delay={0.12} className="flex flex-col rounded-2xl border border-hairline bg-paper p-8 sm:p-10">
            <p className="text-sm font-semibold text-brass uppercase tracking-wide">
              Been here before
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
              Ready to compete? Register your team.
            </h3>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
              Bring your strongest team and go straight for the {contestInfo.onsiteSlots} onsite
              slots and a {contestInfo.prizePool} prize pool.
            </p>
            <Link
              href={contestInfo.registrationUrl}
              className="mt-6 inline-flex w-fit items-center gap-2 bg-contest-blue hover:bg-contest-blue-dark text-white text-base font-semibold px-6 py-3 rounded-lg transition-all shadow-sm"
            >
              Register your team
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

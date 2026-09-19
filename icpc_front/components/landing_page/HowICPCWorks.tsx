import Link from "next/link";
import { ExternalLink, UserPlus, Code2, MapPin, FileCheck2, Trophy, Globe2, Medal } from "lucide-react";
import { contestInfo } from "@/app/_constants/contestInfo";
import Reveal from "./Reveal";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    desc: "Form a 3-person team with a faculty coach.",
  },
  {
    icon: Code2,
    title: "Online prelims",
    desc: "Solve algorithmic problems from your college.",
  },
  {
    icon: MapPin,
    title: "Regional onsite",
    desc: `Compete at one of ${contestInfo.hostCitiesCount} host campuses.`,
  },
  {
    icon: FileCheck2,
    title: "Undertaking",
    desc: "Submit once at indiaicpc.in — mandatory.",
    required: true,
  },
];

const routes = [
  {
    icon: Trophy,
    title: "Regional winner",
    desc: "Advances straight to the World Finals.",
  },
  {
    icon: Globe2,
    title: "Top-performing teams",
    desc: "Compete at Asia West; top finishers advance too.",
  },
];

export default function HowICPCWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-ink">
              How ICPC works
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-lg sm:text-xl text-neutral-600">
              From team registration to the World Finals stage — the official qualification pathway.
            </p>
          </Reveal>
        </div>

        {/* THE FLOW: one horizontal line on desktop; a stacked list on smaller screens */}

        {/* Desktop / wide layout — fits one row, no scrolling, so only shown where it fits */}
        <div className="hidden 2xl:flex items-start justify-center gap-4">

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isRequired = step.required;
            const content = (
              <>
                <div
                  className={`flex items-center justify-center size-20 rounded-full border-2 ${
                    isRequired ? "bg-red-600 border-red-600" : "bg-white border-contest-blue"
                  }`}
                >
                  <Icon className={`size-8 ${isRequired ? "text-white" : "text-contest-blue"}`} strokeWidth={1.8} />
                </div>
                <p className={`mt-3 text-sm font-semibold ${isRequired ? "text-red-600" : "text-contest-blue"}`}>
                  Step {i + 1}{isRequired ? " · mandatory" : ""}
                </p>
                <h3 className="mt-0.5 text-lg font-bold text-ink leading-snug">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-snug">{step.desc}</p>
              </>
            );

            return (
              <Reveal key={step.title} delay={i * 0.12} id={isRequired ? "undertaking-step" : undefined} className="flex items-start scroll-mt-28">
                {isRequired ? (
                  <Link
                    href={contestInfo.undertakingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center w-40 group"
                  >
                    {content}
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:text-red-700 transition-colors">
                      Submit
                      <ExternalLink className="size-3.5" />
                    </span>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center text-center w-40">{content}</div>
                )}
                <div className="w-10 h-px bg-hairline mt-10 shrink-0" aria-hidden="true" />
              </Reveal>
            );
          })}

          {/* Fork: two alternative routes, not another step */}
          <Reveal delay={0.5} className="flex flex-col justify-center gap-3 w-60">
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <div key={route.title} className="flex items-center gap-3 rounded-xl border border-hairline px-4 py-3">
                  <Icon className="size-5 text-contest-blue shrink-0" strokeWidth={1.8} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-ink leading-snug truncate">{route.title}</p>
                    <p className="text-xs text-gray-500 leading-snug">{route.desc}</p>
                  </div>
                </div>
              );
            })}
            <p className="text-xs text-gray-400 text-center -mt-0.5">based on where your team places</p>
          </Reveal>

          <div className="w-10 h-px bg-hairline mt-10 shrink-0 self-center" aria-hidden="true" />

          {/* Final: both routes rejoin here */}
          <Reveal effect="scale" delay={0.62} className="flex flex-col items-center text-center w-40 self-center">
            <div className="flex items-center justify-center size-20 rounded-full bg-scoreboard">
              <Medal className="size-8 text-white" strokeWidth={1.8} />
            </div>
            <h3 className="mt-3 text-lg font-bold text-ink leading-snug">World Finals 2027</h3>
            <p className="mt-1 text-sm text-gray-500 leading-snug">The ultimate global stage</p>
          </Reveal>

        </div>

        {/* Narrower layout — stacked list, no horizontal scroll */}
        <div className="2xl:hidden max-w-md mx-auto">
          <div className="relative">
            <div className="absolute left-7 top-7 bottom-7 w-px bg-hairline" aria-hidden="true" />
            <ol className="flex flex-col gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isRequired = step.required;
                const node = (
                  <div
                    className={`relative z-10 flex-shrink-0 flex items-center justify-center size-14 rounded-full border-2 ${
                      isRequired ? "bg-red-600 border-red-600" : "bg-white border-contest-blue"
                    }`}
                  >
                    <Icon className={`size-6 ${isRequired ? "text-white" : "text-contest-blue"}`} strokeWidth={1.8} />
                  </div>
                );
                const text = (
                  <div className="pt-1">
                    <p className={`text-sm font-semibold ${isRequired ? "text-red-600" : "text-contest-blue"}`}>
                      Step {i + 1}{isRequired ? " · mandatory" : ""}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold text-ink leading-snug">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 leading-snug">{step.desc}</p>
                    {isRequired && (
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                        Submit at indiaicpc.in
                        <ExternalLink className="size-3.5" />
                      </span>
                    )}
                  </div>
                );
                return (
                  <Reveal as="li" key={step.title} id={isRequired ? "undertaking-step" : undefined} className="relative flex gap-4 scroll-mt-28">
                    {isRequired ? (
                      <Link href={contestInfo.undertakingUrl} target="_blank" rel="noopener noreferrer" className="contents">
                        {node}
                        {text}
                      </Link>
                    ) : (
                      <>
                        {node}
                        {text}
                      </>
                    )}
                  </Reveal>
                );
              })}
            </ol>
          </div>

          <div className="flex justify-center py-3">
            <div className="w-px h-6 bg-hairline" aria-hidden="true" />
          </div>
          <Reveal>
            <p className="text-sm text-gray-500 text-center mb-4">
              Two routes forward, based on where your team places:
            </p>
          </Reveal>
          <div className="flex flex-col gap-3">
            {routes.map((route, i) => {
              const Icon = route.icon;
              return (
                <Reveal key={route.title} delay={i * 0.1} className="flex items-center gap-3 rounded-xl border border-hairline px-4 py-3">
                  <Icon className="size-5 text-contest-blue shrink-0" strokeWidth={1.8} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-ink leading-snug">{route.title}</p>
                    <p className="text-xs text-gray-500 leading-snug">{route.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="flex justify-center py-3">
            <div className="w-px h-6 bg-hairline" aria-hidden="true" />
          </div>
          <Reveal effect="scale" className="rounded-xl bg-scoreboard p-6 text-center">
            <Medal className="size-6 text-white mx-auto mb-2" strokeWidth={1.8} />
            <h3 className="text-lg font-bold text-white leading-snug">World Finals 2027</h3>
            <p className="mt-1 text-sm text-blue-100/90 leading-snug">The ultimate global stage</p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

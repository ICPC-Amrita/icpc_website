import Link from "next/link";
import {
  ExternalLink,
  UserPlus,
  CreditCard,
  BadgeCheck,
  FileCheck2,
  MonitorPlay,
  ShieldCheck,
  ListChecks,
  MapPin,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { contestInfo } from "@/app/_constants/contestInfo";
import Reveal from "./Reveal";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** Date / time line shown in the accent colour */
  when?: string;
  /** Extra caution shown under the description */
  note?: string;
  /** Show support contact details */
  contact?: boolean;
  /** Mandatory step — highlighted red and linked to the undertaking form */
  required?: boolean;
}

const steps: Step[] = [
  {
    icon: UserPlus,
    title: "Register your team",
    desc: "Form a team of 3 eligible students from the same college. A faculty coach from your college must register the team.",
  },
  {
    icon: CreditCard,
    title: "Make payment",
    desc: `The registration fee is ${contestInfo.registrationFee} per team.`,
  },
  {
    icon: BadgeCheck,
    title: "Registration confirmation",
    desc: "Your registration will be reviewed and confirmed within 40 hours.",
    contact: true,
  },
  {
    icon: FileCheck2,
    title: "Submit the undertaking",
    desc: "Download the Undertaking Form, complete it and upload the signed form.",
    when: "Before October 1, 2026",
    required: true,
  },
  {
    icon: MonitorPlay,
    title: "Practice contest",
    desc: "Registered teams can practice on CodeChef using Safe Exam Browser (SEB). Setup instructions are emailed to registered teams.",
    when: "Starts September 26, 2026",
    note: "Safe Exam Browser does not work on Linux.",
  },
  {
    icon: ShieldCheck,
    title: "Online preliminary contest",
    desc: "Compete from a proctored environment under the prescribed contest conditions. Coaches make the necessary arrangements for their teams.",
    when: "October 3, 2026 · 1:30 PM – 4:30 PM",
  },
  {
    icon: ListChecks,
    title: "Onsite shortlisting",
    desc: "Teams are shortlisted based on the published onsite selection criteria.",
    when: "Notified by October 15, 2026",
  },
  {
    icon: MapPin,
    title: "Regional onsite contest",
    desc: `Travel to your assigned site and compete across our ${contestInfo.hostCitiesCount} host campuses: ${contestInfo.hostCities.join(" · ")}.`,
    when: "January 1–2, 2027",
  },
];

const COLUMNS = 4;

function Contact() {
  return (
    <p className="mt-2 text-xs text-gray-500 leading-snug">
      Questions?{" "}
      <a href={`mailto:${contestInfo.contactEmail}`} className="font-semibold text-contest-blue hover:underline break-all">
        {contestInfo.contactEmail}
      </a>{" "}
      or WhatsApp{" "}
      <a
        href={contestInfo.contactWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-contest-blue hover:underline whitespace-nowrap"
      >
        {contestInfo.contactWhatsapp}
      </a>
    </p>
  );
}

function Details({ step, centered }: { step: Step; centered?: boolean }) {
  const accent = step.required ? "text-red-600" : "text-contest-blue";
  return (
    <>
      <h3 className="mt-0.5 text-lg font-bold text-ink leading-snug">{step.title}</h3>
      {step.when && <p className={`mt-1 text-sm font-semibold leading-snug ${accent}`}>{step.when}</p>}
      <p className="mt-1 text-sm text-gray-500 leading-snug">{step.desc}</p>
      {step.note && (
        <p className={`mt-2 flex gap-1.5 text-xs font-medium text-amber-700 leading-snug ${centered ? "justify-center text-left" : ""}`}>
          <TriangleAlert className="size-3.5 shrink-0 mt-px" />
          <span>{step.note}</span>
        </p>
      )}
      {step.contact && <Contact />}
    </>
  );
}

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
              From team registration to the regional onsite — your path in {steps.length} steps.
            </p>
          </Reveal>
        </div>

        {/* Wide layout — two rows of four, connected by a line */}
        <div className="hidden lg:grid grid-cols-4 gap-y-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isRequired = step.required;
            const hasNext = (i + 1) % COLUMNS !== 0;
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
                <Details step={step} centered />
                {isRequired && (
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:text-red-700 transition-colors">
                    Submit
                    <ExternalLink className="size-3.5" />
                  </span>
                )}
              </>
            );

            return (
              <Reveal
                key={step.title}
                delay={(i % COLUMNS) * 0.12}
                id={isRequired ? "undertaking-step" : undefined}
                className="relative flex justify-center px-3 scroll-mt-28"
              >
                {hasNext && (
                  <div
                    className="absolute top-10 left-[calc(50%+3.25rem)] right-[calc(-50%+3.25rem)] h-px bg-hairline"
                    aria-hidden="true"
                  />
                )}
                {isRequired ? (
                  <Link
                    href={contestInfo.undertakingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center max-w-[15rem] group"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="flex flex-col items-center text-center max-w-[15rem]">{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Narrower layout — stacked timeline, no horizontal scroll */}
        <div className="lg:hidden max-w-xl mx-auto">
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
                  <div className="pt-1 min-w-0">
                    <p className={`text-sm font-semibold ${isRequired ? "text-red-600" : "text-contest-blue"}`}>
                      Step {i + 1}{isRequired ? " · mandatory" : ""}
                    </p>
                    <Details step={step} />
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
        </div>

      </div>
    </section>
  );
}

const generalSteps = [
  {
    title: "Check eligibility",
    desc: "Only teams that solve at least one problem in the Preliminary Online Contest are eligible.",
  },
  {
    title: "Prepare the final ranking",
    desc: "Rank all eligible teams using their final verified Preliminary Online Contest results.",
  },
  {
    title: "Ranks 1–50 — no limit",
    desc: "All teams ranked from 1 to 50 are selected, regardless of their institution.",
  },
  {
    title: "Ranks 51–100 — maximum X teams per institution",
    desc: "Teams are selected in rank order. An institution can have at most X selected teams in total, including teams already selected in ranks 1–50.",
  },
  {
    title: "Ranks 101–200 — maximum Y teams per institution",
    desc: "Teams continue to be selected in rank order. An institution can have at most Y selected teams in total, including all teams selected earlier.",
  },
  {
    title: "Ranks 201 onward — one team per institution per pass",
    desc: "Take the highest-ranked remaining team from each institution, arrange these teams in ranking order, and select teams until the available slots are filled.",
  },
  {
    title: "Repeat",
    desc: "If slots remain, repeat the previous step using the next-highest-ranked remaining team from each institution. This continues until all 360 General Slots are filled or no eligible teams remain.",
  },
];

const bands = [
  { band: "Top tier", range: "1–50", cap: "No limit" },
  { band: "Second tier", range: "51–100", cap: "X teams per institution" },
  { band: "Third tier", range: "101–200", cap: "Y teams per institution" },
  { band: "Remaining", range: "201 onward", cap: "One team per institution per pass" },
];

const womenSteps = [
  {
    title: "Exclude",
    desc: "Remove Women-Only Teams that have already been selected through General Selection — a team already seated on merit is not selected twice.",
  },
  {
    title: "Rank",
    desc: "Rank the remaining eligible Women-Only Teams using their final verified contest ranking.",
  },
  {
    title: "Select",
    desc: "Select teams in rank order, with a maximum of Z teams per institution, until all 20 Women-Only Slots are filled or no eligible teams remain.",
  },
];

export default function OnsiteSelectionProcess() {
  return (
    <main className="w-full bg-white px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-contest-blue tracking-wide uppercase">
            Selection Procedure
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            ICPC Amritapuri On-Site Contest
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Your journey to the ICPC Amritapuri On-Site Contest begins with the Preliminary
            Online Contest. A total of 380 teams will be selected — 360 through General
            Selection and 20 through Women-Only Selection — based on the final verified
            ranking of the Preliminary Online Contest.
          </p>
        </div>

        {/* OVERVIEW TABLE */}
        <div className="mb-16 overflow-x-auto rounded-xl border border-hairline">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-paper border-b border-hairline">
                <th className="px-5 py-3 font-semibold text-ink">Track</th>
                <th className="px-5 py-3 font-semibold text-ink">Slots</th>
                <th className="px-5 py-3 font-semibold text-ink">Filled from</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-hairline">
                <td className="px-5 py-4 font-semibold text-contest-blue whitespace-nowrap">General Selection</td>
                <td className="px-5 py-4 font-semibold text-ink">360</td>
                <td className="px-5 py-4 text-neutral-600">
                  All eligible teams, in final verified rank order, with institutional caps
                  that tighten below rank 50
                </td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-semibold text-brass whitespace-nowrap">Women-Only Selection</td>
                <td className="px-5 py-4 font-semibold text-ink">20</td>
                <td className="px-5 py-4 text-neutral-600">
                  All-women teams not already selected in General Selection, in rank order,
                  capped at Z per institution
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GENERAL SELECTION */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            General Team Selection — 360 Slots
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            We select teams in ranking order, while applying institutional limits to ensure
            opportunities are distributed across colleges. Your contest ranking matters, but
            institutional limits also affect selection.
          </p>

          <ol className="mt-8 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-hairline" aria-hidden="true" />
            {generalSteps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center size-10 rounded-full border-2 border-contest-blue bg-white text-sm font-bold text-contest-blue">
                  {i + 1}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-semibold text-ink leading-snug">{step.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Band table */}
          <div className="mt-10 overflow-x-auto rounded-xl border border-hairline">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-paper border-b border-hairline">
                  <th className="px-5 py-3 font-semibold text-ink">Band</th>
                  <th className="px-5 py-3 font-semibold text-ink">Rank range</th>
                  <th className="px-5 py-3 font-semibold text-ink">Institutional cap</th>
                </tr>
              </thead>
              <tbody>
                {bands.map((b, i) => (
                  <tr key={b.band} className={i !== bands.length - 1 ? "border-b border-hairline" : ""}>
                    <td className="px-5 py-3.5 font-semibold text-ink whitespace-nowrap">{b.band}</td>
                    <td className="px-5 py-3.5 text-neutral-600 whitespace-nowrap">{b.range}</td>
                    <td className="px-5 py-3.5 text-neutral-600">{b.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-contest-blue/30 bg-contest-blue/5 px-5 py-4">
            <span className="mt-0.5 flex-shrink-0 text-xs font-bold uppercase tracking-wide text-contest-blue">
              Example
            </span>
            <p className="text-sm text-ink leading-relaxed">
              If <span className="font-semibold">X = 4</span> and an institution already has{" "}
              <span className="font-semibold">4 teams</span> selected in the first 100
              ranks, no additional teams from that institution can be selected under the X
              cap in that stage.
            </p>
          </div>
        </section>

        {/* WOMEN-ONLY SELECTION */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Women-Only Slot Selection — 20 Slots
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            The Women-Only Selection takes place after all 360 General Teams have been
            selected. A Women-Only Team is a team where all contestants are women — the
            coach&apos;s gender does not matter.
          </p>

          <ol className="mt-8 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-hairline" aria-hidden="true" />
            {womenSteps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center size-10 rounded-full border-2 border-brass bg-white text-sm font-bold text-brass">
                  {i + 1}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-semibold text-ink leading-snug">{step.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm text-neutral-500 leading-relaxed bg-paper rounded-xl border border-hairline px-5 py-4">
            The Z-team institutional limit applies only to this Women-Only Selection and is
            separate from the X and Y limits used in General Selection.
          </p>
        </section>

        {/* DEFINITION */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Can a Women-Only Team Qualify Through General Selection?
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            Yes. A Women-Only Team can earn a seat through General Selection based on its
            ranking. If it is selected there, it will not be selected again through
            Women-Only Selection.
          </p>
        </section>

        {/* X, Y, Z */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Understanding Institutional Limits
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            The values of X, Y, and Z will be announced by the Organizing Committee after
            the Preliminary Online Contest and result verification, once the actual
            distribution of teams across institutions is known.
          </p>
        </section>

        {/* QUICK SUMMARY */}
        <section className="rounded-2xl border border-hairline bg-paper px-6 py-8 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Quick Summary
          </h2>
          <ul className="mt-4 space-y-2 text-neutral-600 leading-relaxed list-disc list-outside pl-5">
            <li>380 total teams will be selected.</li>
            <li>General Selection fills 360 slots first.</li>
            <li>Women-Only Selection fills the remaining 20 slots.</li>
            <li>Selection is based on the final verified contest ranking.</li>
            <li>Institutional limits apply at different stages.</li>
            <li>Women-Only Teams selected through General Selection are not selected twice.</li>
          </ul>
          <p className="mt-6 text-sm font-semibold text-ink">
            Prepare well. Compete strongly. Your ranking is the starting point for your
            journey to Amritapuri!
          </p>
        </section>

      </div>
    </main>
  );
}

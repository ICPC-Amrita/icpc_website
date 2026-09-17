const generalSteps = [
  {
    title: "Filter",
    desc: "Discard any team that could not solve a single problem in the Preliminary Online Contest.",
  },
  {
    title: "Rank",
    desc: "Rank all remaining teams by their Preliminary Online Contest result, after result verification is complete. This final verified ranking is the basis for every step below.",
  },
  {
    title: "Ranks 1–50 — no institutional limit",
    desc: "Select the top 50 ranked teams outright. Any number of teams from the same institution may be selected here (e.g., all 6 teams from one college, if they rank that high).",
  },
  {
    title: "Ranks 51–100 — capped at X per institution",
    desc: "Select teams in rank order, up to X teams total from any one institution, counting teams already selected in ranks 1–50.",
  },
  {
    title: "Ranks 101–200 — capped at Y per institution",
    desc: "Same process, up to Y teams total from any one institution, counting all teams already selected so far.",
  },
  {
    title: "Ranks 201 onward — one team per institution per pass",
    desc: "From the remaining ranked teams, take the highest-ranked not-yet-selected team from each institution, order this list by rank, and select down it with no more than one team per institution in this pass.",
  },
  {
    title: "Repeat",
    desc: "If slots remain, repeat the previous step with the next-highest-ranked unselected team from each institution. Continue until all 360 General Slots are filled or no eligible teams remain.",
  },
];

const bands = [
  { band: "Top tier", range: "1–50", cap: "None" },
  { band: "Second tier", range: "51–100", cap: "X per institution" },
  { band: "Third tier", range: "101–200", cap: "Y per institution" },
  { band: "Remaining", range: "201+", cap: "1 per institution per pass, repeated" },
];

const womenSteps = [
  {
    title: "Exclude",
    desc: "Remove from consideration any Women-Only Team already selected among the 360 General Teams — it has already earned its seat on merit and is not selected twice.",
  },
  {
    title: "Rank",
    desc: "Rank the remaining eligible Women-Only Teams by their final verified Preliminary Online Contest ranking.",
  },
  {
    title: "Select",
    desc: "Select teams in rank order, up to Z teams total from any one institution, until all 20 Women-Only Slots are filled or the list is exhausted.",
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
            Every team starts from the same Preliminary Online Contest ranking. General
            Selection runs first and fills 360 seats; the Women-Only Selection then fills
            the remaining 20 from the teams left over.
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
            Teams are filtered once, ranked once, and then admitted in rank order — with
            institutional caps that tighten further down the ranking, so a single college
            cannot dominate the lower bands while top performers are still rewarded on merit
            alone.
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
        </section>

        {/* WOMEN-ONLY SELECTION */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Women-Only Slot Selection — 20 Slots
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            These 20 slots are filled only after the 360 General Teams are finalized,
            drawing solely from the Women-Only Teams left over.
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
            Definition of a Women-Only Team
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            A Women-Only Team is a team whose contestants are all women. The coach&apos;s
            gender has no bearing on this classification.
          </p>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            A Women-Only Team can be selected on merit through General Selection alone.
            When that happens, it is not selected a second time for a Women-Only Slot — the
            Women-Only Selection draws only from Women-Only Teams not already seated through
            General Selection.
          </p>
        </section>

        {/* X, Y, Z */}
        <section>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Determination of X, Y and Z
          </h2>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            The institutional caps used above — X (ranks 51–100), Y (ranks 101–200) and Z
            (Women-Only Selection) — are not fixed by this procedure. The Organizing
            Committee determines and announces their values after the Preliminary Online
            Contest and its result verification are complete, once the actual distribution
            of teams across institutions is known.
          </p>
        </section>

      </div>
    </main>
  );
}

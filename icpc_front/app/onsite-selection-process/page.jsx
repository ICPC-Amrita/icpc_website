const generalSteps = [
  {
    title: "Filter",
    desc: "Discard any team that could not solve a single problem in the Preliminary Online Contest.",
    example: "Team A solved 0 problems and is dropped. Team B solved 1 problem and stays in the pool.",
  },
  {
    title: "Rank",
    desc: "Rank all remaining teams by their Preliminary Online Contest result, after result verification is complete. This final verified ranking is the basis for every step below.",
    example: "After verification, Team B moves from rank 42 to rank 39 once a wrong penalty is corrected.",
  },
  {
    title: "Ranks 1–50 — no institutional limit",
    desc: "Select the top 50 ranked teams outright. Any number of teams from the same institution may be selected here (e.g., all 6 teams from one college, if they rank that high).",
    example: "College P has 6 teams ranked within the top 50 — all 6 are selected here.",
  },
  {
    title: "Ranks 51–100 — capped at X per institution",
    desc: "Select teams in rank order, up to X teams total from any one institution, counting teams already selected in ranks 1–50.",
    example: "If X = 5 and College Q already has 3 teams selected from ranks 1–50, up to 2 more of its teams ranked 51–100 can be selected.",
  },
  {
    title: "Ranks 101–140 — capped at Y per institution",
    desc: "Same process, up to Y teams total from any one institution, counting all teams already selected so far.",
    example: "If Y = 2 and College Q already has 3 teams selected so far, none of its teams ranked 101–140 are selected, since it already exceeds the Y cap of 2.",
  },
  {
    title: "Ranks 141–360 — one team per institution per pass",
    desc: "Look at remaining ranked teams from institutions with no teams selected yet in steps 1–5. Take the highest-ranked unselected team from each of those eligible institutions.",
    example: "College R's best unselected team is rank 145 and College S's is rank 150, both are picked in this pass, but no other team from R or S will be picked in this pass.",
  },
  {
    title: "Repeat",
    desc: "If slots remain, repeat step 6 with the next-highest-ranked unselected team from each institution. Continue until all 360 General Slots are filled or no eligible teams remain.",
    example: "In the next pass, College R's next-best unselected team (rank 210) becomes eligible, alongside the next-highest remaining team from every other institution.",
  },
];

const bands = [
  { band: "Top tier", range: "1–50", cap: "No institutional limit" },
  { band: "Second tier", range: "51–100", cap: "X teams per institution" },
  { band: "Third tier", range: "101–140", cap: "Y teams per institution" },
  { band: "Remaining", range: "141–360", cap: "One team per institution per pass" },
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
          <p className="text-lg sm:text-xl font-semibold text-contest-blue tracking-wide uppercase">
            Selection Procedure
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            ICPC Amritapuri On-Site Contest
          </h1>
          <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
            <span className="h-1 w-8 rounded-full bg-contest-blue" />
            <span className="h-1 w-8 rounded-full bg-icpc-red" />
            <span className="h-1 w-8 rounded-full bg-icpc-yellow" />
          </div>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Your journey to the ICPC Amritapuri On-Site Contest begins with the Preliminary
            Online Contest. A total of{" "}
            <span className="font-semibold text-icpc-red">380 teams</span> will be selected —{" "}
            <span className="font-semibold text-contest-blue">360</span> through General
            Selection and <span className="font-semibold text-brass">20</span> through
            Women-Only Selection — based on the final verified ranking of the Preliminary
            Online Contest.
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
                  {step.example && (
                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                      <span className="font-semibold text-contest-blue">Example: </span>
                      {step.example}
                    </p>
                  )}
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
              If <span className="font-semibold">X = 5</span> and an institution already has{" "}
              <span className="font-semibold">5 teams</span> selected in the first 100
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
          <div className="mt-3 flex gap-3 rounded-xl border border-icpc-red/30 bg-icpc-red/5 px-5 py-4">
            <span className="mt-0.5 flex-shrink-0 text-xs font-bold uppercase tracking-wide text-icpc-red">
              Yes
            </span>
            <p className="text-sm text-ink leading-relaxed">
              A Women-Only Team can earn a seat through General Selection based on its
              ranking. If it is selected there, it will not be selected again through
              Women-Only Selection.
            </p>
          </div>
        </section>

        {/* X, Y, Z */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
            Understanding Institutional Limits
          </h2>
          <div className="mt-3 flex gap-3 rounded-xl border border-icpc-yellow/40 bg-icpc-yellow/10 px-5 py-4">
            <span className="mt-0.5 flex-shrink-0 text-xs font-bold uppercase tracking-wide text-icpc-yellow-dark">
              To be announced
            </span>
            <p className="text-sm text-ink leading-relaxed">
              The values of X, Y, and Z will be announced by the Organizing Committee after
              the Preliminary Online Contest and result verification, once the actual
              distribution of teams across institutions is known. The caps only tighten as
              ranking bands progress, so{" "}
              <span className="font-semibold">X is always greater than Y</span>.
            </p>
          </div>
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

'use client'

import { useEffect, useState } from "react";
import ambassadors from "./ambassadors.json";

const TARGET = 10000;
const COUNT_MS = 2200;

const TIERS = [
  { key: "Elite", min: "100+", color: "#b8860b" },
  { key: "Platinum", min: "50+", color: "#5b7c99" },
  { key: "Gold", min: "25+", color: "#d49a06" },
  { key: "Silver", min: "15+", color: "#8a94a6" },
  { key: "Bronze", min: "10+", color: "#b4693a" },
  { key: "Starter", min: "5+", color: "#2f6fdb" },
];

const initials = (name) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

function useCountUp(target, duration) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      setDone(true);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 4))));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDone(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return [value, done];
}

function Avatar({ person, color, size }) {
  const [failed, setFailed] = useState(!person.image);
  return (
    <div
      className="rounded-full overflow-hidden bg-[#101a3d] flex items-center justify-center shrink-0"
      style={{ width: size, height: size, boxShadow: `0 0 0 3px #fff, 0 0 0 5px ${color}` }}
    >
      {failed ? (
        <span className="font-bold text-white" style={{ fontSize: size * 0.34 }}>{initials(person.name)}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function Line({ show, delay, children }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span
        className="block transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none"
        style={{ transform: show ? "translateY(0)" : "translateY(110%)", transitionDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}

function Person({ p, tier, featured }) {
  return (
    <article
      className={`group flex items-center gap-5 rounded-xl bg-white border border-[#e3e7f2] hover:border-[#101a3d]/40 transition-colors ${
        featured ? "p-7 sm:col-span-2 bg-[#f3f5fb]" : "p-5"
      }`}
    >
      <Avatar person={p} color={tier.color} size={featured ? 112 : 64} />
      <div className="min-w-0 flex-1">
        <h4 className={`font-bold text-[#101a3d] leading-tight ${featured ? "text-2xl" : "text-lg"}`}>{p.name}</h4>
        <p className="text-sm text-[#4b5675] mt-1 leading-snug">{p.institution}</p>
      </div>
      <div className="text-right shrink-0">
        <div className={`font-extrabold tabular-nums text-[#101a3d] leading-none ${featured ? "text-5xl" : "text-3xl"}`}>{p.teams}</div>
        <div className="text-xs text-[#4b5675] mt-1">teams</div>
      </div>
    </article>
  );
}

export default function AmbassadorHallOfFame() {
  const [count, done] = useCountUp(TARGET, COUNT_MS);

  return (
    <main className="bg-white text-[#101a3d] min-h-screen pt-[26vw] md:pt-[9vw] pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6">
        <div
          className="font-extrabold tabular-nums leading-[0.85] tracking-tighter text-[clamp(4.5rem,17vw,13rem)]"
          aria-label="10,000+"
        >
          <span aria-hidden="true">{count.toLocaleString("en-IN")}</span>
          <span aria-hidden="true" className="text-[#d7263d]">+</span>
        </div>

        <h1 className="mt-6 font-extrabold tracking-tight leading-[1.02] text-[clamp(1.9rem,5vw,3.75rem)]">
          <Line show={done} delay={0}>problem solvers.</Line>
          <Line show={done} delay={140}>Thousands of stories.</Line>
          <Line show={done} delay={280}><span className="text-[#d7263d]">One ambassador community.</span></Line>
        </h1>

        <div
          className="mt-10 grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 border-t border-[#101a3d] pt-6 transition-opacity duration-700 delay-500 motion-reduce:transition-none"
          style={{ opacity: done ? 1 : 0 }}
        >
          <p className="font-bold text-lg">Ambassador Hall of Fame · ICPC Asia West Amritapuri 2026</p>
          <div className="space-y-3 text-[#4b5675] leading-relaxed max-w-prose">
            <p>The Ambassador Program brought together students and coding communities from across the country.</p>
            <p>Through their outreach, dedication and support, our ambassadors helped us reach 10,000+ problem solvers. This Hall of Fame recognises the ambassadors who made that milestone possible.</p>
          </div>
        </div>
      </section>

      {/* Tier index */}
      <nav aria-label="Ambassador tiers" className="max-w-6xl mx-auto px-6 mt-14">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-[#e3e7f2] rounded-xl overflow-hidden divide-x divide-y lg:divide-y-0 divide-[#e3e7f2]">
          {TIERS.map((t) => {
            const n = ambassadors.filter((a) => a.tier === t.key).length;
            return (
              <li key={t.key}>
                <a href={`#${t.key.toLowerCase()}`} className="block p-4 hover:bg-[#f3f5fb] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d7263d]">
                  <span className="block h-1 w-8 rounded-full mb-3" style={{ background: t.color }} />
                  <span className="block text-3xl font-extrabold tabular-nums leading-none">{n}</span>
                  <span className="block text-sm text-[#4b5675] mt-1">{t.key} · {t.min} teams</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Tiers */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        {TIERS.map((tier) => {
          const people = ambassadors.filter((a) => a.tier === tier.key);
          if (!people.length) return null;
          return (
            <section
              key={tier.key}
              id={tier.key.toLowerCase()}
              className="grid lg:grid-cols-[16rem_1fr] gap-6 lg:gap-12 py-12 border-t border-[#e3e7f2] scroll-mt-28"
            >
              <header className="lg:sticky lg:top-28 self-start">
                <div className="h-1.5 w-12 rounded-full" style={{ background: tier.color }} />
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight">{tier.key} Ambassadors</h2>
                <p className="mt-1 text-[#4b5675]">{tier.min} teams registered</p>
                <p className="mt-4 text-sm font-semibold" style={{ color: tier.color }}>
                  {people.length} {people.length === 1 ? "ambassador" : "ambassadors"}
                </p>
              </header>
              <div className="grid sm:grid-cols-2 gap-4">
                {people.map((p, i) => (
                  <Person key={p.rank} p={p} tier={tier} featured={tier.key === "Elite" && i === 0} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing */}
      <section className="max-w-6xl mx-auto px-6 mt-8 border-t border-[#101a3d] pt-12 grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
          Thank you for bringing teams to ICPC.
        </h2>
        <div className="space-y-3 text-[#4b5675] leading-relaxed max-w-prose">
          <p>To every ambassador who helped spread the word, bring teams together and introduce students to ICPC: this milestone belongs to you. ❤️</p>
          <p className="font-bold text-[#101a3d]">ICPC Asia West Amritapuri 2026</p>
        </div>
      </section>
    </main>
  );
}

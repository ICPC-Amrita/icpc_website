"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Our first ICPC experience started at Amritapuri. The preparation, the contest, the pressure and the people made the experience unforgettable.",
    author: "Team Syntax Squad",
    college: "NIT Calicut",
    image: "/assets/team_image.png",
  },
  {
    quote:
      "Competing at ICPC was a life-changing experience. The problems were hard, the community was amazing, and we came back stronger every year.",
    author: "Team ByteForce",
    college: "IIT Bombay",
    image: "/assets/team_image.png",
  },
  {
    quote:
      "The practice resources and mentorship provided made all the difference. We went from regionals to the world finals in just two years.",
    author: "Team AlgoRhythm",
    college: "BITS Pilani",
    image: "/assets/team_image.png",
  },
];

export default function ParticipantTestimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-blue-900 dark:text-blue-400 font-bold text-4xl sm:text-5xl">
          Testimonials
        </h2>
        <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
          They came to compete. They left with an ICPC story.
        </p>
      </div>

      {/* Single Testimonial Card */}
      <div className="relative rounded-2xl bg-white p-6 sm:p-10 md:p-12 shadow-sm ring-1 shadow-black/5 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10 transition-all duration-300">
        
        {/* Quote text */}
        <div className="relative">
          <span className="text-5xl sm:text-6xl text-blue-500/20 font-serif absolute -top-5 -left-3 select-none pointer-events-none">
            &ldquo;
          </span>
          <p className="text-lg sm:text-2xl md:text-3xl font-normal leading-relaxed text-neutral-800 dark:text-neutral-200 relative z-10 min-h-[100px] flex items-center">
            {t.quote}
          </p>
        </div>

        {/* Author Footer + Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          
          {/* Author Details */}
          <div className="flex items-center gap-3.5">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/20">
              <Image
                src={t.image}
                alt={t.author}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-base font-semibold text-black dark:text-white">
                {t.author}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {t.college}
              </span>
            </div>
          </div>

          {/* Controls: Dots + Arrows */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 mr-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === current
                      ? "w-6 bg-blue-600 dark:bg-blue-500"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex size-9 items-center justify-center rounded-full border border-black/15 text-black transition duration-200 hover:bg-black/5 active:scale-95 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex size-9 items-center justify-center rounded-full border border-black/15 text-black transition duration-200 hover:bg-black/5 active:scale-95 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
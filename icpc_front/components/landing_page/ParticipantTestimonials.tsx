"use client";

import Image from "next/image";
import { useState,useEffect } from "react";

const testimonials = [
  {
    quote:
      "Our first ICPC experience started at Amritapuri. The preparation, the contest, the pressure and the people made the experience unforgettable.",
    author: "Team Syntax Squad",
    college: "NIT Calicut",
  },
  {
    quote:
      "Competing at ICPC was a life-changing experience. The problems were hard, the community was amazing, and we came back stronger every year.",
    author: "Team ByteForce",
    college: "IIT Bombay",
  },
  {
    quote:
      "The practice resources and mentorship provided made all the difference. We went from regionals to the world finals in just two years.",
    author: "Team AlgoRhythm",
    college: "BITS Pilani",
  },
];

export default function ParticipantTestimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  },[])

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden flex h-full w-full max-w-2xl" style={{ height: "280px" }}>
      <div className="relative w-36 sm:w-44 flex-shrink-0">
        <Image
          src="/assets/team_image.png"
          alt="ICPC participants"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3">
            They came to compete. They left with an ICPC story.
          </h3>
          <span className="text-4xl text-orange-400 leading-none font-serif">&ldquo;</span>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed line-clamp-3">{t.quote}</p>
          <p className="text-sm font-bold text-gray-900 mt-3">— {t.author}</p>
          <p className="text-xs text-gray-500">{t.college}</p>
        </div>

        <div className="flex gap-1.5 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-4 bg-orange-500" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

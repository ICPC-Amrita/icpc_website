import Image from "next/image";
import { Star, Send, Gamepad2, Building2, Utensils, HeartHandshake, Quote } from "lucide-react";

const activities = [
  { src: "/assets/why-amrita/rubics.png", label: "Rubik's Cube\nSessions" },
  { src: "/assets/why-amrita/chess.jpg", label: "Chess\nChampionship" },
  { src: "/assets/why-amrita/music.JPG", label: "Musical\nNight" },
  { src: "/assets/why-amrita/dinner.png", label: "Banquet\nDinner" },
];

const testimonials = [
  {
    initials: "A",
    color: "bg-orange-400",
    quote:
      "ICPC Amrita was my first contest. The experience, the hospitality and the people — everything was absolutely amazing!",
    name: "Aditya, NIT Trichy",
  },
  {
    initials: "S",
    color: "bg-blue-500",
    quote:
      "The airport theme finals was something I'll never forget. And yes, that ticket to World Finals was the best moment!",
    name: "Sneha, IIT Allahabad",
  },
  {
    initials: "R",
    color: "bg-indigo-400",
    quote:
      "Best organised contest I've ever participated in. Everything was just perfect.",
    name: "Rohan, VIT Pune",
  },
];

const subsections = [
  {
    number: "01",
    title: "Highest Seats, Higher Chances",
    description:
      "We offer the highest number of onsite seats in Asia West, increasing your chances of qualifying to the regionals from the online round.",
    image: "/assets/why-amrita/image2.png",
    decoration: (
      <div className="flex items-end gap-1 mt-6">
        <div className="flex items-end gap-0.5">
          <span className="block w-3 bg-blue-200 rounded-sm h-5" />
          <span className="block w-3 bg-blue-300 rounded-sm h-8" />
          <span className="block w-3 bg-blue-500 rounded-sm h-12" />
          <span className="block w-3 bg-blue-600 rounded-sm h-16" />
        </div>
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mb-1 ml-1" />
      </div>
    ),
  },
  {
    number: "02",
    title: "Theme Based Finals Experience",
    description:
      "Every year, we create a unique theme for finals that you'll remember for life.\n\nLast year, it was the Airport! Who knows what's next?\n\nIt's more than just a contest— it's an experience.",
    image: "/assets/why-amrita/image3.png",
    decoration: (
      <div className="mt-6">
        <Send className="w-10 h-10 text-blue-400 rotate-12" />
      </div>
    ),
  },
  {
    number: "03",
    title: "Beyond the Contest",
    description:
      "We believe in a complete experience that helps you relax, connect and celebrate with your friends.",
    rightContent: (
      <div className="lg:w-[62%] flex items-center justify-center px-6 py-6">
        <div className="grid grid-cols-4 gap-3 w-full">
          {activities.map((a) => (
            <div key={a.label} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <div className="relative h-36 lg:h-44 w-full">
                <Image src={a.src} alt={a.label} fill className="object-cover" />
              </div>
              <div className="bg-white px-3 py-2">
                <span className="text-gray-800 text-xs font-semibold leading-tight whitespace-pre-line block">
                  {a.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    decoration: (
      <div className="mt-6">
        <Gamepad2 className="w-10 h-10 text-purple-400" />
      </div>
    ),
  },
  {
    number: "04",
    title: "Hospitality That Feels Like Home",
    description:
      "From comfortable stay to delicious food, we take care of everything so you can focus on what matters — performing your best!",
    image: "/assets/why-amrita/amrtia.png",
    decoration: (
      <div className="flex flex-wrap gap-3 mt-6">
        {[
          { icon: <Building2 className="w-5 h-5 text-blue-600" />, label: "Comfortable\nStay" },
          { icon: <Utensils className="w-5 h-5 text-green-600" />, label: "Delicious\nFood" },
          { icon: <HeartHandshake className="w-5 h-5 text-blue-500" />, label: "Warm &\nFriendly Support" },
        ].map((chip) => (
          <div key={chip.label} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <div className="flex-shrink-0 bg-blue-50 p-1.5 rounded-md">{chip.icon}</div>
            <span className="text-gray-700 text-xs font-semibold leading-tight whitespace-pre-line">
              {chip.label}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function WhatMakesSpecial() {
  return (
    <section className="bg-white py-16 px-8 lg:px-16">
      {/* Heading */}
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-14">
        What makes{" "}
        <span className="text-blue-600 border-b-2 border-blue-400 pb-0.5">
          ICPC Amrita
        </span>{" "}
        special?
      </h2>

      <div className="max-w-[100rem] mx-auto flex flex-col gap-6">
        {/* Subsections 01–04 */}
        {subsections.map((item) => (
          <div
            key={item.number}
            className="flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <div className="lg:w-[38%] bg-white p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center mb-5">
                  <span className="text-white text-xs font-bold">{item.number}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
              {item.decoration}
            </div>

            {item.rightContent ? (
              item.rightContent
            ) : (
              <div className="lg:w-[62%] flex items-center justify-center px-6 py-6">
                <div className="relative w-full h-52 lg:h-64 rounded-xl overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Row: 05 Goodies + Testimonials */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Section 05 — Goodies */}
          <div className="lg:w-[40%] flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Left text */}
            <div className="w-full lg:w-[48%] bg-white p-8 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center mb-5">
                  <span className="text-white text-xs font-bold">05</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  Goodies, Swag &amp; More!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Exciting goodies, exclusive merchandise &amp; surprise gifts await you!
                </p>
              </div>
            </div>
            {/* Right image */}
            <div className="w-full lg:w-[52%] flex items-center justify-center  px-4 py-6">
              <div className="relative w-full h-48 lg:h-56 rounded-xl overflow-hidden">
                <Image
                  src="/assets/why-amrita/goodies.png"
                  alt="ICPC Goodies and Swag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="lg:w-[60%] rounded-2xl border border-gray-100 shadow-sm bg-white p-8 lg:p-10 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-8 h-8 text-blue-600 fill-blue-600 flex-shrink-0" />
              <h3 className="text-xl lg:text-2xl font-bold text-blue-700">
                Voices from Our Participants
              </h3>
            </div>

            {/* Three testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              {testimonials.map((t) => (
                <div key={t.name} className="flex flex-col gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-sm font-bold">{t.initials}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.quote}</p>
                  <p className="text-gray-800 text-xs font-semibold">— {t.name}</p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="w-3 h-3 rounded-full bg-gray-300" />
              <span className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

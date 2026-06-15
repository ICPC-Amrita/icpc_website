'use client'

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Shuffle from '../Shuffle';
import TeamRegistrationModal from '../modal/TeamRegistrationModal';
export default function ShuffleHero() {

      const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      const [timeLeftEnd, setTimeLeftEnd] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Added for contest end countdown
      const [showTimer, setShowTimer] = useState(true);
      const [showEndTimer, setShowEndTimer] = useState(false); // added for contest end countdown
      useEffect(() => {
          const prelimsDate = new Date('2026-06-11T10:00:00').getTime();
          const contestEndDate = new Date('2026-06-15T09:00:00').getTime(); // ADD THIS LINE
  
          
          const updateCountdown = () => {
              const now = new Date().getTime();
              const distance = prelimsDate - now;
              const distanceEnd = contestEndDate - now; // ADD THIS LINE
  
  
              // Hide timer when contest starts (at 1:30 PM)
              setShowTimer(distance > 0);
              setShowEndTimer(distance <= 0 && distanceEnd > 0); // ADD THIS LINE
  
  
              if (distance > 0) {
                  setTimeLeft({
                      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                      seconds: Math.floor((distance % (1000 * 60)) / 1000)
                  });
              } else {
                  setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
              }
  
              if (distanceEnd > 0) {
              setTimeLeftEnd({
                  days: Math.floor(distanceEnd / (1000 * 60 * 60 * 24)),
                  hours: Math.floor((distanceEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                  minutes: Math.floor((distanceEnd % (1000 * 60 * 60)) / (1000 * 60)),
                  seconds: Math.floor((distanceEnd % (1000 * 60)) / 1000)
              });
          } else {
              setTimeLeftEnd({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
  
          };
  
          updateCountdown();
          const interval = setInterval(updateCountdown, 1000);
  
          return () => clearInterval(interval);
      }, []);

  return (
    <>
      <TeamRegistrationModal />
      <section className="flex flex-col lg:flex-row min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-24 xl:pt-20 max-w-7xl mx-auto gap-x-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-8">

      <div className="flex-1 flex flex-col justify-center py-6 lg:py-20">
        {/* <span className="block mb-4 text-sm text-blue-600 font-medium">
          Programming Competition
        </span> */}

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-4">
          ICPC 2026
          <br />
          <span className="text-blue-600">AMRITAPURI REGIONALS</span>
        </h1>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
          <Link href="/reach-us/bengaluru" className="hover:text-blue-600">
            Bengaluru
          </Link>{" "}
          ,{" "}
          <Link href="/reach-us/coimbatore" className="hover:text-blue-600">
            Coimbatore
          </Link>{" "}
          ,{" "}
          <Link href="/reach-us/amritapuri" className="hover:text-blue-600">
            Kollam
          </Link>{" "}
          <Link href="/reach-us/mysuru" className="hover:text-blue-600">
          , Mysuru
          </Link>

        </p>

<button className="group self-start inline-flex items-center gap-3 border-2 border-black bg-white px-6 py-3 text-base font-semibold">

  <span className="relative overflow-hidden">
    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
      Coming Soon
    </span>

    <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
      Coming Soon
    </span>
  </span>

  <div className="pointer-events-none flex h-5 w-5 overflow-hidden">
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 text-red-700"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>

    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 text-blue-700"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </div>

</button>

      
          {/* Countdown Timer - Left Side - Only show before contest start/s */}
    {/* {showTimer && (
      <div className="mt-8">
        <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
          Prelims starts in:
        </p>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeft.days}} aria-live="polite" aria-label="days">{timeLeft.days}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Days</span>
          </div>
          <div className="flex flex-col p-2 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeft.hours}} aria-live="polite" aria-label="hours">{timeLeft.hours}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Hours</span>
          </div>
          <div className="flex flex-col p-2 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeft.minutes}} aria-live="polite" aria-label="minutes">{timeLeft.minutes}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Min</span>
          </div>
          <div className="flex flex-col p-2 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeft.seconds}} aria-live="polite" aria-label="seconds">{timeLeft.seconds}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Sec</span>
          </div>
        </div>
      </div>
    )} */}

    {showEndTimer && (
      <div className="mt-8">
        <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 ">
          Registration starts in:
        </p>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-1 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeftEnd.days}} aria-live="polite" aria-label="days">{timeLeftEnd.days}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Days</span>
          </div>
          <div className="flex flex-col p-1 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeftEnd.hours}} aria-live="polite" aria-label="hours">{timeLeftEnd.hours}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Hours</span>
          </div>
          <div className="flex flex-col p-1 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeftEnd.minutes}} aria-live="polite" aria-label="minutes">{timeLeftEnd.minutes}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Min</span>
          </div>
          <div className="flex flex-col p-1 bg-blue-700 rounded-box text-white min-w-[75px]">
            <span className="countdown font-mono text-5xl flex justify-center">
              <span style={{"--value":timeLeftEnd.seconds}} aria-live="polite" aria-label="seconds">{timeLeftEnd.seconds}</span>
            </span>
            <span className="text-[10px] uppercase font-medium mt-1">Sec</span>
          </div>
        </div>
      </div>
    )}
      <div className="mt-12 self-start flex justify-center items-center gap-6 sm:gap-10 md:gap-16">
          <div className="text-center flex flex-col gap-2">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-none whitespace-nowrap">
              <Shuffle text="OCT 3" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} loopDelay={0} />
            </div>
            <div className="text-base sm:text-md text-blue-700 font-semibold tracking-wider uppercase whitespace-nowrap">Online Prelims</div>
          </div>

          <div className="hidden sm:block w-px bg-gray-300 h-16"></div>

          <div className="text-center flex flex-col gap-2">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-none whitespace-nowrap">
              <Shuffle text="JAN 1-2" shuffleDirection="right" duration={0.35} animationMode="evenodd" shuffleTimes={1} ease="power3.out" stagger={0.03} threshold={0.1} triggerOnce={true} triggerOnHover={true} respectReducedMotion={true} loop={false} loopDelay={0} />
            </div>
            <div className="text-base sm:text-md text-blue-700 font-semibold tracking-wider uppercase whitespace-nowrap">Onsite Finals</div>
          </div>
        </div>

      </div>

      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <ShuffleGrid />
      </div>

    </section>
    </>
  )
}

const shuffle = (array) => {
  const newArray = [...array]
  let currentIndex = newArray.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    ;[newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ]
  }

  return newArray
}

const squareData = [
  { id: 1, src: "/coursel_images/2025/firstplace.jpg" },
  { id: 2, src: "/coursel_images/2025/secondplace.jpg" },
  { id: 3, src: "/coursel_images/2025/thirdplace.jpg" },
  { id: 4, src: "/coursel_images/2025/frame.JPG" },
  { id: 5, src: "/coursel_images/2025/teamphoto.JPG" },
  { id: 6, src: "/coursel_images/2025/veronica.JPG" },
  { id: 7, src: "/coursel_images/2025/veronica-2.JPG" },
  { id: 8, src: "/coursel_images/2025/singer.JPG" },
  { id: 9, src: "/coursel_images/2025/banquet.JPG" },
  { id: 10, src: "/coursel_images/2025/banquet.JPG" },
  { id: 11, src: "/coursel_images/2025/womenonlyteam.JPG" },
  { id: 12, src: "/coursel_images/2025/topteams.jpg" },
]

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="relative w-full h-full rounded-md overflow-hidden"
    >
      <Image
        src={sq.src}
        alt="ICPC event"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
    </motion.div>
  ))
}

function ShuffleGrid() {
  const timeoutRef = useRef(null)
  const [squares, setSquares] = useState([])

  useEffect(() => {
    setSquares(generateSquares())

    const shuffleSquares = () => {
      setSquares(generateSquares())
      timeoutRef.current = setTimeout(shuffleSquares, 3000)
    }

    timeoutRef.current = setTimeout(shuffleSquares, 3000)

    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div className="w-full max-w-[600px] aspect-square grid grid-cols-4 grid-rows-4 gap-[3px] overflow-hidden">
      {squares}
    </div>
  )
}
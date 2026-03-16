'use client'

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function ShuffleHero() {
  return (
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

</button>    </div>

      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <ShuffleGrid />
      </div>

    </section>
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
  { id: 4, src: "/coursel_images/2025/frame.jpg" },
  { id: 5, src: "/coursel_images/2025/teamphoto.jpg" },
  { id: 6, src: "/coursel_images/2025/veronica.jpg" },
  { id: 7, src: "/coursel_images/2025/veronica-2.jpg" },
  { id: 8, src: "/coursel_images/2025/singer.jpg" },
  { id: 9, src: "/coursel_images/2025/banquet.jpg" },
  { id: 10, src: "/coursel_images/2025/banquet.jpg" },
  { id: 11, src: "/coursel_images/2025/womenonlyteam.jpg" },
  { id: 12, src: "/coursel_images/2025/topteams.jpg" },
]

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-center bg-cover bg-no-repeat rounded-md"
      style={{
        backgroundImage: `url(${sq.src})`,
      }}
    />
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
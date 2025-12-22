"use client"

import { useState, useMemo } from "react"
import { Calendar, AlertCircle } from "lucide-react"

export default function EventSchedulePage() {
  const [activeTab, setActiveTab] = useState("program")
  const [activeDay, setActiveDay] = useState("day1")

  // Schedule data organized by day
  const scheduleData = useMemo(() => ({
    day1: [
      {
        time: "08:00 - 09:30 AM",
        activity: "Breakfast",
        category: "FOOD"
      },
      {
        time: "08:30 - 05:00 PM",
        activity: "Registration Open",
        category: null
      },
      {
        time: "12:30 - 01:30 PM",
        activity: "Lunch",
        category: "FOOD"
      },
      {
        time: "02:30 - 04:00 PM",
        activity: "Opening Ceremony",
        category: "CEREMONY"
      },
      {
        time: "04:00 - 04:30 PM",
        activity: "Tech Talk - JetBrains",
        category: "TALK",
        speaker: "JetBrains Team",
        avatar: "/organisers/aravindbl4.png",
        name: "Aravind B L",
        designation: "Representatives from JetBrains"
      },
      {
        time: "05:00 - 07:00 PM",
        activity: "Practice Contest",
        category: "CONTEST"
      },
      {
        time: "07:30 - 10:00 PM",
        activity: "Banquet Dinner",
        category: "FOOD"
      }
    ],
    day2: [
      {
        time: "07:00 - 08:00 AM",
        activity: "Breakfast",
        category: "FOOD"
      },
      {
        time: "08:30 - 01:30 PM",
        activity: "Main Contest",
        category: "CONTEST"
      },
      {
        time: "02:30 - 03:30 PM",
        activity: "Lunch",
        category: "FOOD"
      },
      {
        time: "03:30 - 04:30 PM",
        activity: "Cultural Programs",
        category: null
      },
      {
        time: "04:30 - 06:30 PM",
        activity: "Closing Ceremony & Awards",
        category: "CEREMONY"
      },
      {
        time: "07:30 - 08:30 PM",
        activity: "Dinner",
        category: "FOOD"
      }
    ]
  }), [])

  // Hospitality data
  const hospitalityData = [
    {
      time: "Breakfast",
      activity: "Main Dining Hall - Ground Floor",
      category: "MESS"
    },
    {
      time: "Lunch",
      activity: "Main Dining Hall - Ground Floor",
      category: "MESS"
    },
    {
      time: "Dinner",
      activity: "Main Dining Hall - Ground Floor",
      category: "MESS"
    }
  ]

  // Transport data
  const transportData = [
    {
      time: "Day 1 - Arrival",
      activity: "Bus service from Railway Station to Venue",
      category: "TRANSPORT"
    },
    {
      time: "Day 2 - Departure",
      activity: "Bus service from Venue to Railway Station",
      category: "TRANSPORT"
    }
  ]

  const handleDayChange = (day) => {
    setActiveDay(day)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-8 sm:py-10 md:py-12">
          {/* Header Section */}
          <header className="mb-6 sm:mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-wide text-gray-600">
              Agenda
            </p>
            <h1 className="mt-2 text-xl sm:text-2xl font-semibold text-blue-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Contest Schedule
            </h1>
          </header>

          {/* Tab Navigation */}
          <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-8 border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => handleTabChange("program")}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors focus:outline-none whitespace-nowrap ${
                activeTab === "program"
                  ? "border-b-2 border-blue-900 text-blue-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              type="button"
            >
              📋 Program
            </button>
            <button
              onClick={() => handleTabChange("hospitality")}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors focus:outline-none whitespace-nowrap ${
                activeTab === "hospitality"
                  ? "border-b-2 border-blue-900 text-blue-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              type="button"
            >
              🏨 Hospitality
            </button>
            <button
              onClick={() => handleTabChange("transport")}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors focus:outline-none whitespace-nowrap ${
                activeTab === "transport"
                  ? "border-b-2 border-blue-900 text-blue-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              type="button"
            >
              🚌 Transport
            </button>
            <button
              onClick={() => handleTabChange("timeline")}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors focus:outline-none whitespace-nowrap ${
                activeTab === "timeline"
                  ? "border-b-2 border-blue-900 text-blue-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              type="button"
            >
              🕐 Timeline
            </button>
          </div>

          {/* Program Tab Content */}
          {activeTab === "program" && (
            <section aria-label={`Schedule for ${activeDay === "day1" ? "Day 1" : "Day 2"}`}>
              {/* Day Toggle Buttons - Top Right */}
              <div className="flex justify-end gap-2 sm:gap-3 mb-4">
                <button
                  onClick={() => handleDayChange("day1")}
                  className={`px-3 sm:px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 ${
                    activeDay === "day1"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  type="button"
                >
                  <span className="text-xs sm:text-sm font-medium">Day 1</span>
                </button>
                <button
                  onClick={() => handleDayChange("day2")}
                  className={`px-3 sm:px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 ${
                    activeDay === "day2"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  type="button"
                >
                  <span className="text-xs sm:text-sm font-medium">Day 2</span>
                </button>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[250px_1fr] gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg bg-blue-900 text-white">
                <div>Time</div>
                <div>Activity</div>
              </div>

              {/* Schedule Items */}
              <div className="bg-gray-50">
                {scheduleData[activeDay].map((item, index) => (
                  <ScheduleItem key={index} item={item} />
                ))}
              </div>

              {/* Day Toggle Buttons - Bottom Right */}
              <div className="flex justify-end gap-2 sm:gap-3 mt-4">
                <button
                  onClick={() => handleDayChange("day1")}
                  className={`px-3 sm:px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 ${
                    activeDay === "day1"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  type="button"
                >
                  <span className="text-xs sm:text-sm font-medium">Day 1</span>
                </button>
                <button
                  onClick={() => handleDayChange("day2")}
                  className={`px-3 sm:px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 ${
                    activeDay === "day2"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  type="button"
                >
                  <span className="text-xs sm:text-sm font-medium">Day 2</span>
                </button>
              </div>
            </section>
          )}

          {/* Hospitality Tab Content */}
          {activeTab === "hospitality" && (
            <section aria-label="Hospitality Information">
              <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[250px_1fr] gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg bg-blue-900 text-white">
                <div>Meal</div>
                <div>Location</div>
              </div>

              <div className="bg-gray-50">
                {hospitalityData.map((item, index) => (
                  <ScheduleItem key={index} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Transport Tab Content */}
          {activeTab === "transport" && (
            <section aria-label="Transport Information">
              <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[250px_1fr] gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 font-semibold text-sm sm:text-base md:text-lg bg-blue-900 text-white">
                <div>Schedule</div>
                <div>Route</div>
              </div>

              <div className="bg-gray-50">
                {transportData.map((item, index) => (
                  <ScheduleItem key={index} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Timeline Tab Content - Using Schedule Data */}
          {activeTab === "timeline" && (
            <section aria-label="Event Timeline">
              <div className="mb-6 text-center">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Event Timeline</h2>
              </div>

              {/* Day 1 Timeline */}
              <div className="mb-12">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-6 text-center">Day 1</h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-900"></div>

                  {scheduleData.day1.map((item, index) => (
                    <div
                      key={index}
                      className={`relative mb-6 sm:mb-8 ${
                        index % 2 === 0 ? "text-right pr-8 sm:pr-12" : "text-left pl-8 sm:pl-12"
                      }`}
                    >
                      <div className={`w-5/12 ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                        {/* Time badge */}
                        <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"} mb-2`}>
                          <span className="inline-block px-2 sm:px-3 py-1 bg-blue-900 text-white text-xs font-semibold">
                            {item.time}
                          </span>
                        </div>

                        {/* Activity */}
                        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.activity}</h4>

                        {/* Additional info */}
                        {item.name && <p className="text-xs sm:text-sm text-gray-600">{item.name}</p>}
                        {item.designation && <p className="text-xs text-gray-500">{item.designation}</p>}
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-1/2 top-2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 Timeline */}
              <div className="mb-12">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-6 text-center">Day 2</h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-900"></div>

                  {scheduleData.day2.map((item, index) => (
                    <div
                      key={index}
                      className={`relative mb-6 sm:mb-8 ${
                        index % 2 === 0 ? "text-right pr-8 sm:pr-12" : "text-left pl-8 sm:pl-12"
                      }`}
                    >
                      <div className={`w-5/12 ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                        {/* Time badge */}
                        <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"} mb-2`}>
                          <span className="inline-block px-2 sm:px-3 py-1 bg-blue-900 text-white text-xs font-semibold">
                            {item.time}
                          </span>
                        </div>

                        {/* Activity */}
                        <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.activity}</h4>

                        {/* Additional info */}
                        {item.name && <p className="text-xs sm:text-sm text-gray-600">{item.name}</p>}
                        {item.designation && <p className="text-xs text-gray-500">{item.designation}</p>}
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-1/2 top-2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Important Announcement */}
          <aside
            className="mt-8 sm:mt-10 border-l-4 border-blue-900 px-4 sm:px-6 py-4 sm:py-5 bg-gray-50"
            aria-labelledby="announcement-heading"
          >
            <h2
              id="announcement-heading"
              className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-900 flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Important Announcement
            </h2>
            <ol className="list-decimal space-y-2 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-700">
              <li>Participants are requested to complete registration before the Opening Ceremony.</li>
              <li>Please adhere strictly to reporting times for all activities.</li>
              <li>The schedule is subject to minor changes based on operational requirements.</li>
            </ol>
          </aside>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Components ---------------- */

function ScheduleItem({ item }) {
  return (
    <article className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[250px_1fr] gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 hover:bg-white transition-colors">
      <time className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">{item.time || item.date}</time>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {item.avatar && (
          <img
            src={item.avatar}
            alt={item.speaker || "Speaker"}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
            loading="lazy"
          />
        )}
        <div className="flex flex-col min-w-0">
          <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 break-words">{item.activity || item.title}</span>
          {item.name && <span className="text-xs sm:text-sm text-gray-600 mt-1 break-words">{item.name}</span>}
          {item.designation && <span className="text-xs text-gray-500 mt-0.5 break-words">{item.designation}</span>}
        </div>
      </div>
    </article>
  )
}
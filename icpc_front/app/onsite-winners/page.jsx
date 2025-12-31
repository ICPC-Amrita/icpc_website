'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"

const teamsData = {
  winner: {
    teamName: "Rank: #1  | Code Crushers",
    college: "International Institute of Information Technology, Hyderabad",
    rank: "Winner ",
    teamPhoto: "/coursel_images/2.jpg",
    members: [
      {
        name: "Alex Johnson",
        year: "3rd Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
      },
      {
        name: "Sarah Chen",
        year: "4th Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80"
      },
      {
        name: "Mike Davis",
        year: "3rd Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80"
      }
    ],
    details: {
      problemsAttempted: 12,
      problemsSolved: 10,
      totalTime: "4h 32m",
      penalty: "20 minutes",
      finalScore: 2850
    }
  },
  firstRunnerUp: {
    teamName: "Rank: #2  | Debug Demons",
    college: "International Institute of Information Technology, Hyderabad",
    rank: "1st Runner Up",
    teamPhoto: "/coursel_images/2.jpg",
    members: [
      {
        name: "Emily Brown",
        year: "2nd Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80"
      },
      {
        name: "David Wilson",
        year: "3rd Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80"
      },
      {
        name: "Lisa Garcia",
        year: "4th Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80"
      }
    ],
    details: {
      problemsAttempted: 11,
      problemsSolved: 9,
      totalTime: "4h 45m",
      penalty: "30 minutes",
      finalScore: 2650
    }
  },
  secondRunnerUp: {
    teamName: "Rank: #3  | Binary Beasts",
    college: "International Institute of Information Technology, Hyderabad",
    rank: "2nd Runner Up",
    teamPhoto: "/coursel_images/2.jpg",
    members: [
      {
        name: "Chris Martinez",
        year: "3rd Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80"
      },
      {
        name: "Anna Lee",
        year: "2nd Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/zahra-christensen?fm=webp&q=80"
      },
      {
        name: "Tom Anderson",
        year: "4th Year",
        college: "International Institute of Information Technology, Hyderabad",
        image: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80"
      }
    ],
    details: {
      problemsAttempted: 10,
      problemsSolved: 8,
      totalTime: "5h 10m",
      penalty: "25 minutes",
      finalScore: 2400
    }
  }
}

export default function CompetitionResults() {
  const [selectedView, setSelectedView] = useState("all")
  const [rightView, setRightView] = useState("members")

  const renderAllTeams = () => (
    <div className="mt-12 md:mt-16">
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <div 
          className="flex flex-col gap-5 cursor-pointer" 
          onClick={() => {
            setSelectedView("winner")
            setRightView("members")
          }}
        >
          <div className="relative">
            <img
              src={teamsData.winner.teamPhoto}
              alt={teamsData.winner.teamName}
              className="aspect-[4/3] w-full object-cover   shadow-lg"
            />
            {/* <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 text-sm font-semibold shadow-lg">
              🏆 Winner
            </div> */}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {teamsData.winner.teamName}
            </h3>
            <p className="text-base text-gray-700 mt-1">
              {teamsData.winner.college} | {teamsData.winner.rank}
            </p>
          </div>
        </div>

        <div 
          className="flex flex-col gap-5 cursor-pointer" 
          onClick={() => {
            setSelectedView("first")
            setRightView("members")
          }}
        >
          <div className="relative">
            <img
              src={teamsData.firstRunnerUp.teamPhoto}
              alt={teamsData.firstRunnerUp.teamName}
              className="aspect-[4/3] w-full object-cover   shadow-lg"
            />
            {/* <div className="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 text-sm font-semibold shadow-lg">
              🥈 1st Runner Up
            </div> */}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {teamsData.firstRunnerUp.teamName}
            </h3>
            <p className="text-base text-gray-700 mt-1">
              {teamsData.firstRunnerUp.college} | {teamsData.firstRunnerUp.rank}
            </p>
          </div>
        </div>

        <div 
          className="flex flex-col gap-5 cursor-pointer" 
          onClick={() => {
            setSelectedView("second")
            setRightView("members")
          }}
        >
          <div className="relative">
            <img
              src={teamsData.secondRunnerUp.teamPhoto}
              alt={teamsData.secondRunnerUp.teamName}
              className="aspect-[4/3] w-full object-cover   shadow-lg"
            />
            {/* <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 text-sm font-semibold shadow-lg">
              🥉 2nd Runner Up
            </div> */}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {teamsData.secondRunnerUp.teamName}
            </h3>
            <p className="text-base text-gray-700 mt-1">
              {teamsData.secondRunnerUp.college} | {teamsData.secondRunnerUp.rank}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderIndividualTeam = () => {
    const teamKey = selectedView === "winner" ? "winner" : 
                    selectedView === "first" ? "firstRunnerUp" : "secondRunnerUp"
    const team = teamsData[teamKey]
    
    const borderColor = selectedView === "winner" ? "border-yellow-500" :
                       selectedView === "first" ? "border-gray-400" : "border-orange-600"

    return (
      <div className="mt-12 md:mt-16">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Team Photo */}
          <div className="flex flex-col gap-6">
            <img
              src={team.teamPhoto}
              alt={team.teamName}
              className={`aspect-[4/3] w-full object-cover  shadow-lg`}
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {team.teamName}
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                {team.college}
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                {team.rank}
              </p>
            </div>
          </div>

          {/* Right Side - Toggle Content */}
          <div className="flex flex-col">
            {/* Right Side Toggle - Both Buttons Always Visible */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                size="lg"
                onClick={() => setRightView("members")}
                // disabled={rightView === "members"}
                className={
                  rightView === "members"
                    ? "bg-blue-900 text-white shadow-lg cursor-not-allowed rounded-none"
                    : "bg-white text-black border border-black hover:bg-gray-100 rounded-none"
                }
              >
                Team Members
              </Button>
              <Button
                size="lg"
                onClick={() => setRightView("details")}
                // disabled={rightView === "details"}
                className={
                  rightView === "details"
                    ? "bg-blue-900 text-white shadow-lg cursor-not-allowed rounded-none"
                    : "bg-white text-black border border-black hover:bg-gray-100 rounded-none"
                }
              >
                Performance
              </Button>
            </div>

            {/* Members View */}
            {rightView === "members" && (
              <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:gap-y-12">
                {team.members.map((member) => (
                  <li key={member.name} className="flex flex-col gap-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-square w-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {member.name}
                      </h4>
                      <p className="text-base text-gray-700 mt-1">
                        {member.year}
                      </p>
                      <p className="text-base text-gray-600">
                        {member.college}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Details View */}
            {rightView === "details" && (
              <div className="space-y-8">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Problems Attempted</h4>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">
                    {team.details.problemsAttempted}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Problems Solved</h4>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">
                    {team.details.problemsSolved}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Time Taken</h4>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">
                    {team.details.totalTime}
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Penalty Time</h4>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">
                    {team.details.penalty}
                  </p>
                </div>
                <div className="pb-6">
                  <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Final Score</h4>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">
                    {team.details.finalScore}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-container px-4 md:px-8 py-12 pt-32 md:pt-40">
      {/* Header */}
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <span className="text-sm font-semibold text-gray-600 md:text-base">
          Competition Results
        </span>

        <h2 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
          Winners Announcement
        </h2>

        <p className="mt-4 text-lg text-gray-600 md:mt-5 md:text-xl">
          Congratulations to all the teams who participated and showcased exceptional skills and teamwork.
        </p>

        {/* Main Toggle Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button
            size="lg"
            onClick={() => setSelectedView("all")}
            // disabled={selectedView === "all"}
            className={
              selectedView === "all"
                ? "bg-blue-900 text-white shadow-lg cursor-not-allowed rounded-none"
                : "bg-white text-black border border-black hover:bg-gray-100 rounded-none"
            }
          >
            All
          </Button>
          <Button
            size="lg"
            onClick={() => {
              setSelectedView("winner")
              setRightView("members")
            }}
            // disabled={selectedView === "winner"}
            className={
              selectedView === "winner"
                ? "bg-blue-900 text-white shadow-lg cursor-not-allowed rounded-none"
                : "bg-white text-black border border-black hover:bg-gray-100 rounded-none"
            }
          >
            Winner
          </Button>
          <Button
            size="lg"
            onClick={() => {
              setSelectedView("first")
              setRightView("members")
            }}
            // disabled={selectedView === "first"}  //commented disabled
            className={
              selectedView === "first"
                ? "bg-blue-900 text-white shadow-lg cursor-not-allowed rounded-none"
                : "bg-white text-black border border-black hover:bg-gray-100 rounded-none"
            }
          >
            1st Runner Up
          </Button>
          <Button
            size="lg"
            onClick={() => {
              setSelectedView("second")
              setRightView("members")
            }}
            // disabled={selectedView === "second"}
            className={
              selectedView === "second"
                ? "bg-blue-900 text-white shadow-lg cursor-not-allowed rounded-none"
                : "bg-white text-black border border-black hover:bg-gray-100 rounded-none"
            }
          >
            2nd Runner Up
          </Button>
        </div>
      </div>

      {/* Content Area */}
      {selectedView === "all" ? renderAllTeams() : renderIndividualTeam()}
    </div>
  )
}
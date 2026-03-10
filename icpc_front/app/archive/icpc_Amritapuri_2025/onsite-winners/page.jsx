'use client'
import { Button } from "@/app/archive/components25/ui/button"
import { useState } from "react"

const teamsData = {
  winner: {
    teamName: "Rank: #1  | Div4Maxxer",
    college: "IIT - Kharagpur",
    rank: "Winner ",
    teamPhoto: "/winners/winners-25/winner3.webp",
    details: {
      problemsAttempted: 11,
      problemsSolved: 11,
      totalTime: "14:40:33",
      penalty: "6",
      finalScore: 1100
    }
  },
  firstRunnerUp: {
    teamName: "Rank: #2  | hehe i do cp",
    college: "IIT, Roorkee",
    rank: "1st Runner Up",
    teamPhoto: "/winners/winners-25/winner1.webp",
    details: {
      problemsAttempted: 11,
      problemsSolved: 10,
      totalTime: "22:48:50",
      penalty: "6",
      finalScore: 1000
    }
  },
  secondRunnerUp: {
    teamName: "Rank: #3  | TOURISTS",
    college: "IIT, Hyderabad",
    rank: "2nd Runner Up",
    teamPhoto: "/winners/winners-25/winner2.webp",
    // members: [
    //   {
    //     name: "Chris Martinez",
    //     year: "3rd Year",
    //     college: "International Institute of Information Technology, Hyderabad",
    //     image: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80"
    //   },
    //   {
    //     name: "Anna Lee",
    //     year: "2nd Year",
    //     college: "International Institute of Information Technology, Hyderabad",
    //     image: "https://www.untitledui.com/images/avatars/zahra-christensen?fm=webp&q=80"
    //   },
    //   {
    //     name: "Tom Anderson",
    //     year: "4th Year",
    //     college: "International Institute of Information Technology, Hyderabad",
    //     image: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80"
    //   }
    // ],
    details: {
      problemsAttempted: 10,
      problemsSolved: 10,
      totalTime: "24:09:31",
      penalty: "4",
      finalScore: 1000
    }
  }
}

export default function CompetitionResults() {
  const [selectedView, setSelectedView] = useState("all")

  const renderAllTeams = () => (
    <div className="mt-12 md:mt-16">
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
    {/* Right - 1st Runner Up */}
        <div 
          className="flex flex-col gap-5 cursor-pointer" 
          onClick={() => {
            setSelectedView("first")
          }}
        >
          <div className="relative">
            <img
              src={teamsData.firstRunnerUp.teamPhoto}
              alt={teamsData.firstRunnerUp.teamName}
              className="aspect-[4/3] w-full object-contain "
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {teamsData.firstRunnerUp.teamName}
            </h3>
            <p className="text-base text-gray-700 mt-1">
              {teamsData.firstRunnerUp.college} | {teamsData.firstRunnerUp.rank}
            </p>
          </div>
        </div>

        {/* Center - Winner */}
        <div 
          className="flex flex-col gap-5 cursor-pointer" 
          onClick={() => {
            setSelectedView("winner")
          }}
        >
          <div className="relative">
            <img
              src={teamsData.winner.teamPhoto}
              alt={teamsData.winner.teamName}
              className="aspect-[4/3] w-full object-contain "
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {teamsData.winner.teamName}
            </h3>
            <p className="text-base text-gray-700 mt-1">
              {teamsData.winner.college} | {teamsData.winner.rank}
            </p>
          </div>
        </div>

          {/* Left - 2nd Runner Up */}
        <div 
          className="flex flex-col gap-5 cursor-pointer" 
          onClick={() => {
            setSelectedView("second")
          }}
        >
          <div className="relative">
            <img
              src={teamsData.secondRunnerUp.teamPhoto}
              alt={teamsData.secondRunnerUp.teamName}
              className="aspect-[4/3] w-full object-contain"
            />
          </div>
          <div className="text-center">
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

    return (
      <div className="mt-12 md:mt-16">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Side - Polaroid Photo */}
          <div className="flex flex-col items-center justify-center">
            <div className="p-4 w-full max-w-xl">
              <img
                src={team.teamPhoto}
                alt={team.teamName}
                className="w-full object-contain"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {team.teamName}
                </h3>
                <p className="text-base text-gray-700 mt-1">
                  {team.college}
                </p>
                <p className="text-base font-semibold text-gray-900 mt-1">
                  {team.rank}
                </p>
              </div>
            </div>
          </div>

         {/* Right Side - Performance */} 
         <div className="flex flex-col items-center justify-center"> 
         <div className="w-full max-w-lg px-4">
<h3 className="text-2xl font-semibold text-gray-900 mb-8 relative inline-block">
  Performance
  <span className="absolute left-0 -bottom-2 h-1 w-full bg-blue-900"></span>
</h3>


          <div className="space-y-8"> 
          {/* <div className="border-b border-gray-200 pb-6"> <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Problems Attempted</h4> <p className="text-3xl font-semibold text-gray-900 mt-2"> {team.details.problemsAttempted} </p> </div> */} 
          <div className="border-b border-gray-200 pb-6">
          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Problems Solved</h4>
          <p className="text-3xl font-semibold text-gray-900 mt-2"> {team.details.problemsSolved} </p>
          </div> 
          <div className="border-b border-gray-200 pb-6">
          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Time Taken</h4>
          <p className="text-3xl font-semibold text-gray-900 mt-2"> {team.details.totalTime} </p>
          </div> 
          <div className="border-b border-gray-200 pb-6">
          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Penalty</h4>
          <p className="text-3xl font-semibold text-gray-900 mt-2"> {team.details.penalty} </p>
          </div>
          <div className="pb-6"> 
          <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Final Score</h4>
          <p className="text-3xl font-semibold text-gray-900 mt-2"> {team.details.finalScore} </p> 
          </div>
          </div>
          </div>
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
          Top 3 Teams
        </h2>

        <p className="mt-4 text-lg text-gray-600 md:mt-5 md:text-xl">
          Congratulations to all the teams who participated and showcased exceptional skills and teamwork.
        </p>

        {/* Main Toggle Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button
            size="lg"
            onClick={() => setSelectedView("all")}
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
            }}
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
            }}
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
            }}
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
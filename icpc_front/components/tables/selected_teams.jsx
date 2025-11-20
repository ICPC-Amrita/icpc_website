'use client';

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Search, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FaClinicMedical, FaEmber, FaMedal, FaRegClock, FaRegTimesCircle } from 'react-icons/fa';

export default function SelectedTeams() {
    const [teamsData, setTeamsData] = useState([]);
    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showWomenOnly, setShowWomenOnly] = useState(false);
    const teamsPerPage = 40;
    const [selectedSite, setSelectedSite] = useState("");
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        const [showTimer, setShowTimer] = useState(true);
        
        useEffect(() => {
            const prelimsDate = new Date('2025-11-24T23:59:59').getTime();
            
            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = prelimsDate - now;
    
                // Hide timer when contest starts (at 1:30 PM)
                setShowTimer(distance > 0);
    
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
            };
    
            updateCountdown();
            const interval = setInterval(updateCountdown, 1000);
    
            return () => clearInterval(interval);
        }, []);

    useEffect(() => {
        const fetchCSVData = async () => {
            const response = await fetch('/data/ICPC Selected Teams for Amritapuri Regionals 2024.csv');
            const csvText = await response.text();
            const parsedData = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
            });
            setTeamsData(parsedData.data.map(row => ({
                ...row,
                isWomenOnly: row.isWomenOnly == 'true',
            })));
        };

        fetchCSVData();
    }, []);

    const filteredTeams = teamsData.filter((row) => {
        const matchesSearch =
            !searchedVal.length ||
            row.teamName?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.teamId?.toString().toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.institution?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.site?.toLowerCase().includes(searchedVal.toLowerCase());

        const matchesToggle = !showWomenOnly || row.isWomenOnly;
        const matchesSite = !selectedSite || row.site === selectedSite;

        return matchesSearch && matchesToggle && matchesSite;
    });

    // Reset to page 1 when search or filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchedVal, showWomenOnly, selectedSite]);

    // Pagination
    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam);

    const totalPages = Math.ceil(filteredTeams.length / teamsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleSiteFilter = (site) => {
        setShowWomenOnly(false);
        setSelectedSite(site);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
            {/* Header */}
           <div className="mb-8 text-center">
  <h1 className="text-3xl font-bold text-gray-900 mb-4">
    Teams Qualified for Amritapuri Onsite Round 
  </h1>

  <div className="text-sm md:text-base text-gray-600 space-y-4 max-w-4xl mx-auto">

    {/* Registration Fee Info - responsive */}
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
      <FaRegClock className="text-base sm:text-lg shrink-0" />

      <div className="flex flex-wrap justify-center gap-2">
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-semibold">
          Registration Fee Deadline: 24 November, 11:59 PM
        </span>
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-semibold">
          Fee: ₹4400 per team
        </span>
      </div>
    </div>

    {/* Info text */}
    <p className="text-left sm:text-center">
      Qualified teams are requested to pay the registration fees and submit their details through the form provided below. 
      Failing this will result in your slot
      being allotted to the next eligible team in the waitlist. Do remember that the registration fee
      is non-refundable.
    </p>

    {/* Countdown + Button */}
    {showTimer && (
      <div className="space-y-4">
        <div className="text-left sm:text-center">
          <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
            Time remaining:
          </p>

          <div className="flex justify-start sm:justify-center gap-1 sm:gap-2 items-center">
            <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
              <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeft.days}</span>
              <span className="text-[10px] text-gray-600 font-medium mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
              <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeft.hours}</span>
              <span className="text-[10px] text-gray-600 font-medium mt-1">Hr</span>
            </div>
            <div className="flex flex-col items-center bg-blue-100/50 rounded-lg px-3 py-2 min-w-[55px] shadow-sm">
              <span className="text-2xl font-bold text-blue-600 leading-none">{timeLeft.minutes}</span>
              <span className="text-[10px] text-gray-600 font-medium mt-1">Min</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
          <Link
            href="/prelims-ranklist"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
          >
            Fill the Registration fee form
          </Link>
        </div>
      </div>
    )}
  </div>
</div>


            {/* Search and Download */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-6">
                {/* Search Input */}
                <div className="flex rounded-full min-h-[3rem] w-full md:w-96 px-4 gap-2 bg-white items-center border border-gray-300 shadow-sm">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        className="text-sm md:text-base text-gray-900 flex-1 min-h-[3rem] outline-none bg-transparent"
                        placeholder="Search ID, team, institution, or site"
                        onChange={(e) => setSearchedVal(e.target.value)}
                        value={searchedVal}
                    />
                </div>
                

                {/* Download Button */}
                {/* <Link
                    href="selected-teams-v1"
                    title="Download the pdf containing selected teams"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
                >
                    <Download className="w-5 h-5" />
                    <span className="text-sm font-medium hidden sm:inline">Download PDF</span>
                </Link> */}
            </div>

            {/* Site Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button
                    className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedSite === ""
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("")}
                >
                    All Sites
                </button>
                <button
                    className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedSite === "Kollam"
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("Kollam")}
                >
                    Kollam
                </button>
                <button
                    className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedSite === "Coimbatore"
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("Coimbatore")}
                >
                    Coimbatore
                </button>
                <button
                    className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedSite === "Bengaluru"
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("Bengaluru")}
                >
                    Bengaluru
                </button>
                <button
                    className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        showWomenOnly
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                        setShowWomenOnly(!showWomenOnly);
                        setSelectedSite("");
                    }}
                >
                    {showWomenOnly ? '✓ Women Teams' : 'Women Teams'}
                </button>
            </div>

            {/* No Results Message */}
            {filteredTeams.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <p className="text-gray-600">No teams found matching your search.</p>
                </div>
            )}

            {/* Desktop Table */}
            {filteredTeams.length > 0 && (
                <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Team ID</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Team Name</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Institution</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Site</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTeams.map((entry, index) => (
                                    <tr
                                        key={index}
                                        className={`
                                            border-b border-gray-200 last:border-b-0 transition-colors duration-150
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                            hover:bg-blue-50
                                        `}
                                    >
                                        <td className="py-4 px-4">
                                            <div className="text-gray-700">{entry.teamId}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-gray-900">{entry.teamName}</span>
                                                {/* {entry.isWomenOnly && (
                                                    <span className="px-2 py-0.5 text-xs font-semibold bg-pink-100 text-pink-700 rounded-full">
                                                        Women
                                                    </span>
                                                )} */}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-600 text-sm">{entry.institution}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-700">{entry.site}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Mobile Cards */}
            {filteredTeams.length > 0 && (
                <div className="md:hidden space-y-3">
                    {currentTeams.map((entry, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <span className="font-semibold text-gray-900 break-words">{entry.teamName}</span>
                                        {/* {entry.isWomenOnly && (
                                            <span className="px-2 py-0.5 text-xs font-semibold bg-pink-100 text-pink-700 rounded-full">
                                                Women
                                            </span>
                                        )} */}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-1">
                                        ID: {entry.teamId}
                                    </div>
                                    <div className="text-sm text-gray-600 break-words">
                                        {entry.institution}
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                                <div className="text-sm">
                                    <span className="text-gray-600">Site: </span>
                                    <span className="font-semibold text-gray-900">{entry.site}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {filteredTeams.length > 0 && (
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mt-6">
                    <div className="text-sm text-gray-600 text-center md:text-left">
                        Showing {indexOfFirstTeam + 1} to {Math.min(indexOfLastTeam, filteredTeams.length)} of {filteredTeams.length} teams
                    </div>

                    <div className="flex items-center gap-2 justify-center md:justify-end">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`
                                flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md border transition-colors
                                ${currentPage === 1
                                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }
                            `}
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </button>

                        <div className="flex items-center gap-1 flex-wrap">
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                let page;
                                if (totalPages <= 5) {
                                    page = i + 1;
                                } else if (currentPage <= 3) {
                                    page = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    page = totalPages - 4 + i;
                                } else {
                                    page = currentPage - 2 + i;
                                }
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`
                                            px-3 py-2 text-sm font-medium rounded-md transition-colors
                                            ${page === currentPage
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                            }
                                        `}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`
                                flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md border transition-colors
                                ${currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }
                            `}
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
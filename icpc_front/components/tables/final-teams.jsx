'use client';

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Search, Download, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SelectedTeams() {
    const [teamsData, setTeamsData] = useState([]);
    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const teamsPerPage = 40;
    const [selectedSite, setSelectedSite] = useState("");
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [showTimer, setShowTimer] = useState(true);
    
    useEffect(() => {
        const prelimsDate = new Date('2025-11-24T23:59:59').getTime();
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = prelimsDate - now;

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
            const response = await fetch('/data/Amritapuri Final Ranklist 2025.csv');
            const csvText = await response.text();
            const parsedData = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: 'greedy',
                transformHeader: (header) => header.trim(),
            });
            // Filter out empty rows (rows without valid Rank or Team Name)
            const validData = parsedData.data.filter(row => 
                row['Rank'] && row['Rank'].toString().trim() !== '' &&
                row['Team Name'] && row['Team Name'].toString().trim() !== ''
            );
            setTeamsData(validData);
        };

        fetchCSVData();
    }, []);

    const filteredTeams = teamsData.filter((row) => {
        const matchesSearch =
            !searchedVal.length ||
            row['Team Name']?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row['Rank']?.toString().toLowerCase().includes(searchedVal.toLowerCase()) ||
            row['Institution']?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row['Site']?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row['Username']?.toLowerCase().includes(searchedVal.toLowerCase());

        const matchesSite = !selectedSite || row['Site'] === selectedSite;

        return matchesSearch && matchesSite;
    });

    // Calculate total pages
    const totalPages = Math.ceil(filteredTeams.length / teamsPerPage);

    // Reset to page 1 when search or filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchedVal, selectedSite]);

    // Adjust current page if it exceeds total pages
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    // Pagination - calculate indices correctly
    const indexOfFirstTeam = (currentPage - 1) * teamsPerPage;
    const indexOfLastTeam = Math.min(indexOfFirstTeam + teamsPerPage, filteredTeams.length);
    const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleSiteFilter = (site) => {
        setSelectedSite(site);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Final Rank List for ICPC Amritapuri Onsite Round 2025

                </h1>
            </div>

            {/* Search and Download */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-6">
                {/* Search Input */}
                <div className="flex min-h-[3rem] w-full md:w-96 px-4 gap-2 bg-white items-center border border-gray-300 shadow-sm">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        className="text-sm md:text-base text-gray-900 flex-1 min-h-[3rem] outline-none bg-transparent"
                        placeholder="Search rank, team, institution, username, or site"
                        onChange={(e) => setSearchedVal(e.target.value)}
                        value={searchedVal}
                    />
                </div>
            </div>

            {/* Site Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button
                    className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                        selectedSite === ""
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("")}
                >
                    All Centres
                </button>
                <button
                    className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                        selectedSite === "Amritapuri"
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("Amritapuri")}
                >
                    Amritapuri
                </button>
                <button
                    className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                        selectedSite === "Coimbatore"
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("Coimbatore")}
                >
                    Coimbatore
                </button>
                <button
                    className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                        selectedSite === "Bangalore"
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("Bangalore")}
                >
                    Bangalore
                </button>
                <button
                    className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                        selectedSite === "Mysuru"
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleSiteFilter("Mysuru")}
                >
                    Mysuru
                </button>
            </div>

            {/* No Results Message */}
            {filteredTeams.length === 0 && (
                <div className="text-center py-12 bg-white border border-gray-200">
                    <p className="text-gray-600">No teams found matching your search.</p>
                </div>
            )}

            {/* Desktop Table */}
            {filteredTeams.length > 0 && (
                <div className="hidden md:block bg-white border border-gray-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Rank</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Team Name</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Institution</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Username</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Score</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Total Time</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Penalty</th>
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
                                            <div className="text-gray-700 font-semibold">{entry['Rank']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="font-semibold text-gray-900">{entry['Team Name']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-600 text-sm">{entry['Institution']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-600 text-sm">{entry['Username']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-700 font-semibold">{entry['Score']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-600">{entry['total_time']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-600">{entry['Penalty']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-700">{entry['Site']}</div>
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
                            className="bg-white border border-gray-200 p-4 shadow-sm"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold">
                                            Rank {entry['Rank']}
                                        </span>
                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold">
                                            Score: {entry['Score']}
                                        </span>
                                    </div>
                                    <div className="font-semibold text-gray-900 mb-1 break-words">
                                        {entry['Team Name']}
                                    </div>
                                    <div className="text-sm text-gray-600 break-words mb-2">
                                        {entry['Institution']}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-1">
                                        <span className="font-medium">Username:</span> {entry['Username']}
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                        <div>
                                            <span className="font-medium">Time:</span> {entry['total_time']}
                                        </div>
                                        <div>
                                            <span className="font-medium">Penalty:</span> {entry['Penalty']}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                                <div className="text-sm">
                                    <span className="text-gray-600">Site: </span>
                                    <span className="font-semibold text-gray-900">{entry['Site']}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {filteredTeams.length > 0 && totalPages > 0 && (
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mt-6">
                    <div className="text-sm text-gray-600 text-center md:text-left">
                        Showing {indexOfFirstTeam + 1} to {indexOfLastTeam} of {filteredTeams.length} teams
                    </div>

                    {totalPages > 1 && (
                        <div className="flex items-center gap-2 justify-center md:justify-end">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className={`
                                    flex items-center gap-1 px-3 py-2 text-sm font-medium border transition-colors
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
                                                px-3 py-2 text-sm font-medium transition-colors
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
                                    flex items-center gap-1 px-3 py-2 text-sm font-medium border transition-colors
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
                    )}
                </div>
            )}
        </div>
    );
}
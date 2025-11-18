'use client';

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import MagnifyingGlass from '../svg/magnifying-glass';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PrelimsRankList() {
    const [teamsData, setTeamsData] = useState([]);
    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showStats, setShowStats] = useState(false);
    const [showWomenOnly, setShowWomenOnly] = useState(false);
    const [ showAllTeams, setShowAllTeams] = useState(true);
    const teamsPerPage = 40;

    useEffect(() => {
        const fetchCSVData = async () => {
            const response = await fetch('/data/ICPC Amritapuri Regionals 2024 _ Final Ranklist.csv');
            const csvText = await response.text();
            const parsedData = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
            });
            setTeamsData(parsedData.data);
        };

        fetchCSVData();
    }, []);

    const filteredTeams = teamsData.filter((row) => {
        const matchesSearch =
            !searchedVal.length ||
            row.teamName?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.teamId?.toString().toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.institution?.toLowerCase().includes(searchedVal.toLowerCase());

        const matchesWomenFilter = !showWomenOnly || row.isWomanOnly?.toLowerCase() === 'true';
        const showAllTeams = !showWomenOnly;

        return matchesSearch && matchesWomenFilter;
    });

    // Reset to page 1 when search or filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchedVal, showWomenOnly]);

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

    const getRankDisplay = (rank) => {
        if (rank === "1") return "🥇";
        if (rank === "2") return "🥈";
        if (rank === "3") return "🥉";
        return `#${rank}`;
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                    Final Rank List for ICPC Amritapuri Prelims Round 2025
                </h1>
                <p className="text-muted-foreground">
                    Congratulations to all the prelims qualifiers of the ICPC Amritapuri Prelims Round 2025.
                </p>
            </div>

            {/* Search and Filter Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-6">
                {/* Search Input */}
                <div className="flex rounded-full min-h-[3rem] w-full md:w-96 px-4 gap-2 bg-white items-center border border-border shadow-sm">
                    <div className="text-muted-foreground w-5 h-5">
                        <MagnifyingGlass />
                    </div>
                    <input
                        type="text"
                        className="text-sm md:text-base text-foreground flex-1 min-h-[3rem] outline-none bg-transparent"
                        placeholder="Search team name, ID, or institution"
                        onChange={(e) => setSearchedVal(e.target.value)}
                        value={searchedVal}
                    />
                </div>
                  {/* <button
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        showAllTeams
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card text-foreground border border-border hover:bg-secondary'
                    }`}
                    onClick={() => setShowAllTeams(!showAllTeams)}
                >
                    {showAllTeams ? ' All Teams' : ' All Teams'}
                </button> */}

                {/* Women Only Teams Button */}
                {/* <button
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        showWomenOnly
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card text-foreground border border-border hover:bg-secondary'
                    }`}
                    onClick={() => setShowWomenOnly(!showWomenOnly)}
                >
                    {showWomenOnly ? '✓ Women Only Teams' : 'Women Only Teams'}
                </button> */}

                {/* Show Stats Button (Mobile) */}
                <button
                    className={`md:hidden px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        showStats
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card text-foreground border border-border hover:bg-secondary'
                    }`}
                    onClick={() => setShowStats(!showStats)}
                >
                    {showStats ? 'Hide Stats' : 'Show Stats'}
                </button>
            </div>

            {/* No Results Message */}
            {filteredTeams.length === 0 && (
                <div className="text-center py-12 bg-card rounded-lg border border-border">
                    <p className="text-muted-foreground">No teams found matching your search.</p>
                </div>
            )}

            {/* Desktop Table */}
            {filteredTeams.length > 0 && (
                <div className="hidden md:block bg-card rounded-lg border border-border overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-table-header border-b border-border">
                                <tr>
                                    <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Rank</th>
                                    <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Team Name</th>
                                    <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Institution</th>
                                    <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Problems Solved</th>
                                    <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Time</th>
                                    <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Penalty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTeams.map((entry, index) => (
                                    <tr
                                        key={index}
                                        className={`
                                            border-b border-border last:border-b-0 transition-colors duration-150
                                            ${index % 2 === 0 ? 'bg-table-row-even' : 'bg-table-row-odd'}
                                            hover:bg-table-hover
                                        `}
                                    >
                                        <td className="py-4 px-6">
                                            <span className="text-lg font-semibold text-foreground">
                                                {getRankDisplay(entry.rank)}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-foreground">{entry.teamName}</span>
                                                {/* {entry.isWomanOnly?.toLowerCase() === 'true' && (
                                                    <span className="px-2 py-0.5 text-xs font-semibold bg-pink-100 text-pink-700 rounded-full">
                                                        Women Only
                                                    </span>
                                                )} */}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-muted-foreground">{entry.institution}</div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="font-semibold text-primary">{entry.problemsSolved}</div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="text-muted-foreground">{entry.totalTime}</div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="text-muted-foreground">{entry.penalty}</div>
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
                            className="bg-card border border-border rounded-lg p-4 shadow-sm"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-lg font-bold">
                                        {getRankDisplay(entry.rank)}
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-semibold text-foreground break-words">{entry.teamName}</span>
                                   
                                    </div>
                                    {!showStats && (
                                        <div className="text-sm text-muted-foreground mt-1 break-words">
                                            {entry.institution}
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {showStats && (
                                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                                    <div className="text-center">
                                        <div className="text-xs text-muted-foreground">Solved</div>
                                        <div className="font-semibold text-primary">{entry.problemsSolved}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-muted-foreground">Time</div>
                                        <div className="font-semibold text-foreground">{entry.totalTime}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-muted-foreground">Penalty</div>
                                        <div className="font-semibold text-foreground">{entry.penalty}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {filteredTeams.length > 0 && (
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mt-6">
                    <div className="text-sm text-muted-foreground text-center md:text-left">
                        Showing {indexOfFirstTeam + 1} to {Math.min(indexOfLastTeam, filteredTeams.length)} of {filteredTeams.length} teams
                    </div>

                    <div className="flex items-center gap-2 justify-center md:justify-end">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`
                                flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md border transition-colors
                                ${currentPage === 1
                                    ? 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                                    : 'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground'
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
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground border border-border'
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
                                    ? 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                                    : 'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground'
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

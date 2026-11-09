'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Papa from 'papaparse';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const PER_PAGE = 40;

// Accept both the sheet headers and a few common variants.
const HEADER_ALIASES = {
    's.no': 'S.No',
    's no': 'S.No',
    'sl no': 'S.No',
    'sl. no': 'S.No',
    sno: 'S.No',
    'user handle': 'User Handle',
    handle: 'User Handle',
    username: 'User Handle',
    'team name': 'Team Name',
    team: 'Team Name',
    institution: 'Institution',
    college: 'Institution',
};

const normalizeHeader = (header) => {
    const key = header.trim().toLowerCase();
    return HEADER_ALIASES[key] ?? header.trim();
};

export default function TeamWaitlist({
    title,
    subtitle,
    dataFile,
    emptyMessage = 'No teams found matching your search.',
}) {
    const [teamsData, setTeamsData] = useState([]);
    const [loadError, setLoadError] = useState(false);
    const [searchedVal, setSearchedVal] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let cancelled = false;

        const fetchCSVData = async () => {
            try {
                const response = await fetch(dataFile);
                if (!response.ok) throw new Error(`Failed to load ${dataFile}`);

                const csvText = await response.text();
                const parsedData = Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: 'greedy',
                    transformHeader: normalizeHeader,
                });

                const validData = parsedData.data
                    .filter(row => row['Team Name']?.toString().trim())
                    .map((row, index) => ({
                        ...row,
                        'S.No': row['S.No']?.toString().trim() || String(index + 1),
                    }));

                if (!cancelled) setTeamsData(validData);
            } catch (err) {
                console.error(err);
                if (!cancelled) setLoadError(true);
            }
        };

        fetchCSVData();
        return () => { cancelled = true; };
    }, [dataFile]);

    const filteredTeams = useMemo(() => {
        const needle = searchedVal.trim().toLowerCase();
        if (!needle) return teamsData;
        return teamsData.filter((row) =>
            row['Team Name']?.toLowerCase().includes(needle) ||
            row['Institution']?.toLowerCase().includes(needle) ||
            row['User Handle']?.toLowerCase().includes(needle) ||
            row['S.No']?.toLowerCase().includes(needle)
        );
    }, [teamsData, searchedVal]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchedVal]);

    const totalPages = Math.ceil(filteredTeams.length / PER_PAGE);

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
    }, [currentPage, totalPages]);

    const indexOfFirstTeam = (currentPage - 1) * PER_PAGE;
    const indexOfLastTeam = Math.min(indexOfFirstTeam + PER_PAGE, filteredTeams.length);
    const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                {subtitle && <p className="text-gray-600">{subtitle}</p>}
                {teamsData.length > 0 && (
                    <p className="text-gray-600 mt-1">{teamsData.length} teams on the waiting list</p>
                )}
            </div>

            {/* Search */}
            <div className="flex justify-center mb-6">
                <div className="flex min-h-[3rem] w-full md:w-96 px-4 gap-2 bg-white items-center border border-gray-300 shadow-sm">
                    <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <input
                        type="text"
                        className="text-sm md:text-base text-gray-900 flex-1 min-h-[3rem] outline-none bg-transparent"
                        placeholder="Search team, college, or username"
                        onChange={(e) => setSearchedVal(e.target.value)}
                        value={searchedVal}
                    />
                </div>
            </div>

            {/* Error Message */}
            {loadError && (
                <div className="text-center py-12 bg-white border border-gray-200">
                    <p className="text-gray-600">Could not load the waiting list. Please try again later.</p>
                </div>
            )}

            {/* No Results Message */}
            {!loadError && filteredTeams.length === 0 && (
                <div className="text-center py-12 bg-white border border-gray-200">
                    <p className="text-gray-600">
                        {teamsData.length === 0 ? 'Loading waiting list...' : emptyMessage}
                    </p>
                </div>
            )}

            {/* Table */}
            {filteredTeams.length > 0 && (
                <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px]">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide w-20">S.No</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Username</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Team Name</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">College Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTeams.map((entry, index) => (
                                    <tr
                                        key={`${entry['S.No']}-${index}`}
                                        className={`
                                            border-b border-gray-200 last:border-b-0 transition-colors duration-150
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                            hover:bg-blue-50
                                        `}
                                    >
                                        <td className="py-4 px-4">
                                            <div className="text-gray-500 font-medium">{entry['S.No']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-600 text-sm">{entry['User Handle']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="font-semibold text-gray-900">{entry['Team Name']}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-600 text-sm">{entry['Institution']}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
                                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
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
                                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
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

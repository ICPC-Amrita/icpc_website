'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Papa from 'papaparse';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Preferred order for the centre filter buttons; any other centre found in
// the data is appended after these.
const SITE_ORDER = ['Amritapuri', 'Bengaluru', 'Bangalore', 'Coimbatore', 'Mysuru'];

// Accept both the current column names and the ones used by older ranklists.
const HEADER_ALIASES = {
    'user handle': 'Username',
    username: 'Username',
    'total time': 'Total Time',
    total_time: 'Total Time',
    time: 'Total Time',
    'women only': 'WomenOnly',
    womenonly: 'WomenOnly',
    'iswomenonly': 'WomenOnly',
};

const normalizeHeader = (header) => {
    const key = header.trim().toLowerCase();
    return HEADER_ALIASES[key] ?? header.trim();
};

// Flags may arrive as true/false, 1/0, yes/no or be missing entirely.
const isFlagSet = (value) =>
    ['true', '1', 'yes', 'y'].includes(String(value ?? '').trim().toLowerCase());

export default function FinalTeams({
    year = '2026',
    roundLabel = 'Onsite Round',
    title,
    dataFile = '/data/Amritapuri Final Ranklist 2026.csv',
    showRank = true,
    sortByTeamName = false,
}) {
    const [teamsData, setTeamsData] = useState([]);
    const [loadError, setLoadError] = useState(false);
    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSite, setSelectedSite] = useState("");
    const [showWomenOnly, setShowWomenOnly] = useState(false);
    const teamsPerPage = 40;

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

                // Drop blank / incomplete rows. The rank column is optional
                // because selection lists ship without one.
                const validData = parsedData.data.filter(row =>
                    row['Team Name']?.toString().trim() &&
                    (!showRank || row['Rank']?.toString().trim())
                );

                if (!cancelled) setTeamsData(validData);
            } catch (err) {
                console.error(err);
                if (!cancelled) setLoadError(true);
            }
        };

        fetchCSVData();
        return () => { cancelled = true; };
    }, [dataFile, showRank]);

    const showPenalty = useMemo(
        () => teamsData.some(row => row['Penalty']?.toString().trim()),
        [teamsData]
    );

    const hasTentativeTeams = useMemo(
        () => teamsData.some(row => isFlagSet(row['Tentative'])),
        [teamsData]
    );

    const hasWomenOnlyTeams = useMemo(
        () => teamsData.some(row => isFlagSet(row['WomenOnly'])),
        [teamsData]
    );

    const sites = useMemo(() => {
        const found = [...new Set(teamsData.map(row => row['Site']?.trim()).filter(Boolean))];
        const ordered = SITE_ORDER.filter(site => found.includes(site));
        const extra = found.filter(site => !SITE_ORDER.includes(site)).sort();
        return [...ordered, ...extra];
    }, [teamsData]);

    const sortedTeams = useMemo(() => {
        if (!sortByTeamName) return teamsData;
        return [...teamsData].sort((a, b) =>
            (a['Team Name'] || '').localeCompare(b['Team Name'] || '', undefined, {
                sensitivity: 'base',
            })
        );
    }, [teamsData, sortByTeamName]);

    const filteredTeams = sortedTeams.filter((row) => {
        const needle = searchedVal.toLowerCase();
        const matchesSearch =
            !searchedVal.length ||
            row['Team Name']?.toLowerCase().includes(needle) ||
            (showRank && row['Rank']?.toString().toLowerCase().includes(needle)) ||
            row['Institution']?.toLowerCase().includes(needle) ||
            row['Site']?.toLowerCase().includes(needle) ||
            row['Username']?.toLowerCase().includes(needle);

        const matchesSite = !selectedSite || row['Site']?.trim() === selectedSite;
        const matchesWomenOnly = !showWomenOnly || isFlagSet(row['WomenOnly']);

        return matchesSearch && matchesSite && matchesWomenOnly;
    });

    // Calculate total pages
    const totalPages = Math.ceil(filteredTeams.length / teamsPerPage);

    // Reset to page 1 when search or filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchedVal, selectedSite, showWomenOnly]);

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

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {title ?? `Final Rank List for ICPC Amritapuri ${roundLabel} ${year}`}
                </h1>
                {teamsData.length > 0 && (
                    <p className="text-gray-600">
                        {teamsData.length} teams across {sites.length} centres
                    </p>
                )}
            </div>

            {/* Search */}
            <div className="flex justify-center mb-6">
                {/* Search Input */}
                <div className="flex min-h-[3rem] w-full md:w-96 px-4 gap-2 bg-white items-center border border-gray-300 shadow-sm">
                    <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
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
            {(sites.length > 1 || hasWomenOnlyTeams) && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <button
                        className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                            selectedSite === "" && !showWomenOnly
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => {
                            setSelectedSite("");
                            setShowWomenOnly(false);
                        }}
                    >
                        {hasWomenOnlyTeams ? 'All Teams' : 'All Centres'}
                    </button>
                    {sites.map((site) => (
                        <button
                            key={site}
                            className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                                selectedSite === site
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                            onClick={() => {
                                setShowWomenOnly(false);
                                setSelectedSite(site);
                            }}
                        >
                            {site}
                        </button>
                    ))}
                    {hasWomenOnlyTeams && (
                        <button
                            className={`px-4 md:px-6 py-2 text-sm font-medium transition-colors ${
                                showWomenOnly
                                    ? 'bg-pink-600 text-white'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                            onClick={() => {
                                setSelectedSite("");
                                setShowWomenOnly(!showWomenOnly);
                            }}
                        >
                            Women Only Slot
                        </button>
                    )}
                </div>
            )}

            {/* Tentative Legend */}
            {hasTentativeTeams && (
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-amber-900 bg-amber-50 border border-amber-300 px-4 py-3 mb-6">
                    <span className="inline-flex items-center rounded-full bg-amber-600 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                        Tentative
                    </span>
                    <span>Teams highlighted in amber are tentative and awaiting confirmation.</span>
                </div>
            )}

            {/* Error Message */}
            {loadError && (
                <div className="text-center py-12 bg-white border border-gray-200">
                    <p className="text-gray-600">Could not load the ranklist. Please try again later.</p>
                </div>
            )}

            {/* No Results Message */}
            {!loadError && filteredTeams.length === 0 && (
                <div className="text-center py-12 bg-white border border-gray-200">
                    <p className="text-gray-600">
                        {teamsData.length === 0 ? 'Loading ranklist...' : 'No teams found matching your search.'}
                    </p>
                </div>
            )}

            {/* Desktop Table */}
            {filteredTeams.length > 0 && (
                <div className="hidden md:block bg-white border border-gray-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {showRank && (
                                        <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Rank</th>
                                    )}
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Team Name</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Institution</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Username</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Score</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Total Time</th>
                                    {showPenalty && (
                                        <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Penalty</th>
                                    )}
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900 text-sm tracking-wide">Site</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTeams.map((entry, index) => (
                                    <tr
                                        key={index}
                                        className={`
                                            border-b border-gray-200 last:border-b-0 transition-colors duration-150
                                            ${isFlagSet(entry['Tentative'])
                                                ? 'bg-amber-200 border-l-[6px] border-l-amber-500'
                                                : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                            hover:bg-blue-50
                                        `}
                                    >
                                        {showRank && (
                                            <td className="py-4 px-4">
                                                <div className="text-gray-700 font-semibold">{entry['Rank']}</div>
                                            </td>
                                        )}
                                        <td className="py-4 px-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-semibold text-gray-900">{entry['Team Name']}</span>
                                                {isFlagSet(entry['Tentative']) && (
                                                    <span className="inline-flex items-center rounded-full bg-amber-600 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                                                        Tentative
                                                    </span>
                                                )}
                                                {isFlagSet(entry['WomenOnly']) && (
                                                    <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-pink-700">
                                                        Women
                                                    </span>
                                                )}
                                            </div>
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
                                            <div className="text-gray-600">{entry['Total Time']}</div>
                                        </td>
                                        {showPenalty && (
                                            <td className="py-4 px-4">
                                                <div className="text-gray-600">{entry['Penalty']}</div>
                                            </td>
                                        )}
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
                            className={`p-4 shadow-sm border ${
                                isFlagSet(entry['Tentative'])
                                    ? 'bg-amber-200 border-amber-300 border-l-[6px] border-l-amber-500'
                                    : 'bg-white border-gray-200'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        {showRank && (
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold">
                                                Rank {entry['Rank']}
                                            </span>
                                        )}
                                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold">
                                            Score: {entry['Score']}
                                        </span>
                                        {isFlagSet(entry['Tentative']) && (
                                            <span className="px-2 py-1 bg-amber-600 text-white text-xs font-bold uppercase tracking-wide">
                                                Tentative
                                            </span>
                                        )}
                                        {isFlagSet(entry['WomenOnly']) && (
                                            <span className="px-2 py-1 bg-pink-50 border border-pink-200 text-pink-700 text-xs font-semibold uppercase tracking-wide">
                                                Women
                                            </span>
                                        )}
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
                                            <span className="font-medium">Time:</span> {entry['Total Time']}
                                        </div>
                                        {showPenalty && (
                                            <div>
                                                <span className="font-medium">Penalty:</span> {entry['Penalty']}
                                            </div>
                                        )}
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

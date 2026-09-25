'use client'

import { useState, useMemo, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { ChevronLeft, ChevronRight, Search, RefreshCw } from 'lucide-react';
import ContactUs2 from "@/components/footer/contact_us_2";

const WEEKS = ["Week 1", "Week 2"];
const CURRENT_WEEK = "Week 2";
const ITEMS_PER_PAGE = 50;

const displayWeek = (week) => week === CURRENT_WEEK ? `${week} *` : week;

export default function JoinQuestLeaderboardPage() {
  const [selectedWeek, setSelectedWeek] = useState(CURRENT_WEEK);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataByWeek, setDataByWeek] = useState({ "Week 1": [], "Week 2": [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const parsedData = { "Week 1": [], "Week 2": [] };

        const res = await fetch(`/data/data_quest_week1.xlsx?t=${new Date().getTime()}`);
        if (!res.ok) {
          throw new Error("Could not fetch leaderboard data file.");
        }

        const buf = await res.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });

        const parseSheet = (sheetName) => {
          // Find matching sheet case-insensitively
          const targetName = wb.SheetNames.find(
            s => s.toLowerCase() === sheetName.toLowerCase() ||
                 s.toLowerCase().includes(sheetName.toLowerCase())
          );
          if (!targetName) return [];

          const ws = wb.Sheets[targetName];
          if (!ws) return [];

          const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });

          return rows.map((row, idx) => {
            const get = (...keys) => {
              for (const k of keys) {
                const m = Object.keys(row).find(rk => rk.trim().toLowerCase() === k.toLowerCase());
                if (m !== undefined && row[m] !== null && row[m] !== undefined) {
                  const val = String(row[m]).trim();
                  if (val !== "") return val;
                }
              }
              return "";
            };

            // Point columns are named per-day (e.g. "sept15 Pts", "sept21 Pts") and
            // differ by week, so fall back to positional matching on any "* Pts" header.
            const ptsKeys = Object.keys(row).filter(k => /pts$/i.test(k.trim()));
            const getPts = (idx, ...fallbackKeys) => {
              const v = get(...fallbackKeys);
              if (v) return v;
              const key = ptsKeys[idx];
              if (key !== undefined && row[key] !== null && row[key] !== undefined) {
                const val = String(row[key]).trim();
                if (val !== "") return val;
              }
              return "";
            };

            const c1 = getPts(0, "challenge 1", "c1");
            const c2 = getPts(1, "challenge 2", "c2");
            const c3 = getPts(2, "challenge 3", "c3");
            const c4 = getPts(3, "challenge 4", "c4");
            let total = get("total points", "total", "score", "total score");

            if (!total && (c1 || c2 || c3 || c4)) {
              total = String((Number(c1) || 0) + (Number(c2) || 0) + (Number(c3) || 0) + (Number(c4) || 0));
            }

            return {
              rank: get("rank", "#") || String(idx + 1),
              questId: get("quest id", "questid", "id"),
              name: get("name", "participant name"),
              c1,
              c2,
              c3,
              c4,
              total: total || "0"
            };
          }).filter(d => d.questId || d.name);
        };

        parsedData["Week 1"] = parseSheet("week-1-leaderboard");
        parsedData["Week 2"] = parseSheet("week-2-leaderboard");

        setDataByWeek(parsedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching quest leaderboard:", err);
        setError("Failed to load leaderboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const currentData = dataByWeek[selectedWeek] || [];

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return currentData;
    }
    const q = searchQuery.toLowerCase().trim();

    const exactMatches = currentData.filter(row => row.questId.toLowerCase() === q);
    if (exactMatches.length > 0) {
      return exactMatches;
    }

    return currentData.filter(row => row.questId.toLowerCase().includes(q) || row.name.toLowerCase().includes(q));
  }, [currentData, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedWeek]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = useMemo(() => {
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredData, startIndex]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Quest Leaderboard</h1>
          <p className="text-muted-foreground">Track your progress across all challenges and weeks.</p>
        </div>

        {/* Week toggle & search */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="flex flex-wrap gap-2 justify-center">
            {WEEKS.map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedWeek === week
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground border border-border'
                }`}
              >
                {displayWeek(week)}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search Quest ID or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-8 pr-3 py-1.5 border border-border rounded-md leading-5 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
            />
          </div>
        </div>

        {/* Table / states */}
        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 text-primary animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading leaderboard...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-card border border-border rounded-lg shadow-sm">
            <p className="text-destructive text-lg">{error}</p>
          </div>
        ) : currentData.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-lg shadow-sm">
            <p className="text-muted-foreground text-lg">To be announced.</p>
            <p className="text-sm text-muted-foreground mt-2">The leaderboard for this week will be published soon.</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-lg shadow-sm">
            <p className="text-muted-foreground">No participants found matching your search.</p>
          </div>
        ) : (
          <>
            {/* Desktop table (md+) */}
            <div className="hidden md:block bg-card rounded-lg border border-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-table-header border-b border-border">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide w-20">Rank</th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Quest ID</th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Name</th>
                      <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 1</th>
                      <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 2</th>
                      <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 3</th>
                      <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 4</th>
                      <th className="text-center py-4 px-6 font-semibold text-primary text-sm tracking-wide">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {paginatedData.map((row, index) => (
                      <tr
                        key={`${row.questId}-${index}`}
                        className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-table-row-even' : 'bg-table-row-odd'} hover:bg-table-hover`}
                      >
                        <td className="py-4 px-6">
                          <span className="text-lg font-semibold text-foreground min-w-[2rem]">
                            {row.rank || (startIndex + index + 1)}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-foreground">{row.questId}</td>
                        <td className="py-4 px-6 text-foreground">{row.name}</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">{row.c1 || "-"}</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">{row.c2 || "-"}</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">{row.c3 || "-"}</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">{row.c4 || "-"}</td>
                        <td className="py-4 px-6 text-center font-medium text-primary">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile list (sm) */}
            <div className="md:hidden space-y-3">
              {paginatedData.map((row, index) => (
                <div
                  key={`${row.questId}-${index}`}
                  className="bg-card border border-border rounded-lg p-4 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                        {row.rank || (startIndex + index + 1)}
                      </div>
                      <div>
                        <div className="text-foreground text-base">{row.name}</div>
                        <div className="text-xs text-muted-foreground">Quest ID: {row.questId}</div>
                      </div>
                    </div>
                    <div className="text-primary font-semibold">{row.total} pts</div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-2 border-t border-border text-center">
                    <div className="bg-blue-50/50 dark:bg-blue-950/40 p-1 rounded"><div className="text-[10px] text-muted-foreground">C1</div><div className="text-xs">{row.c1 || "-"}</div></div>
                    <div className="bg-blue-50/50 dark:bg-blue-950/40 p-1 rounded"><div className="text-[10px] text-muted-foreground">C2</div><div className="text-xs">{row.c2 || "-"}</div></div>
                    <div className="bg-blue-50/50 dark:bg-blue-950/40 p-1 rounded"><div className="text-[10px] text-muted-foreground">C3</div><div className="text-xs">{row.c3 || "-"}</div></div>
                    <div className="bg-blue-50/50 dark:bg-blue-950/40 p-1 rounded"><div className="text-[10px] text-muted-foreground">C4</div><div className="text-xs">{row.c4 || "-"}</div></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mt-6">
                <div className="text-sm text-muted-foreground text-center md:text-left">
                  Showing {filteredData.length > 0 ? startIndex + 1 : 0} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length} participants
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md border transition-colors ${
                      currentPage === 1
                        ? 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                        : 'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <span className="px-3 py-2 text-sm font-medium text-foreground">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md border transition-colors ${
                      currentPage === totalPages
                        ? 'bg-muted text-muted-foreground border-border cursor-not-allowed'
                        : 'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-blue-950">
        <ContactUs2 />
      </div>
    </div>
  );
}

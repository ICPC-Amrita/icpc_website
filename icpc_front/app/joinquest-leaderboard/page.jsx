'use client'

import { useState, useMemo, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { ChevronLeft, ChevronRight, Search, RefreshCw } from 'lucide-react';
import TopThreeCard from '@/components/quest/TopThreeCard';
import ContactUs2 from "@/components/footer/contact_us_2";

const WEEKS = ["Week 1", "Week 2"];
const CURRENT_WEEK = "Week 2";
const ITEMS_PER_PAGE = 50;

const displayWeek = (week) => week === CURRENT_WEEK ? `${week} *` : week;

export default function JoinQuestLeaderboardPage() {
  const [selectedWeek, setSelectedWeek] = useState(CURRENT_WEEK);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataByWeek, setDataByWeek] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const parsedData = { "Week 1": [], "Week 2": [] };

        const fetchWeek = async (week, fileIndex) => {
          try {
            const res = await fetch(`/data/week${fileIndex}_updated.xlsx?t=${new Date().getTime()}`);
            if (!res.ok) return;

            const buf = await res.arrayBuffer();
            const wb = XLSX.read(buf, { type: "array" });
            const ws = wb.Sheets[wb.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });

            parsedData[week] = rows.map(row => {
              const get = (...keys) => {
                for (const k of keys) {
                  const m = Object.keys(row).find(rk => rk.trim().toLowerCase() === k.toLowerCase());
                  if (m !== undefined) return String(row[m]).trim();
                }
                return "";
              };

              const c1 = get("challenge 1", "challenge1_score", "c1", "1");
              const c2 = get("challenge 2", "challenge2_score", "c2", "2");
              const c3 = get("challenge 3", "challenge3_score", "c3", "3");
              const c4 = get("challenge 4", "challenge4_score", "c4", "4");
              const c5 = get("challenge 5", "challenge5_score", "c5", "5");
              let total = get("total", "score", "total score");

              if (!total && (c1 || c2 || c3 || c4 || c5)) {
                total = (Number(c1) || 0) + (Number(c2) || 0) + (Number(c3) || 0) + (Number(c4) || 0) + (Number(c5) || 0);
              }

              return {
                rank: get("rank", "#"),
                questId: get("quest id", "questid", "id"),
                name: get("name", "participant name"),
                c1,
                c2,
                c3,
                c4,
                c5,
                total
              };
            }).filter(d => (d.questId || d.name) && Number(d.total) > 0);
          } catch (e) {
            console.error(`Error processing ${week} file:`, e);
          }
        };

        await Promise.all([
          fetchWeek("Week 1", 1),
          fetchWeek("Week 2", 2),
        ]);

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

  const hasC1 = currentData.some(row => row.c1);
  const hasC2 = currentData.some(row => row.c2);
  const hasC3 = currentData.some(row => row.c3);
  const hasC4 = currentData.some(row => row.c4);
  const hasC5 = currentData.some(row => row.c5);

  const weekNumber = WEEKS.indexOf(selectedWeek) + 1;
  const topThree = currentData.slice(0, 3).map((row, index) => {
    const rank = index + 1;
    return {
      rank,
      name: row.name || row.questId,
      questId: row.questId,
      total: row.total,
      image: `/quest/assets/week${weekNumber}rank${rank}.jpeg`,
    };
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Quest Leaderboard</h1>
          <p className="text-muted-foreground">Track your progress across all challenges and weeks.</p>
        </div>

        {/* Top 3 Podium */}
        {!loading && !error && topThree.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16 mb-8 pt-4 justify-items-center">
            {topThree.map((entry) => (
              <TopThreeCard
                key={entry.questId || entry.rank}
                rank={entry.rank}
                name={entry.name}
                questId={entry.questId}
                total={entry.total}
                image={entry.image}
              />
            ))}
          </div>
        )}

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
                      {hasC1 && <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 1</th>}
                      {hasC2 && <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 2</th>}
                      {hasC3 && <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 3</th>}
                      {hasC4 && <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 4</th>}
                      {hasC5 && <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Challenge 5</th>}
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
                        {hasC1 && <td className="py-4 px-6 text-center text-muted-foreground">{row.c1}</td>}
                        {hasC2 && <td className="py-4 px-6 text-center text-muted-foreground">{row.c2}</td>}
                        {hasC3 && <td className="py-4 px-6 text-center text-muted-foreground">{row.c3}</td>}
                        {hasC4 && <td className="py-4 px-6 text-center text-muted-foreground">{row.c4}</td>}
                        {hasC5 && <td className="py-4 px-6 text-center text-muted-foreground">{row.c5}</td>}
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

                  {(hasC1 || hasC2 || hasC3 || hasC4 || hasC5) && (
                    <div className="grid grid-cols-5 gap-2 pt-2 border-t border-border text-center">
                      {hasC1 && <div className="bg-blue-50/50 p-1 rounded"><div className="text-[10px] text-muted-foreground">C1</div><div className="text-xs">{row.c1}</div></div>}
                      {hasC2 && <div className="bg-blue-50/50 p-1 rounded"><div className="text-[10px] text-muted-foreground">C2</div><div className="text-xs">{row.c2}</div></div>}
                      {hasC3 && <div className="bg-blue-50/50 p-1 rounded"><div className="text-[10px] text-muted-foreground">C3</div><div className="text-xs">{row.c3}</div></div>}
                      {hasC4 && <div className="bg-blue-50/50 p-1 rounded"><div className="text-[10px] text-muted-foreground">C4</div><div className="text-xs">{row.c4}</div></div>}
                      {hasC5 && <div className="bg-blue-50/50 p-1 rounded"><div className="text-[10px] text-muted-foreground">C5</div><div className="text-xs">{row.c5}</div></div>}
                    </div>
                  )}
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

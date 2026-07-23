'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, RefreshCw } from 'lucide-react';
import ContactUs2 from "@/components/footer/contact_us_2";

const ITEMS_PER_PAGE = 10;

export default function Leaderboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [ambassadorsList, setAmbassadorsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-fetch leaderboard on mount (defaults to ICPCAM2026 campaign backend filtering)
  useEffect(() => {
    fetchLeaderboard();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const fetchLeaderboard = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/leaderboard');
      const data = await res.json();
      if (res.ok && data.leaderboard && data.leaderboard.length > 0) {
        setAmbassadorsList(data.leaderboard);
      } else {
        setAmbassadorsList([]);
      }
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
      setAmbassadorsList([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredAmbassadors = ambassadorsList.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (a.refId && String(a.refId).toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const totalPages = Math.ceil(filteredAmbassadors.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAmbassadors = filteredAmbassadors.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getRankDisplay = (index) => {
    const rank = startIndex + index + 1;
    if (rank === 1) return "#1";
    if (rank === 2) return "#2";
    if (rank === 3) return "#3";
    return rank.toString();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Ambassador Leaderboard</h1>
          <p className="text-muted-foreground">Top performers based on teams registered & payment completed</p>
        </div>

        {/* Compact Search Bar */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search ref ID or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-8 pr-3 py-1.5 border border-border rounded-md leading-5 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading leaderboard...</p>
          </div>
        ) : ambassadorsList.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-lg shadow-sm">
            <p className="text-muted-foreground text-lg">Leaderboard will be updated soon.</p>
            <p className="text-sm text-gray-500 mt-2">Stay tuned for the latest ambassador rankings!</p>
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
                      <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Ambassador Name</th>
                      <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">UTM Pop-up Registrations</th>
                      <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">ICPC Official Registrations</th>
                      <th className="text-center py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Payment Completed Teams</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {currentAmbassadors.map((ambassador, index) => (
                      <tr
                        key={ambassador.refId || index}
                        className={`
                          transition-colors duration-150
                          ${index % 2 === 0 ? 'bg-table-row-even' : 'bg-table-row-odd'}
                          hover:bg-table-hover
                        `}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <span className="text-lg font-semibold text-foreground min-w-[2rem]">{getRankDisplay(index)}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="text-foreground">{ambassador.name}</div>
                          {ambassador.refId && (
                            <div className="text-xs text-muted-foreground mt-0.5">Ref: {ambassador.refId}</div>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {ambassador.utmRegistrations || 0}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {ambassador.icpcOfficialRegistrations || 0}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {ambassador.paymentCompletedTeams || 0}
                        </td>
                      </tr>
                    ))}
                    {currentAmbassadors.length === 0 && (
                      <tr>
                        <td colSpan="5" className="py-8 text-center text-muted-foreground">
                          No ambassadors found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile list (sm) */}
            <div className="md:hidden space-y-3">
              {currentAmbassadors.map((ambassador, index) => (
                <div
                  key={ambassador.refId || index}
                  className="bg-card border border-border rounded-lg p-4 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-lg font-bold">
                        {getRankDisplay(index)}
                      </div>
                      <div>
                        <div className="text-foreground text-base">{ambassador.name}</div>
                        {ambassador.refId && (
                          <div className="text-xs text-muted-foreground">Ref: {ambassador.refId}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border text-center">
                    <div className="bg-blue-50/50 p-2 rounded">
                      <div className="text-xs text-muted-foreground">UTM Pop-up</div>
                      <div className="text-blue-700 text-sm mt-0.5">{ambassador.utmRegistrations || 0}</div>
                    </div>
                    <div className="bg-purple-50/50 p-2 rounded">
                      <div className="text-xs text-muted-foreground">Official Reg</div>
                      <div className="text-purple-700 text-sm mt-0.5">{ambassador.icpcOfficialRegistrations || 0}</div>
                    </div>
                    <div className="bg-emerald-50/50 p-2 rounded">
                      <div className="text-xs text-muted-foreground">Paid Teams</div>
                      <div className="text-emerald-800 text-sm mt-0.5">{ambassador.paymentCompletedTeams || 0}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {currentAmbassadors.length === 0 && (
              <div className="text-center py-8 text-muted-foreground bg-card border border-border rounded-lg shadow-sm">
                No ambassadors found matching your search.
              </div>
            )}

            {/* Pagination */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mt-6 px-0">
              <div className="text-sm text-muted-foreground text-center md:text-left">
                Showing {filteredAmbassadors.length > 0 ? startIndex + 1 : 0} to {Math.min(endIndex, filteredAmbassadors.length)} of {filteredAmbassadors.length} ambassadors
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-end">
                <button
                  onClick={handlePreviousPage}
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
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                  ))}
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
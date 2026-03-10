'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data
const ambassadors = [
  { id: 1, name: "Sarah Chen", description: "Community Builder & Tech Evangelist", teamsRegistered: 47 },
  { id: 2, name: "Marcus Johnson", description: "Developer Relations Lead", teamsRegistered: 43 },
  { id: 3, name: "Elena Rodriguez", description: "Open Source Advocate", teamsRegistered: 38 },
  { id: 4, name: "David Kim", description: "Startup Mentor & Angel Investor", teamsRegistered: 35 },
  { id: 5, name: "Priya Patel", description: "AI/ML Research Specialist", teamsRegistered: 32 },
  { id: 6, name: "Alex Turner", description: "Product Growth Expert", teamsRegistered: 29 },
  { id: 7, name: "Lila Zhang", description: "Design Systems Lead", teamsRegistered: 27 },
  { id: 8, name: "Jordan Brooks", description: "DevOps & Infrastructure", teamsRegistered: 24 },
  { id: 9, name: "Maya Singh", description: "Frontend Architecture", teamsRegistered: 22 },
  { id: 10, name: "Ryan Clark", description: "Backend Systems Engineer", teamsRegistered: 20 },
  { id: 11, name: "Zara Ahmed", description: "Mobile Development Lead", teamsRegistered: 18 },
  { id: 12, name: "Lucas Martinez", description: "Cloud Solutions Architect", teamsRegistered: 16 },
  { id: 13, name: "Nina Kowalski", description: "Data Science & Analytics", teamsRegistered: 14 },
  { id: 14, name: "Ethan Lee", description: "Security & Compliance", teamsRegistered: 12 },
  { id: 15, name: "Sophia Wilson", description: "User Experience Designer", teamsRegistered: 10 },
];

const ITEMS_PER_PAGE = 10;

export default function Leaderboard() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(ambassadors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAmbassadors = ambassadors.slice(startIndex, endIndex);

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
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank.toString();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Ambassador Leaderboard</h1>
        <p className="text-muted-foreground">Top performers based on teams registered</p>
        <p className="text-sm text-gray-500 mt-2">Note: Ranklist based on teams registered by each ambassador</p>
      </div>

      {/* Desktop table (md+) */}
      <div className="hidden md:block bg-card rounded-lg border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-table-header border-b border-border">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Rank</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Ambassador</th>
                <th className="text-right py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Teams Registered</th>
              </tr>
            </thead>
            <tbody>
              {currentAmbassadors.map((ambassador, index) => (
                <tr
                  key={ambassador.id}
                  className={`
                    border-b border-border last:border-b-0 transition-colors duration-150
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
                    <div>
                      <div className="font-semibold text-foreground text-base">{ambassador.name}</div>
                      <div className="text-muted-foreground text-sm mt-1">{ambassador.description}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="font-semibold text-lg text-primary">{ambassador.teamsRegistered}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile list (sm) */}
      <div className="md:hidden space-y-3">
        {currentAmbassadors.map((ambassador, index) => (
          <div
            key={ambassador.id}
            className="bg-card border border-border rounded-lg p-4 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-lg font-bold">
                  {getRankDisplay(index)}
                </div>
              </div>
              <div>
                <div className="font-semibold text-foreground">{ambassador.name}</div>
                <div className="text-muted-foreground text-sm">{ambassador.description}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-lg text-primary">{ambassador.teamsRegistered}</div>
              <div className="text-xs text-muted-foreground">teams</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mt-6 px-0">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          Showing {startIndex + 1} to {Math.min(endIndex, ambassadors.length)} of {ambassadors.length} ambassadors
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
      
    </div>
  );
}
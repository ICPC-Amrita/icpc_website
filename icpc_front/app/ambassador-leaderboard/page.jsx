'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, RefreshCw } from 'lucide-react';
import ContactUs2 from "@/components/footer/contact_us_2";

// Mock data as fallback
const initialAmbassadors = [
  { id: 1, name: "Sarah Chen", institution: "Amrita Vishwa Vidyapeetham", description: "Community Builder & Tech Evangelist", teamsRegistered: 47 },
  { id: 2, name: "Marcus Johnson", institution: "IIT Madras", description: "Developer Relations Lead", teamsRegistered: 43 },
  { id: 3, name: "Elena Rodriguez", institution: "NIT Trichy", description: "Open Source Advocate", teamsRegistered: 38 },
  { id: 4, name: "David Kim", institution: "IIIT Hyderabad", description: "Startup Mentor & Angel Investor", teamsRegistered: 35 },
  { id: 5, name: "Priya Patel", institution: "BITS Pilani", description: "AI/ML Research Specialist", teamsRegistered: 32 },
  { id: 6, name: "Alex Turner", institution: "VIT Vellore", description: "Product Growth Expert", teamsRegistered: 29 },
  { id: 7, name: "Lila Zhang", institution: "SRM Institute", description: "Design Systems Lead", teamsRegistered: 27 },
  { id: 8, name: "Jordan Brooks", institution: "Manipal Institute", description: "DevOps & Infrastructure", teamsRegistered: 24 },
  { id: 9, name: "Maya Singh", institution: "PES University", description: "Frontend Architecture", teamsRegistered: 22 },
  { id: 10, name: "Ryan Clark", institution: "RV College", description: "Backend Systems Engineer", teamsRegistered: 20 },
  { id: 11, name: "Zara Ahmed", institution: "Amrita Vishwa Vidyapeetham", description: "Mobile Development Lead", teamsRegistered: 18 },
  { id: 12, name: "Lucas Martinez", institution: "IIT Bombay", description: "Cloud Solutions Architect", teamsRegistered: 16 },
  { id: 13, name: "Nina Kowalski", institution: "Delhi Technological University", description: "Data Science & Analytics", teamsRegistered: 14 },
  { id: 14, name: "Ethan Lee", institution: "NIT Surathkal", description: "Security & Compliance", teamsRegistered: 12 },
  { id: 15, name: "Sophia Wilson", institution: "Anna University", description: "User Experience Designer", teamsRegistered: 10 },
];

const ITEMS_PER_PAGE = 10;

export default function Leaderboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [ambassadorsList, setAmbassadorsList] = useState(initialAmbassadors);
  const [isUpdating, setIsUpdating] = useState(false);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const updateLeaderboard = async () => {
    setIsUpdating(true);
    try {
      const res = await fetch('/api/leaderboard');
      const data = await res.json();
      if (res.ok && data.leaderboard && data.leaderboard.length > 0) {
        // Map the API data to the component's format
        const newAmbassadors = data.leaderboard.map((item) => {
          // Try to find if this source matches our initial mock data
          const existing = initialAmbassadors.find(a => a.name.toLowerCase() === item.name.toLowerCase());
          return {
            id: item.id,
            name: existing ? existing.name : item.name,
            institution: existing ? existing.institution : 'Registered Source',
            description: existing ? existing.description : 'Ambassador',
            teamsRegistered: item.teamsRegistered
          };
        });
        
        setAmbassadorsList(newAmbassadors);
      } else {
        alert('No ambassadors with registered teams found yet. Please upload an Excel snapshot in the Admin panel.');
      }
    } catch (error) {
      console.error('Failed to update leaderboard:', error);
      alert('Failed to update leaderboard data.');
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredAmbassadors = ambassadorsList.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (a.institution && a.institution.toLowerCase().includes(searchTerm.toLowerCase()))
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
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank.toString();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Ambassador Leaderboard</h1>
          <p className="text-muted-foreground">Top performers based on teams registered</p>
          <p className="text-sm text-gray-500 mt-2">Note: Ranklist based on teams registered by each ambassador</p>
        </div>

        {/* Search Bar & Update Button */}
        <div className="mb-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or institution..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-md leading-5 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <button 
            onClick={updateLeaderboard}
            disabled={isUpdating}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition shadow-sm disabled:opacity-70 whitespace-nowrap"
          >
            <RefreshCw className={`h-4 w-4 ${isUpdating ? 'animate-spin' : ''}`} />
            {isUpdating ? 'Updating...' : 'Update Leaderboard'}
          </button>
        </div>

        {/* Desktop table (md+) */}
        <div className="hidden md:block bg-card rounded-lg border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-table-header border-b border-border">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide w-24">Rank</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Ambassador</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground text-sm tracking-wide">Institution</th>
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
                  <td className="py-4 px-6">
                    <div className="text-foreground font-medium text-sm">
                      {ambassador.institution}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="font-semibold text-lg text-primary">{ambassador.teamsRegistered}</div>
                  </td>
                </tr>
              ))}
              {currentAmbassadors.length === 0 && (
                <tr>
                  <td colSpan="4" className="py-8 text-center text-muted-foreground">
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
                <div className="text-blue-600 text-xs mt-1 font-medium">{ambassador.institution}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-lg text-primary">{ambassador.teamsRegistered}</div>
              <div className="text-xs text-muted-foreground">teams</div>
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
      </div>
      
      {/* Footer */}
      <div className="bg-blue-950">
        <ContactUs2 />
      </div>
    </div>
  );
}
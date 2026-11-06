import FinalTeams from "@/components/tables/final-teams";

export const metadata = {
    title: "Teams Selected for ICPC Amritapuri Onsite Round 2026",
    description:
        "Revised list of teams selected for the ICPC Asia West Amritapuri Onsite Round 2026, across the Amritapuri, Bengaluru, Coimbatore and Mysuru centres.",
};

export default function page2(){
    return(
        <div>
        <FinalTeams
            title="Teams Selected for ICPC Amritapuri Onsite Round 2026"
            dataFile="/data/Amritapuri Selection List 2026.csv"
            showRank={false}
            showScore={false}
            sortByTeamName
        />
        </div>
    )
}

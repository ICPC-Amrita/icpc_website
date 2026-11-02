import FinalTeams from "@/components/tables/final-teams";

export const metadata = {
    title: "Teams Selected for ICPC Amritapuri Onsite Round 2026",
    description:
        "Teams selected for the ICPC Asia West Amritapuri Onsite Round 2026, across the Amritapuri, Bengaluru, Coimbatore and Mysuru centres.",
};

export default function page2(){
    return(
        <div>
        <FinalTeams
            title="Teams Selected for ICPC Amritapuri Onsite Round 2026"
            dataFile="/data/Amritapuri Final Ranklist 2026.csv"
        />
        </div>
    )
}

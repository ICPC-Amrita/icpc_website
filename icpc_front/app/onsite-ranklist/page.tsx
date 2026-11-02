import FinalTeams from "@/components/tables/final-teams";

export const metadata = {
    title: "Final Rank List – ICPC Amritapuri Onsite Round 2026",
    description:
        "Final onsite round rank list for the ICPC Asia Amritapuri Regional Contest 2026, across the Amritapuri, Bengaluru, Coimbatore and Mysuru centres.",
};

export default function page2(){
    return(
        <div>
        <FinalTeams
            year="2026"
            dataFile="/data/Amritapuri Final Ranklist 2026.csv"
        />
        </div>
    )
}

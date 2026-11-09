import TeamWaitlist from "@/components/tables/team-waitlist";

export const metadata = {
    title: "ICPC Amritapuri Waiting List 2026 (General Category)",
    description:
        "General category waiting list for the ICPC Asia West Amritapuri Onsite Round 2026.",
};

export default function AmritapuriWaitlistPage() {
    return (
        <div>
            <TeamWaitlist
                title="ICPC Amritapuri Waiting List 2026 — General Category"
                subtitle="Teams on the general category waiting list for the ICPC Amritapuri Onsite Round 2026."
                dataFile="/data/Amritapuri Waitlist General 2026.csv"
            />
        </div>
    );
}

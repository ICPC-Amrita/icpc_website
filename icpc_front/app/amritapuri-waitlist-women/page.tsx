import TeamWaitlist from "@/components/tables/team-waitlist";

export const metadata = {
    title: "ICPC Amritapuri Waiting List 2026 (Women Category)",
    description:
        "Women category waiting list for the ICPC Asia West Amritapuri Onsite Round 2026.",
};

export default function AmritapuriWaitlistWomenPage() {
    return (
        <div>
            <TeamWaitlist
                title="ICPC Amritapuri Waiting List 2026 — Women Category"
                subtitle="Teams on the women category waiting list for the ICPC Amritapuri Onsite Round 2026."
                dataFile="/data/Amritapuri Waitlist Women 2026.csv"
            />
        </div>
    );
}

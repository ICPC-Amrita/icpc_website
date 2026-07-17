export async function getAmbassadorSourceData() {
  try {
    const res = await fetch('http://13.207.189.161:8080/api/applications', {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch from API: ${res.statusText}`);
    }
    
    const data = await res.json();
    
    // Map the external API data to our expected format
    return data
      // Filter for approved and included ambassadors to prevent spam/unverified accounts
      .filter(amb => amb.approval_status === 'approve' && amb.is_included)
      .map(amb => {
        const rawRefId = String(amb.reference_id);
        // Extracts "444" from "Main_Sheet-444", or uses rawRefId if no hyphen exists
        const parsedRefId = rawRefId.includes('-') ? rawRefId.split('-').pop() : rawRefId;

        return {
          refId: parsedRefId,
          name: amb.full_name,
          email: amb.email,
        };
      });
  } catch (error) {
    console.error('Error fetching ambassador data from API:', error);
    return [];
  }
}


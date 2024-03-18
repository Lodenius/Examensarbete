// api.ts (Exempel på API-anrop för att hämta tillgängliga tidsfönster)
export const getAvailableTimeSlots = async (): Promise<string[]> => {
    // Implementera logik för att hämta tillgängliga tidsfönster från backend
    // Exempelvis ett API-anrop till en backend-tjänst
    // Returnera en lista med tillgängliga tidsfönster (t.ex. ["08:00", "09:00", ...])
    return ["08:00", "09:00", "10:00", "11:00", "12:00"];
  };
  
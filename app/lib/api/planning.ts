import { apiClient} from "@/lib/client.ts";
import {PlanningFilters, planningWeekly} from "@/types/planning.type.ts";

export const planningApi = {
    getWeeklyPlanning: async (filters: PlanningFilters): Promise<planningWeekly> => {
        const res = await apiClient.get("planning")
        return res.data;
    }
}
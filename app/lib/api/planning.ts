import { apiClient } from "../client";
import type { PlanningFilters, PlanningFilterOptions, WeekPlanningData } from "@/types/";

export const planningApi = {
    async getWeeklyPlanning(filters: PlanningFilters): Promise<WeekPlanningData> {
        const q = new URLSearchParams();
        q.append("startDate", filters.startDate);
        q.append("endDate", filters.endDate);
        if (typeof filters.year === "number") q.append("year", String(filters.year));
        if (filters.building) q.append("building", filters.building);
        if (typeof filters.floor !== "undefined" && filters.floor !== "") q.append("floor", String(filters.floor));

        const { data } = await apiClient.get<{ data: WeekPlanningData }>(`/teacher/planning?${q.toString()}`);
        return data.data;
    },

    async getFilterOptions(): Promise<PlanningFilterOptions> {
        const { data } = await apiClient.get<{ data: PlanningFilterOptions }>("/teacher/planning/filters");
        return data.data;
    },
};

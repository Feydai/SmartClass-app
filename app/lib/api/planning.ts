import { apiClient } from "@/lib/client";
import dayjs from "dayjs";
import type {
    PlanningFilters,
    WeekPlanningData,
    PlanningFilterOptions,
    TeacherPlanningApi,
} from "@/types";
import {normalizeToWeekPlanningData} from "@/utils/planningMapper.ts";

export const planningApi = {
    getFilterOptions: async (): Promise<PlanningFilterOptions> => {
        const res = await apiClient.get("/teacher/planning/filters");
        return res.data.data as PlanningFilterOptions;
    },
    getWeeklyPlanningForTeacher: async (
        filters: PlanningFilters
    ): Promise<WeekPlanningData> => {
        const startDate = dayjs(filters.startDate).format("YYYY-MM-DD");
        const endDate   = dayjs(filters.endDate).format("YYYY-MM-DD");
        const year      = filters.year ?? dayjs(filters.startDate).year();

        const params: Record<string, string | number | undefined> = {
            startDate,
            endDate,
            year,
            building: filters.building || undefined,
            floor: typeof filters.floor === "number" ? filters.floor : undefined,
        };
        const res = await apiClient.get("/teacher/planning", { params });
        const apiShape = res.data.data as TeacherPlanningApi;
        return normalizeToWeekPlanningData(apiShape);
    },
};

import { useQuery } from "@tanstack/react-query";
import { planningApi } from "@/lib/api/planning";
import type { PlanningFilters, WeekPlanningData, PlanningFilterOptions } from "@/types";

export const usePlanningFilters = () =>
    useQuery<PlanningFilterOptions>({
        queryKey: ["planning", "filterOptions"],
        queryFn: () => planningApi.getFilterOptions(),
        staleTime: 60 * 60 * 1000,
    });

export const useWeeklyPlanning = (filters: PlanningFilters) =>
    useQuery<WeekPlanningData>({
        queryKey: ["planning", "weekly", "teacher", filters],
        queryFn: () => planningApi.getWeeklyPlanningForTeacher(filters),
        staleTime: 5 * 60 * 1000,
    });

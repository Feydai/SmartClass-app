export type planningWeekly = {
    startDate: string,
    endDate: string,
    building: string,
    floor: string,
}

export type PlanningFilters = {
    startDate: string;
    endDate: string;
    year: number;
    building?: string;
    floor?: number;
}

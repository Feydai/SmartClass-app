export type PlannedClass = {
    id: string;
    title: string;
    start: string;
    end: string;
    roomName: string;
    group?: string | null;
};

export type WeekPlanningData = {
    lessons: PlannedClass[];
};

export type PlanningFilters = {
    startDate: string;
    endDate: string;
    year?: number;
    building?: string;
    floor?: string;
};

export type PlanningFilterOptions = {
    buildings: string[];
    floors: Array<string | number>;
};

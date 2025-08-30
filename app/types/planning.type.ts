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
    floor?: number;
};

export type PlanningFilterOptions = {
    buildings: string[];
    floors: Array<string | number>;
};

type PlannedClassApi = {
    id: string;
    title: string;
    teacher: string;
    startTime: string;
    endTime: string;
    room: string;
    dayOfWeek: "LUN" | "MAR" | "MER" | "JEU" | "VEN" | "SAM" | "DIM";
    date: string;
};

type ClassroomApi = {
    id: string;
    name: string;
    capacity: number;
    building: string;
    isEnabled: boolean;
    floor: number;
    plannedClasses: PlannedClassApi[];
};

export type TeacherPlanningApi = {
    startDate: string;
    endDate: string;
    year: number;
    classrooms: ClassroomApi[];
};

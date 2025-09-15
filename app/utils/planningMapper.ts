import dayjs from "dayjs";
import {PlannedClass, TeacherPlanningApi, WeekPlanningData} from "@/types";

export function normalizeToWeekPlanningData(api: TeacherPlanningApi): WeekPlanningData {
    const lessons: PlannedClass[] = api.classrooms.flatMap((room) =>
        room.plannedClasses.map((p) => ({
            id: p.id,
            title: p.title,
            start: `${p.date}T${p.startTime}`,
            end: `${p.date}T${p.endTime}`,
            roomName: room.name,
            group: null,
        }))
    );

    lessons.sort((a, b) => dayjs(a.start).valueOf() - dayjs(b.start).valueOf());
    return { lessons };
}

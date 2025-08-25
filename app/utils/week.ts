import dayjs, { Dayjs } from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

export function getWeekRange(anchor: Dayjs): { start: Dayjs; end: Dayjs } {
    const start = anchor.isoWeekday(1); // lundi
    const end = start.add(4, "day");    // vendredi
    return { start, end };
}

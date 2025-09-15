import React, { useEffect, useMemo, useState } from "react";
import {
    View, Text, SectionList, RefreshControl, ActivityIndicator, StyleSheet
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
import { getWeekRange } from "@/utils/week";
import { usePlanningFilters, useWeeklyPlanning } from "@/hooks/usePlanning";
import type { PlannedClass, PlanningFilters } from "@/types";
import { PlanningHeader } from "@/components/Planning/PlanningHeader";
import { DaySectionHeader } from "@/components/Planning/DaySectionHeader.tsx";
import { LessonCard } from "@/components/Planning/LesssonCard.tsx";
import  myTheme  from "../../../theme/theme";


dayjs.locale("fr");

type Section = { title: string; data: PlannedClass[] };

export default function PlanningScreen() {
    const [weekAnchor, setWeekAnchor] = useState<Dayjs>(dayjs());
    const [building, setBuilding] = useState<string | undefined>();
    const [floor, setFloor] = useState<string | undefined>();

    const { start, end } = useMemo(() => getWeekRange(weekAnchor), [weekAnchor]);
    const floorNum = floor != null ? Number(floor) : undefined;

    const filters: PlanningFilters = useMemo(
        () => ({
            startDate: start.format("YYYY-MM-DD"),
            endDate: end.format("YYYY-MM-DD"),
            year: start.year(),
            building,
            floor: Number.isFinite(floorNum) ? floorNum : undefined,
        }),
        [start, end, building, floorNum]
    );

    useEffect(() => {}, [filters]);

    const { data: options, isLoading: loadingFilters, isError: filtersError } = usePlanningFilters();
    const { data, isLoading, isRefetching, refetch, isError: planningError } = useWeeklyPlanning(filters);

    const sections: Section[] = useMemo(() => {
        const list = data?.lessons ?? [];
        const byDay: Record<string, PlannedClass[]> = {};
        for (const l of list) {
            const key = dayjs(l.start).format("dddd DD/MM");
            byDay[key] = byDay[key] ? [...byDay[key], l] : [l];
        }
        return Object.entries(byDay).map(([title, lessons]) => ({
            title,
            data: lessons.sort((a, b) => dayjs(a.start).valueOf() - dayjs(b.start).valueOf()),
        }));
    }, [data]);

    const showLoader = loadingFilters && isLoading;

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: myTheme.colors.background }]}>
            <PlanningHeader
                start={start}
                end={end}
                onPrevWeek={() => setWeekAnchor((d) => d.subtract(1, "week"))}
                onNextWeek={() => setWeekAnchor((d) => d.add(1, "week"))}
            />

            {filtersError && <Text style={[styles.errorText, { marginHorizontal: 16 }]}>Erreur lors du chargement des filtres.</Text>}
            {planningError && <Text style={[styles.errorText, { marginHorizontal: 16 }]}>Erreur lors du chargement du planning.</Text>}

            {showLoader ? (
                <View style={styles.loader}>
                    <ActivityIndicator />
                    <Text style={styles.loaderText}>Chargement du planning…</Text>
                </View>
            ) : (
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id}
                    refreshControl={<RefreshControl refreshing={isLoading || isRefetching} onRefresh={refetch} />}
                    stickySectionHeadersEnabled
                    renderSectionHeader={({ section: { title } }) => <DaySectionHeader title={title} />}
                    renderItem={({ item }) => <LessonCard item={item} />}
                    ListEmptyComponent={!isLoading ? <Text style={styles.emptyText}>Aucun cours pour cette semaine.</Text> : null}
                    contentInsetAdjustmentBehavior="automatic"
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, paddingTop: 12 },
    loader: { flex: 1, alignItems: "center", justifyContent: "center" },
    loaderText: { marginTop: 8, color: myTheme.colors.textMuted },
    errorText: { color: myTheme.colors.danger, fontWeight: "600" },
    emptyText: { textAlign: "center", marginTop: 24, color: myTheme.colors.textMuted, fontStyle: "italic" },
});

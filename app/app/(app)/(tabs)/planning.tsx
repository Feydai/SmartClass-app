import React, {useEffect, useMemo, useState} from "react";
import { View, Text, SectionList, RefreshControl, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import dayjs, { Dayjs } from "dayjs";
import { SafeAreaView } from 'react-native-safe-area-context';
import "dayjs/locale/fr";
import { getWeekRange } from "@/utils/week";
import { usePlanningFilters, useWeeklyPlanning } from "@/hooks/usePlanning";
import type { PlannedClass, PlanningFilters } from "@/types/";
import { FilterChip } from "@/components/";

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
    useEffect(() => {
    }, [filters]);

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

    type Opt = { label: string; value: string };

    function toOpts(arr: any[] | undefined): Opt[] {
        if (!arr) return [];
        return arr.map((x) => {
            if (typeof x === "string" || typeof x === "number") {
                return { label: String(x), value: String(x) };
            }
            if (x && typeof x === "object") {
                const val =
                    x.value ?? x.id ?? x.code ?? x.key ?? x.name ?? x.label ?? JSON.stringify(x);
                const lab = x.label ?? x.name ?? String(val);
                return { label: String(lab), value: String(val) };
            }
            return { label: String(x), value: String(x) };
        });
    }

    const buildingOpts: Opt[] = toOpts(options?.buildings);
    const floorOpts: Opt[] = toOpts(options?.floors);

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 12 }}>
            <View style={{ paddingHorizontal: 16, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => setWeekAnchor((d) => d.subtract(1, "week"))}>
                    <Text>{"<"} Semaine -1</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold" }}>
                    {start.format("DD MMM")} — {end.format("DD MMM YYYY")}
                </Text>
                <TouchableOpacity onPress={() => setWeekAnchor((d) => d.add(1, "week"))}>
                    <Text>Semaine +1 {">"}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={false} style={{ paddingHorizontal: 16, marginBottom: 8 }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 6 }}>
                    {buildingOpts.map((b) => {
                        const active = building === b.value;
                        return (
                            <FilterChip
                                key={`b-${b.value}`}
                                label={b.label}
                                active={active}
                                onPress={() => setBuilding((prev) => (prev === b.value ? undefined : b.value))}
                            />
                        );
                    })}
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {floorOpts.map((f) => {
                        const active = floor === f.value;
                        return (
                            <FilterChip
                                key={`f-${f.value}`}
                                label={f.label}
                                active={active}
                                onPress={() => setFloor((prev) => (prev === f.value ? undefined : f.value))}
                            />
                        );
                    })}
                </View>
            </ScrollView>
            {filtersError && <Text style={{ color: "red", paddingHorizontal: 16 }}>Erreur lors du chargement des filtres.</Text>}
            {planningError && <Text style={{ color: "red", paddingHorizontal: 16 }}>Erreur lors du chargement du planning.</Text>}
            {loadingFilters && isLoading ? (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator />
                    <Text style={{ marginTop: 8 }}>Chargement du planning…</Text>
                </View>
            ) : (
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id}
                    refreshControl={<RefreshControl refreshing={isLoading || isRefetching} onRefresh={refetch} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={{ backgroundColor: "#f6f6f6", paddingVertical: 6, paddingHorizontal: 16 }}>
                            <Text style={{ fontWeight: "600" }}>{title}</Text>
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
                            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                            <Text>
                                {dayjs(item.start).format("HH:mm")} — {dayjs(item.end).format("HH:mm")} • {item.roomName}
                            </Text>
                            {!!item.group && <Text>{item.group}</Text>}
                        </View>
                    )}
                    ListEmptyComponent={
                        !isLoading ? <Text style={{ textAlign: "center", marginTop: 24 }}>Aucun cours pour cette semaine.</Text> : null
                    }
                    contentInsetAdjustmentBehavior="automatic"
                />
            )}
        </SafeAreaView>
    );
}

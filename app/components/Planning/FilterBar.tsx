import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { FilterChip } from "@/components";

type Opt = { label: string; value: string };

type Props = {
    buildingOpts: Opt[];
    floorOpts: Opt[];
    activeBuilding?: string;
    activeFloor?: string;
    onToggleBuilding: (value?: string) => void;
    onToggleFloor: (value?: string) => void;
};

export function FiltersBar({
                               buildingOpts,
                               floorOpts,
                               activeBuilding,
                               activeFloor,
                               onToggleBuilding,
                               onToggleFloor, }: Props) {
    return (
        <ScrollView horizontal={false} style={styles.filtersWrap}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}>
            <View style={styles.filterRow}>
                {buildingOpts.map((b) => (
                    <FilterChip
                        key={`b-${b.value}`}
                        label={b.label}
                        active={activeBuilding === b.value}
                        onPress={() => onToggleBuilding(activeBuilding === b.value ? undefined : b.value)}
                    />
                ))}
            </View>
            <View style={styles.filterRow}>
                {floorOpts.map((f) => (
                    <FilterChip
                        key={`f-${f.value}`}
                        label={f.label}
                        active={activeFloor === f.value}
                        onPress={() => onToggleFloor(activeFloor === f.value ? undefined : f.value)}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    filtersWrap: {
        marginBottom: 8,
        backgroundColor: "transparent"
    },
    filterRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 6,
        paddingHorizontal: 0,
        gap: 0
    },
});

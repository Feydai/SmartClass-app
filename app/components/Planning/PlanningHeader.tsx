import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Dayjs } from "dayjs";
import { Button } from "@/components";
import  myTheme  from "../../theme/theme";

type Props = {
    start: Dayjs;
    end: Dayjs;
    onPrevWeek: () => void;
    onNextWeek: () => void;
};

export function PlanningHeader({ start, end, onPrevWeek, onNextWeek }: Props) {
    return (
        <View style={styles.header}>
            <Button onPress={onPrevWeek}>
                <Text style={styles.navBtnText}>‹</Text>
            </Button>

            <View style={styles.headerCenter}>
                <Text style={styles.headerRange}>
                    {start.format("DD MMM")} — {end.format("DD MMM YYYY")}
                </Text>
                <Text style={styles.headerSub}>{`Semaine ${start.isoWeek?.() ?? start.week()}`}</Text>
            </View>

            <Button onPress={onNextWeek}>
                <Text style={styles.navBtnText}>›</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    headerCenter: {
        alignItems: "center",
        flex: 1
    },
    headerRange: {
        fontWeight: "800",
        fontSize: 16,
        color: myTheme.colors.text
    },
    headerSub: {
        marginTop: 2,
        fontSize: 12,
        color: myTheme.colors.text,
        fontWeight: "600"
    },
    navBtn: {
        width: 36, height: 36, borderRadius: 18,
        alignItems: "center", justifyContent: "center",
        backgroundColor: myTheme.colors.surface,
        borderWidth: 1, borderColor: myTheme.colors.border,
    },
    navBtnText: {
        fontSize: 20,
        lineHeight: 10,
        color: "FFFFFF",
        fontWeight: "800"
    },
});

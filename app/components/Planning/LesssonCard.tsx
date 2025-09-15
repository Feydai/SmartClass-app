import React from "react";
import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import type { PlannedClass } from "@/types";
import  myTheme  from "../../theme/theme";
import { pickColor } from "@/utils/pickColor";

type Props = { item: PlannedClass };

export function LessonCard({ item }: Props) {
    const startT = dayjs(item.start);
    const endT = dayjs(item.end);
    const color = pickColor(item.title + (item.roomName ?? ""));

    return (
        <View style={styles.cardWrap}>
            <View style={[styles.colorBar, { backgroundColor: color }]} />
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                    <View style={styles.timeBadge}>
                        <Text style={styles.timeBadgeText}>
                            {startT.format("HH:mm")}–{endT.format("HH:mm")}
                        </Text>
                    </View>
                </View>
                <View style={styles.cardMeta}>
                    {!!item.roomName && <Text style={styles.metaText}>Salle : {item.roomName}</Text>}
                    {!!item.group && <Text style={styles.metaText}>{item.group}</Text>}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardWrap: {
        flexDirection: "row",
        paddingHorizontal: 16,
        backgroundColor: "transparent"
    },
    colorBar: {
        width: 5,
        borderRadius: 3,
        marginRight: 10,
        marginVertical: 10
    },
    card: {
        flex: 1,
        backgroundColor: myTheme.colors.surface,
        borderRadius: 14,
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: myTheme.colors.border,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        marginBottom: 6
    },
    cardTitle: {
        flex: 1,
        fontWeight: "800",
        fontSize: 16,
        color: myTheme.colors.text
    },
    timeBadge: {
        paddingHorizontal: 10, paddingVertical: 6,
        borderRadius: 999, borderWidth: 1,
        backgroundColor: myTheme.colors.surfaceAlt, borderColor: myTheme.colors.border,
    },
    timeBadgeText: {
        fontSize: 12,
        fontWeight: "700",
        color: myTheme.colors.primary
    },
    cardMeta:
        {
            flexDirection: "row",
            gap: 12,
            flexWrap: "wrap"
        },
    metaText: {
        color: myTheme.colors.textMuted,
        fontWeight: "600"
    },
});

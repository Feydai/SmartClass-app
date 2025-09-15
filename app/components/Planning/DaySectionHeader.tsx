import React from "react";
import { View, Text, StyleSheet } from "react-native";
import  myTheme  from "../../theme/theme";


export function DaySectionHeader({ title }: { title: string }) {
    return (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionHeader: {
        backgroundColor: myTheme.colors.surfaceAlt,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: myTheme.colors.border,
    },
    sectionTitle: { fontWeight: "800", color: myTheme.colors.text, textTransform: "capitalize" },
});

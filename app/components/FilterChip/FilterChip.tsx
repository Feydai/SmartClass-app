import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { FilterProps } from "@/types";

const FilterChip: React.FC<FilterProps> = ({label, active, onPress, style, customStyle = {},}) => (
    <TouchableOpacity
        onPress={onPress}
        style={[
            styles.chip,
            {
                backgroundColor: active ? "#649C96" : "#FFFFFF",
                borderColor: active ? "#649C96" : "#E5E7EB",
            },
            style,
            customStyle as ViewStyle,
        ]}
    >
        <Text
            style={[
                styles.label,
                { color: active ? "#FFFFFF" : "#20293A" },
            ]}
        >
            {label}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    chip: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        margin: 4,
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
    },
});

export default FilterChip;

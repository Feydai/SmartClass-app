import React from "react";
import { TouchableOpacity, Text } from "react-native";

type Props = {
    label: string;
    active?: boolean;
    onPress?: () => void;
};

const FilterChip: React.FC<Props> = ({ label, active, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 16,
            backgroundColor: active ? "#222" : "#eee",
            marginRight: 8,
            marginBottom: 8,
        }}
    >
        <Text style={{ color: active ? "#fff" : "#222" }}>{label}</Text>
    </TouchableOpacity>
);

export default FilterChip;
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import myTheme from "../../theme/theme";
import { InputProps } from "@/types";
import { BaseText } from "../index.ts";

const CustomInput: React.FC<InputProps> = ({ label, value, onChangeText, placeholder }) => {
    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.container}>
            {label ? <BaseText>{label}</BaseText> : null}

            <View
                style={[
                    styles.box,
                    {
                        borderColor: focused ? myTheme.colors.primary : "#E5E7EB",
                        shadowOpacity: focused ? 0.12 : 0.06,
                    },
                ]}
            >
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor="#94A3B8"
                    selectionColor={myTheme.colors.primary}
                    autoCapitalize="none"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={styles.input}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: "100%", gap: 6 },
    box: {
        borderWidth: 1.5,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
        // Ombre iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        // Élevation Android
        elevation: 2,
    },
    input: {
        height: 52,
        paddingHorizontal: 14,
        fontSize: 16,
        color: myTheme.colors.text,
        fontWeight: "500",
    },
});

export default CustomInput;

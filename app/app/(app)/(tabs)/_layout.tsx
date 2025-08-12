// app/(app)/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import myTheme from "@/theme/theme.tsx";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: myTheme.colors.primary,
                tabBarInactiveTintColor: "#94a3b8",
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: {
                    height: 60,
                    paddingTop: 6,
                    paddingBottom: 8,
                },
            }}
        >
            <Tabs.Screen
                name="rooms"
                options={{
                    title: "Accueil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="planning"
                options={{
                    title: "Planning",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="test"
                options={{
                    title: "test",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

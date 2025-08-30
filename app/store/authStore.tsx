import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { User } from "@/types";
import { Platform } from "react-native";

const storage = Platform.select({
    web: createJSONStorage(() => localStorage),
    default: createJSONStorage(() => require("@react-native-async-storage/async-storage").default),
});

type AuthStore = {
    user: User | null;
    token: string | null;
    hasHydrated: boolean;
    setHasHydrated: (v: boolean) => void;
    setAuth: (user: User, token: string) => void;
    setUser: (user: User) => void;
    setToken: (token: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            hasHydrated: false,

            setHasHydrated: (v) => set({ hasHydrated: v }),

            setAuth: (user, token) => set({ user, token }),
            setUser: (user) => set({ user }),
            setToken: (token) => set({ token }),

            logout: () => set({ user: null, token: null }),
        }),
        {
            name: "auth-storage",
            storage,
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);

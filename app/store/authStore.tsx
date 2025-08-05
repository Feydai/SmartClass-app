// store/authStore.ts
import { create } from "zustand";
import { User } from "@/types";

type AuthStore = {
    user: User | null;
    token: string | null;
    setUser: (user: User) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    token: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null, token: null }),
}));

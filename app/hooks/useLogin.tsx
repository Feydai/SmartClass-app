import { useMutation } from "@tanstack/react-query";
import { userApi } from "@/lib/api/auth";
import {LoginCredentials, User} from "@/types";
import {useAuthStore} from "@/store/authStore.tsx";
import {useRouter} from "expo-router";

export const useLogin = () => {
    const setUser = (useAuthStore((state) => state.setUser))
    const router = useRouter();

    return useMutation({
        mutationFn: (credentials: LoginCredentials) => userApi.login(credentials),
        onSuccess: ( { data }) => {
            setUser(data);
            router.replace("/")
        },
        onError: (error: Error) => {
            console.error(error);
        }
    });
};

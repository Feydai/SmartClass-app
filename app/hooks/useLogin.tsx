import { useMutation } from "@tanstack/react-query";
import { userApi } from "@/lib/api/auth.tsx";
import { LoginCredentials, User } from "@/types";
import { useAuthStore } from "@/store/authStore";

export const useLogin = () = {
    const mutation = useMutation()
}
import { useMutation } from "@tanstack/react-query";
import { userApi } from "@/lib/api/auth";
import { LoginCredentials, AuthData } from "@/types";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { AxiosError } from "axios";

export const useAuth = () => {
    const setAuth = useAuthStore((state) => state.setAuth);
    const router = useRouter();

    return useMutation<AuthData, unknown, LoginCredentials>({
        mutationFn: (credentials) => userApi.login(credentials),

        onSuccess: ({ user, token }) => {
            setAuth(user, token);
            router.replace("/(app)/(tabs)/planning");
        },

        onError: (error: unknown) => {
            let message = "Une erreur est survenue lors de la connexion.";

            if (error instanceof AxiosError) {
                const status = error.response?.status;
                if (status === 400) message = "Requête invalide. Vérifiez vos identifiants.";
                else if (status === 401) message = "Identifiants incorrects.";
                else if (status === 403) message = "Accès refusé. Vous n'avez pas le rôle enseignant.";
                else if (status === 500) message = "Erreur serveur. Réessayez plus tard.";
                else message = error.response?.data?.message || message;
            } else if (error instanceof Error) {
                message = error.message;
            }

            Alert.alert("Connexion échouée", message);
        },
    });
};

export const useLogout = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: () => userApi.logout(),
        onSuccess:() => {
            router.replace("/");
        }
    })
}
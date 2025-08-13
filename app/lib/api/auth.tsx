import { apiClient } from "@/lib/client.ts";
import { LoginCredentials, User, LoginResponseMobile} from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userApi = {
    login: async (credentials: LoginCredentials): Promise<User> => {
        const res = await apiClient.post<LoginResponseMobile>("/user/login", credentials);
        const { user, token } = res.data.data;

        if (user.role !== "teacher") {
            throw new Error("Ce compte n'a pas le rôle enseignant.");
        }

        await AsyncStorage.setItem("accessToken", token);
        return user;
    },

    getMe: async (): Promise<{ data: User }> => {
        const response = await apiClient.get('/user/me');
        return response.data;
    },

    logout: async (): Promise<void> => {
        await apiClient.post('/user/logout');
    },
}
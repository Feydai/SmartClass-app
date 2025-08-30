import { apiClient } from "@/lib/client.ts";
import {LoginCredentials, User, LoginResponseMobile, AuthData} from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userApi = {
    login: async (credentials: LoginCredentials): Promise<AuthData> => {
        const res = await apiClient.post<LoginResponseMobile>("/user/login", credentials);
        const { user, token } = res.data.data;

        if (user.role !== "teacher") {
            throw new Error("Ce compte n'a pas le rôle enseignant.");
        }

        await AsyncStorage.setItem("accessToken", token);
        apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;

        return { user, token }; // ➝ AuthData
    },
    getMe: async (): Promise<{ data: User }> => {
        const response = await apiClient.get('/user/me');
        return response.data;
    },

    logout: async (): Promise<void> => {
        await apiClient.post('/user/logout');
        await AsyncStorage.removeItem("accessToken");
    },
}
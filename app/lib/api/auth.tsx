import { apiClient } from "@/lib/client.ts";
import { LoginCredentials, User} from "@/types";

export const userApi = {
    login: async (credentials: LoginCredentials): Promise<{ data: User }> => {
        const response = await apiClient.post('/user/login', credentials);
        return response.data;
    },

    getMe: async (): Promise<{ data: User }> => {
        const response = await apiClient.get('/user/me');
        return response.data;
    },

    logout: async (): Promise<void> => {
        await apiClient.post('/user/logout');
    },
}
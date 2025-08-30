import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.0.2.2:3000";

export const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "x-client-type": "mobile",
        "x-platform": "mobile",
    },
});

apiClient.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
        config.headers = config.headers ?? {};
        (config.headers as any).Authorization = `Bearer ${token}`;
    }
    const h = (config.headers as any) || {};
    return config;
});

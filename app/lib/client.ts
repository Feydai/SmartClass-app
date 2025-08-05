import axios from "axios"

const API_URL = "http://10.0.2.2:3000"

export const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
})
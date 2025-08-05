export interface LoginCredentials {
    email: string;
    password: string;
}

export interface User {
    id: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    createdAt?: string;
    updatedAt?: string;
}

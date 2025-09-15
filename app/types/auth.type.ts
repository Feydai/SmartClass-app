export type LoginCredentials = {
    email: string;
    password: string;
    deviceToken?: string;
};

export type UserRole = "teacher" | "admin";

export type User = {
    id: string;
    email: string;
    role: UserRole;
};

export type LoginResponseMobile = {
    data: {
        user: User;
        token: string;
    };
};

export type AuthData = {
    user: User;
    token: string;
};

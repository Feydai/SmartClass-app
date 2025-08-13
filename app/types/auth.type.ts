export type LoginCredentials = {
    email: string;
    password: string;
    deviceToken?: string;
}

export type User = {
    id: string;
    email: string;
    role: "teacher" | "admin";
}

export type LoginResponseMobile = {
    data: {
        user: User;
        token: string;
    };
    message: string;
};
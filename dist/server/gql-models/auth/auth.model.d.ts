export interface UserInfo {
    userId: string;
    name: string;
    role: UserRole;
    email: string;
    account?: string;
    password?: string;
}
export declare enum UserRole {
    SuperAdministrator = 1,
    Administrator = 2,
    Assistant = 3,
    User = 4
}
export interface LoginRequest {
    account: string;
    password: string;
}
export interface LoginOAuthRequest {
    userId: string;
    name: string;
    email: string;
}

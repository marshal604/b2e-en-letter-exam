import { LoginRequest, UserInfo, LoginOAuthRequest } from '@models/auth/auth.model';
export declare const resolvers: {
    Query: {
        SayHello: (_: any, arg: {
            name: string;
        }) => string;
        Login: (_: any, arg: {
            req: LoginRequest;
        }) => Promise<UserInfo>;
        LoginWithOAuth: (_: any, arg: {
            req: LoginOAuthRequest;
        }) => Promise<UserInfo>;
    };
};

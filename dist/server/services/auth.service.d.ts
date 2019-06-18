import { AuthDB } from '@db/auth/auth.db';
import { LoginOAuthRequest, UserInfo, LoginRequest } from '@models/auth/auth.model';
export declare class AuthService {
    authDB: AuthDB;
    constructor();
    loginWithOAuth(req: LoginOAuthRequest): Promise<UserInfo>;
    login(req: LoginRequest): Promise<UserInfo>;
}

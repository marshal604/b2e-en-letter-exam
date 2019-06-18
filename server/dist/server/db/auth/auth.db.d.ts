import { BaseDB } from '@db/base.db';
import { LoginOAuthRequest, LoginRequest, UserInfo } from '@models/auth/auth.model';
export declare class AuthDB extends BaseDB {
    tableName: string;
    constructor();
    createUser(req: LoginOAuthRequest): Promise<void>;
    findUser(req: LoginOAuthRequest | LoginRequest): Promise<UserInfo>;
}

import { AuthDB } from '@db/auth/auth.db';
import { LoginOAuthRequest, UserInfo, LoginRequest, UserRole } from '@models/auth/auth.model';
export class AuthService {
  authDB: AuthDB;
  constructor() {
    this.authDB = new AuthDB();
  }

  loginWithOAuth(req: LoginOAuthRequest): Promise<UserInfo> {
    // check db user about req
    // if no user >> create user, return userInfo
    // if has user >> get user, return userInfo
    return this.authDB
      .findUser(req)
      .then(async (res: UserInfo) => {
        const userInfo = {
          name: req.name,
          role: UserRole.User,
          email: req.email,
          userId: req.userId
        };
        if (res) {
          return userInfo;
        }
        await this.authDB.createUser(userInfo);
        return userInfo;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });
  }

  login(req: LoginRequest): Promise<UserInfo> {
    // check db user about req
    // if no user >> return userInfo that userId is -1
    // if has user >> get user, return userInfo
    return this.authDB
      .findUser(req)
      .then((res: UserInfo) => {
        return res
          ? {
              name: res.name,
              role: res.role,
              email: res.email,
              userId: res.userId
            }
          : {
              name: '',
              role: 0,
              email: '',
              userId: '-1'
            };
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });
  }
}

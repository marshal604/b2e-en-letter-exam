import { LoginRequest, UserInfo, LoginOAuthRequest } from '@models/auth/auth.model';
import { AuthService } from '@service/auth.service';

const service = {
  auth: new AuthService()
};
export const resolvers = {
  Query: {
    SayHello: (_: any, arg: { name: string }) => `Hello ${arg.name}!`,
    Login: (_: any, arg: { req: LoginRequest }): Promise<UserInfo> => {
      return service.auth.login(arg.req);
    },
    LoginWithOAuth: (_: any, arg: { req: LoginOAuthRequest }): Promise<UserInfo> => {
      return service.auth.loginWithOAuth(arg.req);
    }
  }
};

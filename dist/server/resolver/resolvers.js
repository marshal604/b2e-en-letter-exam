"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = require("@service/auth.service");
const service = {
    auth: new auth_service_1.AuthService()
};
exports.resolvers = {
    Query: {
        SayHello: (_, arg) => `Hello ${arg.name}!`,
        Login: (_, arg) => {
            return service.auth.login(arg.req);
        },
        LoginWithOAuth: (_, arg) => {
            return service.auth.loginWithOAuth(arg.req);
        }
    }
};
//# sourceMappingURL=resolvers.js.map
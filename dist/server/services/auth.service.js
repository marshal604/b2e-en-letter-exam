"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_db_1 = require("@db/auth/auth.db");
const auth_model_1 = require("@models/auth/auth.model");
class AuthService {
    constructor() {
        this.authDB = new auth_db_1.AuthDB();
    }
    loginWithOAuth(req) {
        // check db user about req
        // if no user >> create user, return userInfo
        // if has user >> get user, return userInfo
        return this.authDB
            .findUser(req)
            .then(async (res) => {
            const userInfo = {
                name: req.name,
                role: auth_model_1.UserRole.User,
                email: req.email,
                userId: req.userId
            };
            if (res) {
                return userInfo;
            }
            await this.authDB.createUser(userInfo);
            return userInfo;
        })
            .catch((err) => {
            throw new Error(err.message);
        });
    }
    login(req) {
        // check db user about req
        // if no user >> return userInfo that userId is -1
        // if has user >> get user, return userInfo
        return this.authDB
            .findUser(req)
            .then((res) => {
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
            .catch((err) => {
            throw new Error(err.message);
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
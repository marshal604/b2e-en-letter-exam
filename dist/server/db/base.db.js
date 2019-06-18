"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const config_1 = __importDefault(require("./config"));
// const dbConnect = `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${
//   dbConfig.port
// }/${dbConfig.database}?ssl=true`;
// const pgp = pgPromise({});
// export const psql = pgp(dbConnect);
class BaseDB {
    constructor() {
        const dbConnect = `postgresql://${config_1.default.user}:${config_1.default.password}@${config_1.default.host}:${config_1.default.port}/${config_1.default.database}?ssl=true`;
        const pgp = pg_promise_1.default({});
        this.psql = pgp(dbConnect);
    }
}
exports.BaseDB = BaseDB;
//# sourceMappingURL=base.db.js.map
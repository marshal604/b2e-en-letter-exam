"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_db_1 = require("@db/base.db");
class AuthDB extends base_db_1.BaseDB {
    constructor() {
        super();
        this.tableName = 'user_info';
    }
    createUser(req) {
        const body = JSON.stringify(req);
        const sql = `INSERT INTO ${this.tableName} VALUES('${req.userId}', '${body}');`;
        return new Promise((resolve, reject) => {
            this.psql
                .none(sql)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    }
    findUser(req) {
        let sql = `SELECT * FROM ${this.tableName} WHERE 1 = 1 `;
        const loginOAuthReq = req;
        const loginReq = req;
        if (loginOAuthReq.userId) {
            sql += `AND body->>'userId' = '${loginOAuthReq.userId}'`;
        }
        else if (loginReq.account) {
            sql += `AND body->>'account' = '${loginReq.account}' AND body->>'password' = '${loginReq.password}'`;
        }
        return new Promise((reslove, reject) => {
            this.psql
                .oneOrNone(sql)
                .then(res => reslove(res))
                .catch(err => reject(err));
        });
    }
}
exports.AuthDB = AuthDB;
//# sourceMappingURL=auth.db.js.map
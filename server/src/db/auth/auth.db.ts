import { BaseDB } from '@db/base.db';
import { LoginOAuthRequest, LoginRequest, UserInfo } from '@models/auth/auth.model';

export class AuthDB extends BaseDB {
  tableName = 'user_info';

  constructor() {
    super();
  }

  createUser(req: LoginOAuthRequest): Promise<void> {
    const body = JSON.stringify(req);
    const sql = `INSERT INTO ${this.tableName} VALUES('${req.userId}', '${body}');`;
    return new Promise((resolve, reject) => {
      this.psql
        .none(sql)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }

  findUser(req: LoginOAuthRequest | LoginRequest): Promise<UserInfo> {
    let sql = `SELECT * FROM ${this.tableName} WHERE 1 = 1 `;
    const loginOAuthReq: LoginOAuthRequest = req as LoginOAuthRequest;
    const loginReq: LoginRequest = req as LoginRequest;

    if (loginOAuthReq.userId) {
      sql += `AND body->>'userId' = '${loginOAuthReq.userId}'`;
    } else if (loginReq.account) {
      sql += `AND body->>'account' = '${loginReq.account}' AND body->>'password' = '${
        loginReq.password
      }'`;
    }

    return new Promise((reslove, reject) => {
      this.psql
        .oneOrNone(sql)
        .then(res => {
          if (!res) {
            throw Error('User not found.');
          }
          reslove(res.body);
        })
        .catch(err => reject(err));
    });
  }
}

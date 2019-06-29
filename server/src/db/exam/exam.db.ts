import { BaseDB } from '@db/base.db';

export class ExamDB extends BaseDB {
  tableName = 'exam_question_bank';

  constructor() {
    super();
  }

  // createUser(req: LoginOAuthRequest): Promise<void> {
  //   const body = JSON.stringify(req);
  //   const sql = `INSERT INTO ${this.tableName} VALUES('${req.userId}', '${body}');`;
  //   return new Promise((resolve, reject) => {
  //     this.psql
  //       .none(sql)
  //       .then(() => resolve())
  //       .catch(error => reject(error));
  //   });
  // }

  // findUser(req: LoginOAuthRequest | LoginRequest): Promise<UserInfo> {
  //   let sql = `SELECT * FROM ${this.tableName} WHERE 1 = 1 `;
  //   const loginOAuthReq: LoginOAuthRequest = req as LoginOAuthRequest;
  //   const loginReq: LoginRequest = req as LoginRequest;

  //   if (loginOAuthReq.userId) {
  //     sql += `AND body->>'userId' = '${loginOAuthReq.userId}'`;
  //   } else if (loginReq.account) {
  //     sql += `AND body->>'account' = '${loginReq.account}' AND body->>'password' = '${
  //       loginReq.password
  //     }'`;
  //   }

  //   return new Promise((reslove, reject) => {
  //     this.psql
  //       .oneOrNone(sql)
  //       .then(res => reslove(res))
  //       .catch(err => reject(err));
  //   });
  // }
}

import { BaseDB } from '@db/base.db';
import {
  CreateExamQuestionRequest,
  UpdateExamQuestionRequest,
  DeleteExamQuestionRequest,
  ExamQuestionBankInfo,
  GetExamQuestionItemRequest
} from '@models/exam/exam.model';

export class ExamDB extends BaseDB {
  tableName = 'exam_question_bank';

  constructor() {
    super();
  }

  createExamQuestion(req: CreateExamQuestionRequest): Promise<null> {
    const body = JSON.stringify(req);
    const sql = `INSERT INTO ${this.tableName} VALUES('${req.id}', '${body}')`;
    return this.psql.none(sql);
  }

  updateExamQuestion(req: UpdateExamQuestionRequest): Promise<null> {
    const body = JSON.stringify(req);
    const sql = `UPDATE ${this.tableName} SET body = body || '${body}' WHERE body->>'id' = '${
      req.id
    }'`;
    return this.psql.none(sql);
  }

  deleteExamQuestion(req: DeleteExamQuestionRequest): Promise<null> {
    const sql = `DELETE FROM ${this.tableName} WHERE body->>'id' = '${req.id}'`;
    return this.psql.none(sql);
  }

  getExamQuestionList(): Promise<ExamQuestionBankInfo[]> {
    const sql = `SELECT body FROM ${this.tableName}`;
    return this.psql
      .manyOrNone(sql)
      .then(rows => (rows.length ? rows.map((item: any) => item.body) : []));
  }

  getExamQuestionItem(req: GetExamQuestionItemRequest): Promise<ExamQuestionBankInfo> {
    let sql = `SELECT body FROM ${this.tableName} WHERE 1 = 1 `;
    if (req.id) {
      sql += ` AND body->>'id' = '${req.id}'`;
    }
    return this.psql.oneOrNone(sql).then((data: any) => {
      if (!data) {
        return Promise.reject('id not found.');
      }
      return data.body;
    });
  }

  isDuplicateName(req: CreateExamQuestionRequest | UpdateExamQuestionRequest): Promise<boolean> {
    const sql = `SELECT body FROM ${this.tableName} WHERE body->>'name' = '${req.name}'`;
    return this.psql.oneOrNone(sql).then(row => !!row && row.userId !== req.id);
  }
}

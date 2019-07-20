import { BaseDB } from '@db/base.db';
import { SaveExamResultRequest } from '@models/exam/exam-result.model';

export class ExamResultDB extends BaseDB {
  tableName = 'exam_question_result';

  constructor() {
    super();
  }

  saveExamQuestionResult(req: SaveExamResultRequest): Promise<null> {
    const body = JSON.stringify(req);
    const sql = `INSERT INTO ${this.tableName} VALUES('${req.id}', '${body}')`;
    return this.psql.none(sql);
  }
}

import { v4 } from 'uuid';

import { ExamResultDB } from '@db/exam/exam-result.db';
import { SaveExamResultRequest, ExamQuestionResultID } from '@models/exam/exam-result.model';

export class ExamResultService {
  examResultDb: ExamResultDB;

  constructor() {
    this.examResultDb = new ExamResultDB();
  }

  saveExamQuestionResult(req: SaveExamResultRequest): Promise<ExamQuestionResultID> {
    req.id = v4();
    const examTime = new Date().getTime();
    const diff = 300 * 1_000;

    if (!req.examTime || Math.abs(Number(req.examTime) - examTime) > diff) {
      req.examTime = examTime.toString();
    }

    return this.examResultDb.saveExamQuestionResult(req).then(() => ({ id: req.id }));
  }
}

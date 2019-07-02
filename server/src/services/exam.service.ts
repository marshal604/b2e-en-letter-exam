import { ExamDB } from '@db/exam/exam.db';
import {
  CreateExamQuestionRequest,
  UpdateExamQuestionRequest,
  DeleteExamQuestionRequest,
  ExamQuestionBankInfo,
  GetExamQuestionItemRequest,
  ExamQuestionID
} from '@models/exam/exam.model';
export class ExamService {
  examDB: ExamDB;
  constructor() {
    this.examDB = new ExamDB();
  }

  createExamQuestion(req: CreateExamQuestionRequest): Promise<ExamQuestionID> {
    return this.examDB.isDuplicateName(req).then(isDuplicate => {
      if (isDuplicate) {
        throw Error('name is diplicate');
      }
      return this.examDB.createExamQuestion(req).then(() => ({ id: req.id }));
    });
  }

  updateExamQuestion(req: UpdateExamQuestionRequest): Promise<ExamQuestionID> {
    return this.examDB.isDuplicateName(req).then(isDuplicate => {
      if (isDuplicate) {
        throw Error('name is diplicate');
      }
      return this.examDB.updateExamQuestion(req).then(() => ({ id: req.id }));
    });
  }

  deleteExamQuestion(req: DeleteExamQuestionRequest): Promise<ExamQuestionID> {
    return this.examDB
      .getExamQuestionItem(req)
      .then(() => this.examDB.deleteExamQuestion(req))
      .then(() => ({ id: req.id }));
  }

  getExamQuestionList(): Promise<ExamQuestionBankInfo[]> {
    return this.examDB.getExamQuestionList();
  }

  getExamQuestionItem(req: GetExamQuestionItemRequest): Promise<ExamQuestionBankInfo | null> {
    return this.examDB.getExamQuestionItem(req);
  }
}

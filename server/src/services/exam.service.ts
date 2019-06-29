import { ExamDB } from '@db/exam/exam.db';
import {
  CreateExamQuestionRequest,
  UpdateExamQuestionRequest,
  DeleteExamQuesionRequest,
  ExamQuestionBankInfo,
  GetExamQuesionItemRequest
} from '@models/exam/exam.model';
export class ExamService {
  examDB: ExamDB;
  constructor() {
    this.examDB = new ExamDB();
  }

  createExamQuestion(req: CreateExamQuestionRequest): Promise<void> {
    return Promise.resolve();
  }

  updateExamQuestion(req: UpdateExamQuestionRequest): Promise<ExamQuestionBankInfo | any> {
    return Promise.resolve(null);
  }

  deleteExamQuestion(req: DeleteExamQuesionRequest): Promise<void> {
    return Promise.resolve();
  }

  getExamQuestionList(): Promise<ExamQuestionBankInfo[]> {
    return Promise.resolve([]);
  }

  getExamQuestionItem(req: GetExamQuesionItemRequest): Promise<ExamQuestionBankInfo | any> {
    return Promise.resolve(null);
  }
}

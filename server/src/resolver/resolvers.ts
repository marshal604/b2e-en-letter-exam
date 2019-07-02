import { AuthService } from '@service/auth.service';
import { ExamService } from '@service/exam.service';
import { LoginRequest, UserInfo, LoginOAuthRequest } from '@models/auth/auth.model';
import {
  CreateExamQuestionRequest,
  UpdateExamQuestionRequest,
  DeleteExamQuestionRequest,
  ExamQuestionBankInfo,
  GetExamQuestionItemRequest,
  ExamQuestionID
} from '@models/exam/exam.model';

const service = {
  auth: new AuthService(),
  exam: new ExamService()
};
export const resolvers = {
  Query: {
    SayHello: (_: any, arg: { name: string }) => `Hello ${arg.name}!`,
    Login: (_: any, arg: { req: LoginRequest }): Promise<UserInfo> => {
      return service.auth.login(arg.req);
    },
    LoginWithOAuth: (_: any, arg: { req: LoginOAuthRequest }): Promise<UserInfo> => {
      return service.auth.loginWithOAuth(arg.req);
    },
    GetExamQuestionList: (): Promise<ExamQuestionBankInfo[]> => {
      return service.exam.getExamQuestionList();
    },
    GetExamQuestionItem: (
      _: any,
      arg: { req: GetExamQuestionItemRequest }
    ): Promise<ExamQuestionBankInfo | null> => {
      return service.exam.getExamQuestionItem(arg.req);
    }
  },
  Mutation: {
    CreateExamQuestion: (
      _: any,
      arg: { req: CreateExamQuestionRequest }
    ): Promise<ExamQuestionID> => {
      return service.exam.createExamQuestion(arg.req);
    },
    UpdateExamQuestion: (
      _: any,
      arg: { req: UpdateExamQuestionRequest }
    ): Promise<ExamQuestionID> => {
      return service.exam.updateExamQuestion(arg.req);
    },
    DeleteExamQuestion: (
      _: any,
      arg: { req: DeleteExamQuestionRequest }
    ): Promise<ExamQuestionID> => {
      return service.exam.deleteExamQuestion(arg.req);
    }
  }
};

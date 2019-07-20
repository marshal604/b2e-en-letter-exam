## Auth

### Exam Result API
#### SaveExamQuestionResult
##### query
```
mutation SaveExamQuestionResult($req: SaveExamResultRequest) {
  SaveExamQuestionResult(req: $req) {
    id
  }
}
```
##### variable
```
{
  "req": {
    "id": "0",
    "examId": "1",
    "userId": "test",
    "examName": "test",
    "userName": "Hubert",
    "result": [
      {
        "numberOfQuestion": 1,
        "choose": {
          "name": "test"
        },
        "answer": {
          "name": "test"
        },
        "isCorrect": true
      }
    ],
    "examScore": 10,
    "isCompeleted": true
  }
}
```
##### result
```
{
  "data": {
    "SaveExamQuestionResult": {
      "id": "d5af07c5-afcc-49dd-abff-4eca132a563c"
    }
  }
}
```

### DB
```
CREATE TABLE exam_question_result (
    id CHAR(50) PRIMARY KEY NOT NULL,
    body jsonb
)
```

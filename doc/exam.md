## Auth

### Exam API
#### CreateExamQuestion
##### query
```
mutation CreateExamQuestion($req: CreateExamQuestionRequest) {
  CreateExamQuestion(req: $req) {
    id
  }
}
```
##### variable
```
{
  "req": {
    "id": "test",
    "name": "test1",
    "setting": {
      "examTime": 20,
      "examQuestionDisplayCount": 4,
      "examQuestionType": 1,
      "examPassScore": 60,
      "examAllowCount": 2
    },
    "question": {
      "english": ["Apple"],
      "chinese": ["蘋果"]
    }
  }
}
```
##### result
```
{
  "data": {
    "CreateExamQuestion": {
      "id": "test"
    }
  }
}

```
#### UpdateExamQuestion
##### query
```
mutation UpdateExamQuestion($req: UpdateExamQuestionRequest) {
  UpdateExamQuestion(req: $req) {
    id
  }
}
```
##### variable
```
{
  "req": {
    "id": "test",
    "name": "test2",
    "setting": {
      "examTime": 20,
      "examQuestionDisplayCount": 4,
      "examQuestionType": 1,
      "examPassScore": 60,
      "examAllowCount": 2
    },
    "question": {
      "english": ["Apple"],
      "chinese": ["蘋果"]
    }
  }
}
```
##### result
```
{
  "data": {
    "UpdateExamQuestion": {
      "id": "test"
    }
  }
}
```
#### DeleteExamQuestion
##### query
```
mutation DeleteExamQuestion($req: DeleteExamQuestionRequest) {
  DeleteExamQuestion(req: $req) {
    id
  }
}
```
##### variable
```
{
  "req": {
    "id": "test1"
  }
}
```
##### result
```
{
  "data": {
    "DeleteExamQuestion": {
      "id": "test1"
    }
  }
}
```
#### GetExamQuestionList
##### query
```
query {
  GetExamQuestionList {
    id
    name
    setting {
      examTime
      examPassScore
      examAllowCount
      examQuestionType
      examQuestionDisplayCount
    }
    question {
      english
      chinese
    }
  }
}
```
##### variable
```

```
##### result
```{
  "data": {
    "GetExamQuestionList": [
      {
        "id": "test",
        "name": "test1",
        "setting": {
          "examTime": 20,
          "examPassScore": 60,
          "examAllowCount": 2,
          "examQuestionType": 1,
          "examQuestionDisplayCount": 4
        },
        "question": {
          "english": [
            "Apple"
          ],
          "chinese": [
            "蘋果"
          ]
        }
      },
      {
        "id": "test2",
        "name": "test2",
        "setting": {
          "examTime": 20,
          "examPassScore": 60,
          "examAllowCount": 2,
          "examQuestionType": 1,
          "examQuestionDisplayCount": 4
        },
        "question": {
          "english": [
            "Apple"
          ],
          "chinese": [
            "蘋果"
          ]
        }
      }
    ]
  }
}

```
#### GetExamQuestionItem
##### query
```
query GetExamQuestionItem($req: GetExamQuestionItemRequest) {
  GetExamQuestionItem(req: $req) {
    id
    name
    setting {
      examTime
      examPassScore
      examAllowCount
      examQuestionType
      examQuestionDisplayCount
    }
    question {
      english
      chinese
    }
  }
}
```
##### variable
```
{
  "req": {
    "id": "test"
  }
}
```
##### result
```
{
  "data": {
    "GetExamQuestionItem": {
      "id": "test",
      "name": "test1",
      "setting": {
        "examTime": 20,
        "examPassScore": 60,
        "examAllowCount": 2,
        "examQuestionType": 1,
        "examQuestionDisplayCount": 4
      },
      "question": {
        "english": [
          "Apple"
        ],
        "chinese": [
          "蘋果"
        ]
      }
    }
  }
}
```
### DB
```
CREATE TABLE exam_question_bank (
    id CHAR(50) PRIMARY KEY NOT NULL,
    body jsonb
)
```

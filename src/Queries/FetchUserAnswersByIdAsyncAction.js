import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
  result: userById(id: $id) {
    id
    answers {
      id
      aswered
      value
      lastchange
      question {
        name
      }
    }
  }
}`

export const FetchUserAnswersByIdAsyncAction = CreateAsyncActionFromQuery(query)
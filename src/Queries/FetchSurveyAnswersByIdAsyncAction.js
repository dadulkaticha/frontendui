import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

  const query = `query MyQuery($id: UUID!) {
    result: answerById(id: $id) {
      id
      question {
        id
        name
        order
        type{id name}
        values{id name order}
      }
      aswered
      lastchange
      value
    }
  }`

  export const FetchSurveyAnswersByIdAsyncAction = CreateAsyncActionFromQuery(query)
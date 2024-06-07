import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
  result: questionById(id: $id) {
  __typename
  id
  name
  type{id name}
  lastchange
  survey{id name}
  answers {
    id
    value
    aswered
  }
  }
}`

export const FetchSurveyQuestionsByIdAsyncAction = CreateAsyncActionFromQuery(query)
import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: questionById(id: $id) {
    __typename
    id
    name
    type{id name}
    answers {
      id
      value
      aswered
    }
    }
  }`

  export const FetchQuestionByIdAsyncAction = CreateAsyncActionFromQuery(query)
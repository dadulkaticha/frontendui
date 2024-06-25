import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result:   questionTypePage {
      id
      name
    }
  }`

export const FetchQuestionTypesAsyncAction = CreateAsyncActionFromQuery(query)
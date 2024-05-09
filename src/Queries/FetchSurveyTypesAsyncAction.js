import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: surveyTypePage(limit:100){
      __typename
      id
      name
    }
  }`

export const FetchSurveyTypesAsyncAction = CreateAsyncActionFromQuery(query)
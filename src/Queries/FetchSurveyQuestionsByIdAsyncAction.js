import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: surveyById(id: $id) {
        
          __typename
          id
          name
 		      lastchange
           questions {
            __typename
            id
            lastchange
            name
            answers {
              aswered
              id
              lastchange
            }
          }
        }
    }`

export const FetchSurveyQuestionsByIdAsyncAction = CreateAsyncActionFromQuery(query)
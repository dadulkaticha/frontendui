import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: surveyById(id: $id) {
        
          __typename
          id
          name
 		      lastchange
          questions{
            id
            name
          }
      }
    }`

export const FetchSurveyPresencesByIdAsyncAction = CreateAsyncActionFromQuery(query)
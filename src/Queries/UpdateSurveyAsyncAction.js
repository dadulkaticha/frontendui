import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $type_id: UUID) {
  result: surveyUpdate(survey: {id: $id, lastchange: $lastchange, name: $name, typeId: $type_id}) {
    id
    msg
    result: survey {
      __typename
      id
      name
      lastchange
    }
  }
}`

  export const UpdateSurveyAsyncAction = CreateAsyncActionFromMutation(mutation)
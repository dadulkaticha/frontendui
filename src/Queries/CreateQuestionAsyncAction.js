import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `mutation MyMutation($name: String!, $surveyId: UUID!, $typeId: UUID!, $id: UUID!) {
    result: questionInsert(
      question: {name: $name, surveyId: $surveyId, typeId: $typeId, id: $id}
    ) {
      result: question {
        id
        name
        type {
          id
          name
        }
      }
    }
  }`

export const CreateQuestionAsyncAction = CreateAsyncActionFromMutation(mutation)
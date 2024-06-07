import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `mutation MyMutation($id: UUID!, $lastchange: DateTime!, $name: String, $typeId: UUID) {
    result: questionUpdate(
      question: {lastchange: $lastchange, id: $id, name: $name, typeId: $typeId}
    ) {
      id
      msg
       question {
        id
        name
        lastchange
      }
      
    }
  }`

export const UpdateQuestionAsyncAction = CreateAsyncActionFromMutation(mutation)
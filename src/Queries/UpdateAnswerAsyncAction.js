import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `mutation MyMutation($aswered: Boolean, $id: UUID!, $lastchange: DateTime!, $value: String) {
    result: answerUpdate(
      answer: {lastchange: $lastchange, id: $id, value: $value, aswered: $aswered}
    ) {
      msg
      id
      result: answer {
        aswered
        lastchange
        id
        value
        expired
        
      }
    }
  }`

  export const UpdateAnswerAsyncAction = CreateAsyncActionFromMutation(mutation)
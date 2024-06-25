import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation ($id:UUID!){
  result:publicationAuthorDelete(id: $id) {
    id
    msg
    result:author {
      valid
    }
  }
}
`
export const DeletePublicationAuthorAsyncAction = CreateAsyncActionFromMutation(mutation)
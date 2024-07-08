import { FetchUserAnswersByIdAsyncAction } from "../Queries/FetchUserAnswersByIdAsyncAction"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { UserAnswerCard } from "../Components/Survey/UserAnswerCard"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const UserAnswersPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [usera, useraPromise] = useFreshItem({id}, FetchUserAnswersByIdAsyncAction)
    useraPromise.then(onResolve, onReject)

    if (usera) {
        // console.log("userans se nacetly")
        return (
            <UserAnswerCard usera={usera} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
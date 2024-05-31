import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"
import { SurveyAnswerEditCard } from "../Components/Survey/SurveyAnswerEditCard"
import { FetchSurveyAnswersByIdAsyncAction } from "../Queries/FetchSurveyAnswersByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst odpověď", success: "Načtení odpovědi se povedlo"})
export const SurveyAnswerEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [answer, answerPromise] = useFreshItem({id}, FetchSurveyAnswersByIdAsyncAction)
    answerPromise.then(onResolve, onReject)

    if (answer) {
        return (
           /*  <SurveyLargeCard survey={answer} >
                <SurveyAnswerEditCard answer={answer} />
            </SurveyLargeCard> */
            <SurveyAnswerEditCard answer={answer} />
        )
    }
    else {
        return (
            <div>Nahrávám odpověď...</div>
        )
    }
}
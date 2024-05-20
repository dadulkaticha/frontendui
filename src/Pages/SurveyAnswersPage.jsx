// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"
import { SurveyQuestionsCard } from "../Components/Survey/SurveyQuestionsCard"
import { FetchSurveyAnswersByIdAsyncAction } from "../Queries/FetchSurveyAnswersByIdAsyncAction"
import { Question } from "react-bootstrap-icons"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst otázku", success: "Načtení otázky se povedlo"})
export const SurveyAnswersPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [question, questionPromise] = useFreshItem({id}, FetchSurveyAnswersByIdAsyncAction)
    questionPromise.then(onResolve, onReject)

    if (question) {
        return (
            <SurveyLargeCard survey={question} >
                <SurveyQuestionsCard survey={question} />
            </SurveyLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
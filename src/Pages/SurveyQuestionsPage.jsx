// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { SurveyQuestionsLargeCard } from "../Components/Survey/SurveyQuestionsLargeCard"
import { SurveyQuestionsCard } from "../Components/Survey/SurveyQuestionsCard"
import { FetchSurveyQuestionsByIdAsyncAction } from "../Queries/FetchSurveyQuestionsByIdAsyncAction"
import { Question } from "react-bootstrap-icons"
import { SurveyAnswerCard } from "../Components/Survey/SurveyAnswerCard"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst anketu", success: "Načtení ankety se povedlo"})
export const SurveyQuestionsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [question, questionPromise] = useFreshItem({id}, FetchSurveyQuestionsByIdAsyncAction)
    questionPromise.then(onResolve, onReject)

    if (question) {
        return (
            <SurveyQuestionsLargeCard question={question} >
                <SurveyAnswerCard question={question} />
            </SurveyQuestionsLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
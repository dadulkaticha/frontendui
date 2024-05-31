// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"
import { SurveyQuestionsCard } from "../Components/Survey/SurveyQuestionsCard"
import { FetchSurveyQuestionsByIdAsyncAction } from "../Queries/FetchSurveyQuestionsByIdAsyncAction"
import { FetchSurveyAnswersByIdAsyncAction } from "../Queries/FetchSurveyAnswersByIdAsyncAction"
import { SurveyAnswerCard } from "../Components/Survey/SurveyAnswerCard"
import { FetchQuestionByIdAsyncAction } from "../Queries/FetchQuestionByIdAsyncAction"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst anketu", success: "Načtení ankety se povedlo"})
export const SurveyAnswersViewPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [question, surveyPromise] = useFreshItem({id}, FetchQuestionByIdAsyncAction)
    surveyPromise.then(onResolve, onReject)

    if (question) {
        return (
                <SurveyAnswerCard question={question} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
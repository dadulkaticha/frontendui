// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"
import { SurveyQuestionsCard } from "../Components/Survey/SurveyQuestionsCard"
import { FetchSurveyQuestionsByIdAsyncAction } from "../Queries/FetchSurveyQuestionsByIdAsyncAction"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst anketu", success: "Načtení ankety se povedlo"})
export const SurveyQuestionsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [survey, surveyPromise] = useFreshItem({id}, FetchSurveyQuestionsByIdAsyncAction)
    surveyPromise.then(onResolve, onReject)

    if (survey) {
        return (
            <SurveyLargeCard survey={survey} >
                <SurveyQuestionsCard survey={survey} />
            </SurveyLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
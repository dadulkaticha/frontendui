// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"
import { SurveyQuestionEditCard } from "../Components/Survey/SurveyQuestionEditCard"
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
                <SurveyQuestionEditCard questions={survey.questions} />
            </SurveyLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
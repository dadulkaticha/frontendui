// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchSurveyByIdAsyncAction } from "../Queries/FetchSurveyByIdAsyncAction"
import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"
import { SurveyEditCard } from "../Components/Survey/SurveyEditCard"
//import { SurveyQuestionEditCard } from "../Components/Survey/SurveyQuestionEditCard"
import { SurveyQuestionEditCard2 } from "../Components/Survey/SurveyQuestionEditCard2"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst survey", success: "Načtení survey se povedlo"})
export const SurveyEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [survey, surveyPromise] = useFreshItem({id}, FetchSurveyByIdAsyncAction )
    surveyPromise.then(onResolve, onReject)

    if (survey) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Eventy nahrány
            //    {JSON.stringify(event)}
            //</div>
            <SurveyLargeCard survey={survey}>
                <SurveyEditCard survey = {survey} />
                <SurveyQuestionEditCard2 survey={survey} />
            </SurveyLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchSurveyByIdAsyncAction } from "../Queries/FetchSurveyByIdAsyncAction"
import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const SurveyEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [survey, userPromise] = useFreshItem({id}, FetchSurveyByIdAsyncAction )
    userPromise.then(onResolve, onReject)

    if (survey) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Eventy nahrány
            //    {JSON.stringify(event)}
            //</div>
            <SurveyLargeCard survey={survey}>
                 <SurveyLargeCard survey={survey}>
                Heureka
                </SurveyLargeCard>
            </SurveyLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
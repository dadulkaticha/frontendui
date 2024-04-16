// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
//import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction"
import { SurveyLargeCard } from "../Components/Survey/SurveyLargeCard"
import { FetchSurveyByIdAsyncAction } from "../Queries/FetchSurveyByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const SurveyPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [survey, userPromise] = useFreshItem({id}, FetchSurveyByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (survey) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //Eventy nahrány
            //{JSON.stringify(event)}
            //</div>
            <SurveyLargeCard survey={survey}/>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}
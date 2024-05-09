/* eslint-disable react/prop-types */
import { useFreshItem, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import { UpdateSurveyAsyncAction } from '../../Queries/UpdateSurveyAsyncAction'
import { FetchSurveyTypesAsyncAction } from '../../Queries/FetchSurveyTypesAsyncAction.js';
import { useState } from 'react';

//const {id} = useParams()
    //const [onResolve, onReject] = validator(useDispatch())
    //const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    //userPromise.then(onResolve, onReject)
const id = "7132701c-574a-41fe-9d52-17d68d20dab1"
export const SurveyEditType = ({survey}) => {
    const [surveytypes, surveytypesPromise] = useFreshItem({id}, FetchSurveyTypesAsyncAction)
    const [surveytypesdata, setThem] = useState([])
    surveytypesPromise.then(json => {
        console.log(json)
        const r = json?.data?.result
        if (r) {
            setThem(r)
            console.log(r)
        }
    })
    const surveyEx = {...survey, surveyType_id: survey?.surveyType.id};

    return (
        <div>
            <EditableAttributeSelect item={surveyEx} attributeName ="surveyType_id" label="Typ" asyncUpdater={UpdateSurveyAsyncAction}>
                {surveytypesdata.map(survey => <option key= {survey.id} value={survey.id}>{survey.name}</option>)}
                {/*<option value = "712029b6-2dbc-4952-9d3e-e897899edf0a">Kvalita výuky</option>*/}
            </EditableAttributeSelect>
            {JSON.stringify(surveytypesdata)}
        </div>
    );
};
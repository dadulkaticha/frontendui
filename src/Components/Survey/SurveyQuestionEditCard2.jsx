import { CardCapsule, DeleteButton, TextInput, Dialog, useDispatch, CreateAsyncQueryValidator, SelectInput, SearchInput} from '@hrbolek/uoisfrontend-shared/src'
import { useCallback, useState } from 'react'
//import { FetchSearchUserAsyncAction } from '../../Queries/FetchSearchUserAsyncAction'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateQuestionAsyncAction } from '../../Queries/UpdateQuestionAsyncAction'
import { SurveyLink } from './SurveyLink'
//import {useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import {CreateQuestionAsyncAction } from "../../Queries/CreateQuestionAsyncAction";
import { FetchQuestionTypesAsyncAction } from '../../Queries/FetchQuestionTypesAsyncAction'
import { FetchSurveyByIdAsyncAction } from '../../Queries/FetchSurveyByIdAsyncAction'

// const CreateRandomQuestion = (survey_id) => {
//     const data = {
//         id: crypto.randomUUID(),
//         name: "Nová otázka",
//         typeId: "ad0f53fb-240b-47de-ab1d-871bbde6f973",
//         surveyId: survey_id,
//     }
//     return data
// }


const AddQuestionDialog = ({onCreate}) => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        name: "Zadejte jmeno",
        typeId: "ad0f53fb-240b-47de-ab1d-871bbde6f973"        
    })
    const onOk = () => {
        setVisible(false)
        onCreate({...data})
    }

    const onCancel = () => {
        setVisible(false)
    }
    const onOpen = () => {
        setVisible(true)
    }
    const onChange = useCallback((atributeName) => (value) => {
        setData(oldData => {
            const newData =  {...oldData}
            newData[atributeName] = value
            console.log(newData)
            return newData
        })
    }, [setData])

    if (visible) {
        return (
            <Dialog title="Výběr autora" onOk={onOk} onCancel={onCancel}>
                <div className="form-floating">
                    <SelectInput FetchAsyncAction={FetchQuestionTypesAsyncAction} id="select" value={data.type} onChange={onChange("typeId")} />
                    <label htmlFor={"select"}>Typ otazky</label>
                </div> 
                <div className="form-floating">
                    <TextInput type={"text"} id={"name"} value={data.name} onChange={onChange("name")} />
                    <label htmlFor={"name"}>name</label>
                </div>

                {/* <SearchInput title="Výběr uživatele" onSelect={onChange("user_id")} FetchByPatternAsyncAction={FetchSearchUserAsyncAction} /> */}
            </Dialog>
        )
    } else {
        return (
            <button className='btn btn-success form-control' onClick={onOpen}>+</button>
        )
    }
}






 
    // export const QuestionCreateButton = ({survey}) => {
    //     const dispatch = useDispatch()
    //     const onClick = () => {
    //         console.log(survey.id)
    //         const data = CreateRandomQuestion(survey.id);
    //         dispatch(CreateQuestionAsyncAction(data));
    //         console.log("fired creation of question", data);
    //     }
    //     return (
    //         <button className="btn btn-outline-success" onClick={onClick}>Přidej otázku</button>
    //     )
    // }

const QuestionsRow = ({question}) => {
    const dispatch=useDispatch()
    const onClick=()=>{
        const updater = async () => {
            const variables={id: question.id}
            await dispatch(DeleteQuestionAsyncAction(variables))
            await dispatch(FetchPublicationByIdAsyncAction(publication))
        }
        updater()
    }

    

    return (
        <tr>
            <td><a href={`/surveys/question/view/${question?.id}`}>{question?.name}</a></td>
            <td>{question?.lastchange}</td>
            <td>{question?.type.name}</td>
            <td><DeleteButton onClick={onClick}>D</DeleteButton></td>
        </tr>
    )
}
const validator = CreateAsyncQueryValidator({error: "Nepovedlo se přidat otazku", success: "Přidání otazky se povedlo"})
export const SurveyQuestionEditCard2 = ({survey}) => {
    const dispatch=useDispatch()
    const onCreate = (data) => {
        const [onResolve, onReject] = validator(dispatch)
        const fullRecord = {...data, surveyId:survey.id, id:crypto.randomUUID()}
        console.log("fullRecord", fullRecord)
        dispatch(
            CreateQuestionAsyncAction(fullRecord)
        ).then(onResolve, onReject)
        .then(() => {
            dispatch(FetchSurveyByIdAsyncAction(survey))
        })
    }
    
    
    return (
        <CardCapsule  title={<>Anketa </>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        <th>Otázka</th>
                        <th>Datum změny</th>
                        <th>Typ odpovědi</th>
                    </tr>
                </thead>
                <tbody>
                    {survey.questions.map(
                        p => <QuestionsRow key={p.id} question={p} />
                    )}
                    <tr>
                        <td colSpan={3}><AddQuestionDialog survey={survey} onCreate={onCreate}/></td>
                    </tr>
                </tbody>
            </table>
            {/* <QuestionCreateButton survey={survey} /> */}
            
        </CardCapsule>
    )
}
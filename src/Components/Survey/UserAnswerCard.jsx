import { CardCapsule, DeleteButton, TextInput, Dialog, useDispatch, CreateAsyncQueryValidator, SelectInput, SearchInput} from '@hrbolek/uoisfrontend-shared/src'
import { useCallback, useState } from 'react'
import { UpdateAnswerAsyncAction } from '../../Queries/UpdateAnswerAsyncAction'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserLink } from '../User/UserLink'
import { SurveyAnswerEditCard } from './SurveyAnswerEditCard'
import { FetchSurveyAnswersByIdAsyncAction } from '../../Queries/FetchSurveyAnswersByIdAsyncAction'


const ChangeAnswerDialog = ({onCreate,answer}) => {
    const dispatch=useDispatch()
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        value: "Zadejte hodnoty"
        // typeId: "ad0f53fb-240b-47de-ab1d-871bbde6f973"        
    })
    const onOk = () => {
        setVisible(false)
        window.location.reload()
        //dispatch(FetchSurveyAnswersByIdAsyncAction(answer))
        //onCreate({...data})
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
            <Dialog title="Editace odpovedi" onOk={onOk} onCancel={onCancel}>
                {/* <div className="form-floating">
                    <SelectInput FetchAsyncAction={FetchQuestionTypesAsyncAction} id="select" value={data.type} onChange={onChange("typeId")} />
                    <label htmlFor={"select"}>Typ otazky</label>
                </div>  */}
                {/* <div className="form-floating">
                    <TextInput type={"text"} id={"value"} value={data.value} onChange={onChange("value")} />
                    <label htmlFor={"value"}>value</label>
                </div> */}
                <SurveyAnswerEditCard answer={answer} />
                {/* <SearchInput title="Výběr uživatele" onSelect={onChange("user_id")} FetchByPatternAsyncAction={FetchSearchUserAsyncAction} /> */}
            </Dialog>
        )
    } else {
        return (
            <button className='btn btn-link' onClick={onOpen}>{answer?.value}</button>
        )
    }
}






const validator = CreateAsyncQueryValidator({error: "Nepovedlo se zmenit odpoved", success: "Zmena odpovedi se povedla"})
const AnswersRow = ({answer}) => {
    const dispatch=useDispatch()
    const onCreate = (data) => {
        const [onResolve, onReject] = validator(dispatch)
        const fullRecord = {...data, id:answer.id,lastchange:answer.lastchange}
        console.log("fullRecord", fullRecord)
        dispatch(
            UpdateAnswerAsyncAction(fullRecord)
        ).then(onResolve, onReject)
        .then(() => {
            //dispatch(FetchSurveyByIdAsyncAction(survey))
            console.log("hotovo")
        })
    }
    return (
        <tr>
            <td>{answer?.question.name}</td>
            <td colSpan={1}><ChangeAnswerDialog answer={answer} onCreate={onCreate}/></td>
            {/* <td>
                <button onClick={() => console.log("test")} className="btn btn-link">
                    {answer?.value}
                </button>
            </td> */}
            <td>{answer?.lastchange}</td>
            <td><DeleteButton >D</DeleteButton></td>
        </tr>
    )
}

export const UserAnswerCard = ({usera}) => {
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
        <CardCapsule  title={<>Odpovědi uživatele </>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        <th>Otázka</th>
                        <th>Odpověď</th>
                        <th>Datum</th>
                        {/* <th>{JSON.stringify(usera)}</th> */}
                    </tr>
                </thead>
                
                {/*<tbody>
                    {usera.answers.map(
                        p => <AnswersRow key={p.id} answer={p} />
                    )}
                </tbody>*/}
                <tbody>
                    {usera?.answers?.map(p => <AnswersRow key={p.id} answer={p} />) || null}
                </tbody>
            </table>
            {/* <QuestionCreateButton survey={survey} /> */}
            
        </CardCapsule>
    )
}
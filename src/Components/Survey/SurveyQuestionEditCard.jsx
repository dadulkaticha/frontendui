import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateQuestionAsyncAction } from '../../Queries/UpdateQuestionAsyncAction'
import { SurveyLink } from './SurveyLink'
import {useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import {CreateQuestionAsyncAction } from "../../Queries/CreateQuestionAsyncAction";

const CreateRandomQuestion = ({surveyId}) => {
    const data = {
        id: crypto.randomUUID(),
        name: "Nová otázka",
        typeId: "ad0f53fb-240b-47de-ab1d-871bbde6f973",
        surveyId: surveyId,
    }
    return data
}
 
export const QuestionCreateButton = ({surveyId}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        const data = CreateRandomQuestion({surveyId});
        dispatch(CreateQuestionAsyncAction(data));
        console.log("fired creation of question", data);
    }
    return (
        <button className="btn btn-outline-success" onClick={onClick}>Přidej otázku</button>
    )
}

const QuestionsRow = ({question}) => {
    return (
        <tr>
            <td><a href={`/surveys/question/view/${question?.id}`}>{question?.name}</a></td>
            <td>{question?.lastchange}</td>
            <td>{question?.type.name}</td>
        </tr>
    )
}

export const SurveyQuestionEditCard = ({questions, surveyId}) => {
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
                    {questions.map(
                        p => <QuestionsRow key={p.id} question={p} />
                    )}
                </tbody>
            </table>
            <QuestionCreateButton surveyId={surveyId} />
            
        </CardCapsule>
    )
}
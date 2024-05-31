/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect, useDispatch } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateSurveyAsyncAction } from '../../Queries/UpdateSurveyAsyncAction'
/* import { SurveyEditType } from './SurveyEditType' */
import { SurveyLink } from './SurveyLink'
import { UpdateAnswerAsyncAction } from '../../Queries/UpdateAnswerAsyncAction'
import { FetchSurveyAnswersByIdAsyncAction } from '../../Queries/FetchSurveyAnswersByIdAsyncAction'

// const changedAsyncActioj = (item)=> {
//     const changedItem = {...item, value: Number(item.value)}
//     return UpdateEventAsyncAction(changedItem)
// }
const AnswersRow = ({answer}) => {
    return (
        <tr>
            <td>{answer?.value}</td>
            {/* <td>{answer?.answered}</td> */}
            <td><EditableAttributeText item={answer} attributeName ="answered" label="Odpověď" asyncUpdater={UpdateAnswerAsyncAction}/></td>
            {/* <td>
                {question?.answers.map(answer => (
                    <div key={answer.id}>
                        <p>Odpověď: {answer.aswered}</p>
                        <p>ID: {answer.id}</p>
                        <p>Datum poslední změny: {answer.lastchange}</p>
                    </div>
                ))}
            </td> */}
        </tr>
    )
}

export const SurveyAnswerEditCard = ({answer}) => {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const question = answer?.question
    const dispatch = useDispatch()
    const onClick = async (value) => {
        const updatedAnswer = { ...answer, value };
        await dispatch(UpdateAnswerAsyncAction(updatedAnswer  ));
    }
    return (
        <CardCapsule title={<>Otázka: {answer.question.name}</>}>
            {values.map(value => (<button key={value} className={value===answer.value?"btn btn-primary":"btn btn-outline-primary"} onClick={() => onClick(value)}>{value}</button>))}
        </CardCapsule>
    )
}

/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateSurveyAsyncAction } from '../../Queries/UpdateSurveyAsyncAction'
import { UpdateAnswerAsyncAction } from '../../Queries/UpdateAnswerAsyncAction'
/* import { SurveyEditType } from './SurveyEditType' */
import { SurveyLink } from './SurveyLink'

// const changedAsyncActioj = (item)=> {
//     const changedItem = {...item, value: Number(item.value)}
//     return UpdateEventAsyncAction(changedItem)
// }
const AnswersRow = ({answer}) => {

    return (
        <tr>
            <td><a href={`/surveys/answer/edit/${answer?.id}`}>{answer?.value}</a></td>
            {answer?.aswered ? <td>Ano</td> : <td>Ne</td>}
            {/* <td>{answer?.answered}</td> */}
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

export const SurveyAnswerCard = ({question}) => {

    const answers = question?.answers || []
    return (
        <CardCapsule  title={<>Otázka: {question.name}</>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        <th>Odpověď</th>
                        <th>Zodpovězeno</th>
                    </tr>
                </thead>
                <tbody>
                    {answers.map(
                        p => <AnswersRow key={p.id} answer={p} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}
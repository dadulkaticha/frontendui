/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SurveyLink } from './SurveyLink'

const QuestionsRow = ({question}) => {
    return (
        <tr>
            <td><a href={`/surveys/answers/view/${question?.id}`}>{question?.name}</a></td>
            <td>{question?.lastchange}</td>
            <td>{question?.type.name}</td>
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

export const SurveyQuestionsCard = ({questions}) => {
    return (
        <CardCapsule  title={<>Anketa </>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        <th>Otázka</th>
                        <th>Datum změny</th>
                        <th>Typ</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map(
                        p => <QuestionsRow key={p.id} question={p} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}
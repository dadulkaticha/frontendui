import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SurveyQuestionsMediumCard = ({question}) => {
    const last = new Date(question?.lastchange).toDateString()
    return (
        <CardCapsule  title={<>Otázka</>}>

            <Row>
                <Col>Otázka</Col>
                <Col>{question?.name}</Col>
            </Row>
            {/* <Row>
                <Col></Col>
                <Col>Zodpovězeno?</Col>
                <Col>{question?.value}</Col>
            </Row> */}
            <Row>
                <Col>Změna</Col>
                <Col>{last}</Col>
            </Row>
            <Row>
                <Col>Typ otázky</Col>
                <Col>{question?.type.name}</Col>
            </Row>
            <Row>
                <Col>Dotazník</Col>
                <Col><td><a href={`/surveys/survey/edit/${question?.survey.id}`}>{question?.survey.name}</a></td></Col>
            </Row>
        </CardCapsule>
    )
}
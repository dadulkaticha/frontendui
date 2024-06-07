import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SurveyLink } from './SurveyLink'

export const SurveyMediumCard = ({survey}) => {
    const last = new Date(survey?.lastchange).toDateString()
    return (
        <CardCapsule  title={<>Dotazník <SurveyLink survey={survey } /></>}>

            <Row>
                <Col>Název</Col>
                <Col>{survey?.name}</Col>
            </Row>
            <Row>
                <Col>Datum poslední změny</Col>
                <Col>{last}</Col>
            </Row>
        </CardCapsule>
    )
}
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SurveyMediumCard = ({survey}) => {
    return (
        <CardCapsule  title={"Událost - atributy: " + survey?.name}>

            <Row>
                <Col>Název</Col>
                <Col>{survey?.name}</Col>
            </Row>
            <Row>
                <Col>Změna</Col>
                <Col>{survey?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Otázky</Col>
                <Col>{survey?.questions}</Col>
            </Row>
        </CardCapsule>
    )
}
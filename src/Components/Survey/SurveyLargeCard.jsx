import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import { UserRolesCard } from './UserRolesCard'
//import { UserRawCard } from './UserRawCard'
//import { UserMediumCard } from './UserMediumCard'
//import { UserLink } from './UserLink'

export const SurveyLargeCard = ({survey, children}) => {
    return (
        <CardCapsule  title={"Survey " + survey?.name}>
        <Row>
            <Col md={3}>
                {/*<UserMediumCard user={user}/>*/}
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                {/*<UserRolesCard user={user}/>*/}
            </Col>

        </Row>
        <br />
        <Row>
            <Col>
                {/*<UserRawCard user={user}/>*/}
                {JSON.stringify(survey)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import { UserRolesCard } from './UserRolesCard'
//import { UserRawCard } from './UserRawCard'
import { SurveyQuestionsMediumCard } from './SurveyQuestionsMediumCard'
import { QuestionLink } from './SurveyQuestionLink'
//import { UserLink } from './UserLink'

export const SurveyQuestionsLargeCard = ({question, children}) => {
    return (
        <CardCapsule  title={<>Otázka <QuestionLink question={question } /></>}>
        <Row>
            <Col md={3}>
                <SurveyQuestionsMediumCard question={question}/>
                {/*<UserMediumCard user={user}/>*/}
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                {/* <SurveyMediumCard survey={survey}/> */}
                {/*<UserRolesCard user={user}/>*/}
            </Col>

        </Row>
        <br />
        <Row>
            <Col>
                {/*<UserRawCard user={user}/>*/}
                {/* {JSON.stringify(questions)} */}
            </Col>
        </Row>
    </CardCapsule>

    )
}
import { CardCapsule, useDispatch,DeleteButton} from '@hrbolek/uoisfrontend-shared/src'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserLink } from '../User/UserLink'
// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'
// import { UserLink } from './UserLink'

const AnswersRow = ({answer}) => {
    // const dispatch=useDispatch()
    // const onClick=()=>{
    //     const updater = async () => {
    //         const variables={id: question.id}
    //         await dispatch(DeleteQuestionAsyncAction(variables))
    //         await dispatch(FetchPublicationByIdAsyncAction(publication))
    //     }
    //     updater()
    // }


    return (
        <tr>
            {/* <td><a href={`/surveys/question/view/${question?.id}`}>{question?.name}</a></td> */}
            <td>{answer?.question.name}</td>
            <td>{answer?.value}</td>
            <td>{answer?.lastchange}</td>
            <td><DeleteButton >D</DeleteButton></td>
        </tr>
    )
}






export const UserAnswerCard = ({usera}) => {
    const dispatch=useDispatch()
    return (
        <CardCapsule  title={<>Odpovedi uzivatele </>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        <th>Otázka</th>
                        <th>Odpověď</th>
                        <th>Datum</th>
                        {/* <th>{JSON.stringify(usera)}</th> */}
                    </tr>
                </thead>
                <tbody>
                    {usera.answers.map(
                        p => <AnswersRow key={p.id} answer={p} />
                    )}
                </tbody>
            </table>
            {/* <QuestionCreateButton survey={survey} /> */}
            
        </CardCapsule>
    )
}
    
    
    
    
    
//     return (
//         <CardCapsule  title={<>Uživatel <UserLink user={user } /></>}>
//         <Row>
//             <Col md={3}>
//                 <UserMediumCard user={user}/>
//             </Col>
//             <Col md={6}>
//                 {children}
//             </Col>
//             <Col md={3}>
//                 <UserRolesCard user={user}/>
//             </Col>
            
//         </Row>
//         <br />
//         <Row>
//             <Col>
//                 <UserRawCard user={user}/>
//             </Col>
//         </Row>
//     </CardCapsule>

//     )
// }

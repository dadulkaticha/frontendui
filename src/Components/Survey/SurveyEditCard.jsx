/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateSurveyAsyncAction } from '../../Queries/UpdateSurveyAsyncAction'
/* import { SurveyEditType } from './SurveyEditType' */
import { SurveyLink } from './SurveyLink'

// const changedAsyncActioj = (item)=> {
//     const changedItem = {...item, value: Number(item.value)}
//     return UpdateEventAsyncAction(changedItem)
// }

export const SurveyEditCard = ({survey}) => {

    /* const onCancel = () => {}
    const onOk = () => {}
    const [visible, setVisible] = useState(true) */
    return (
        <CardCapsule  title={<>Dotazník <SurveyLink survey={survey } /></>}>
            <Row>
                <Col>
                    <EditableAttributeText item={survey} attributeName ="name" label="Název" asyncUpdater={UpdateSurveyAsyncAction}/>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                 <SurveyEditType survey = {survey}/>  
                </Col>
            </Row> */}
        </CardCapsule>
    )
}
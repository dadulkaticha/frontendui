/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SurveyLink_ = ({survey, children}) => {
    return (
        <Link to={"/survey/view/" + survey?.id}>{children?children:survey?.name}</Link>
    )
}

const SurveyMenuItems = {
    "Editovat": "local:/survey/edit",
    "Zobrazit": "local:/survey/view",

}

export const SurveyLink = ({survey, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <SurveyLink_ survey={survey}>
                    {children}
                </SurveyLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to={"/survey/view/" + survey?.id} >Zobrazit</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/survey/edit/" + survey?.id} >Editovat</Link></Dropdown.Item>
                    {/* <Dropdown.Item ><Link to={"/eventpresences/view/" + event?.id} >Účast</Link></Dropdown.Item> */}
                    <Dropdown.Item ><Link to={"/surveyquestions/view/" + survey?.id} >Anketa</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                


            )
    } else {
        return (
            <SurveyLink_ survey={survey}>{children}</SurveyLink_>
        )
    }
}
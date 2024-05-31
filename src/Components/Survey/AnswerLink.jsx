/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src"
import { base } from "../../config"

export const AnswerLink_ = ({answer, children}) => {
    return (
        <ProxyLink to={base + "/survey/view/" + survey?.id}>{children?children:survey?.name}</ProxyLink>
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
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/survey/view/" + survey?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/survey/edit/" + survey?.id} >Editovat</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/surveyquestions/view/" + survey?.id} >Anketa</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                


            )
    } else {
        return (
            <SurveyLink_ survey={survey}>{children}</SurveyLink_>
        )
    }
}
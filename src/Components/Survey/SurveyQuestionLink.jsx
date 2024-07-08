/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src"
import { base } from "../../config"

export const QuestionLink_ = ({question, children}) => {
    return (
        <ProxyLink to={base + "/question/view/" + question?.id}>{children?children:question?.name}</ProxyLink>
    )
}

const QuestionMenuItems = {
    "Editovat": "local:/survey/edit",
    "Zobrazit": "local:/question/view",

}

export const QuestionLink = ({question, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <QuestionLink_ question={question}>
                    {children}
                </QuestionLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={base + "/survey/edit/" + question?.survey?.id} >Zpět</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                


            )
    } else {
        return (
            <QuestionLink_ question={question}>{children}</QuestionLink_>
        )
    }
}
// import React from 'react'
import "../../../Styles/doctor/03_Research/ResearchviewAll.css"
import { useEffect } from "react";
import Card_View from "../Global/Card_View";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ResearchviewAll = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getResearchFormData("Research"))
    }, [])

    const { research } = useSelector(state =>
        state.formReducer)
    const navigateResearchView = () => {
        navigate("Researchview")
    }
    return (
        <>
            <div className="researchAll-main">
                <Col sm={1} style={{ float: "left"}}>
                    <Link to={"/"}><FontAwesomeIcon icon={faArrowLeft} size="xl" style={{ color: "white", }} /></Link>
                </Col>
                <div className="reseachAll-heading">
                    <p> Researches </p>
                </div>


                <div className="researchAll-content">
                    {
                        (rchlication.isResult) &&
                        (rchlication.data.map((contentValue, index) => {
                            return (
                                <div className="researchAll-card" key={index} onClick={navigateResearchView}>
                                    <Row lg={4} sm={2} md={4}>
                                        <Col md={4} sm={2} lg={4}>
                                            <Card_View content={contentValue} />
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        </>
    );
};

export default ResearchviewAll;

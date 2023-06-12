// import React from 'react'
import "../../../Styles/doctor/04_Publication/PubviewAll.css"
import { useEffect } from "react";
import Card_View from "../Global/Card_View";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getPublicationFormData } from "../../../App/Slice/formSlice.js";
import { Row, Col } from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const PubviewAll = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPublicationFormData("Publications"))
    }, [])

    const { publication } = useSelector(state =>
        state.formReducer)
    const navigatePubView = (id) => {
        navigate(`/publication/${id}`)
    }
    return (
        <>
            <div className="PublicationAll-main">
                <Col sm={1} xs={1} style={{paddingLeft:'100px'}} className="pubbackarrow" >
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{ color: "white", }} />
                    </Link>
                </Col>
                <div className="publicationAll-heading">
                    <p> Publications </p>
                </div>


                <div className="publicationAll-content">
                    {
                        (publication.isResult) &&
                        (publication.data.map((contentValue, index) => {
                            return (
                                <div className="publicationAll-card" key={index} onClick={
                                    ()=>navigatePubView(contentValue.id)}>
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

export default PubviewAll;

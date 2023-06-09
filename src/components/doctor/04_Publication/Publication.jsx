// import React from 'react'
import "../../../Styles/doctor/04_Publication/Publication.css";
import getCardData from "../Global/getCardData";
import {useEffect} from "react";
import Card_View from "../Global/Card_View";
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {getPublicationFormData} from "../../../App/Slice/formSlice.js";

const Publication = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 100, left: 0, behavior: 'smooth'});
    }, []);
    const {publication} = useSelector(state =>
        state.formReducer)
    const navigatePubView = () => {
        navigate("Pubview")
    }
    const navigatePubViewAll = () => {
        navigate("PubviewAll")
    }
    return (
        <>
            <div className="Publication-main">
                <div className="publication-heading">
                    <p> Publications </p>
                </div>

                <div className="publication-content">
                    {
                        (publication.isResult) &&
                        (publication.data.map((contentValue, index) => {
                            return (
                                <div className="publication-card" key={index} onClick={navigatePubView}>
                                    <Card_View content={contentValue}/>
                                </div>
                            )
                        }))
                    }
                </div>
                <div className="pubviewall">
                    <Button onClick={navigatePubViewAll}>View All &nbsp;<FontAwesomeIcon icon={faArrowRight} size="sm" style={{color: "#ffffff",}}/></Button>
                </div>
            </div>


        </>
    );
};

export default Publication;

import image1 from "../../../assets/Doctor/Images/rch1.png"
import image2 from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import "../../../Styles/doctor/03_Research/Research.css"
import getCardData from "../Global/getCardData"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import React from "react"

const Research = () => {
    const navigate = useNavigate()
    const navigateRchView = () => {
        navigate("/Researchview")
    }
    const navigateRchViewAll = () => {
        navigate("/ResearchviewAll")
    }
    const screenArray = [
        [
            "Cancer Screening AI",
            "AI for Cancer detection",
            "By detecting early-stage cancers, AI enables management that can increase chance of survival"
        ],
        [

            "Cancer Screening AI",
            "AI for Cancer detection",
            "By detecting early-stage cancers, AI enables management that can increase chance of survival"
        ]
    ]
    getCardData("Research")
    return (
        <>
            <div className="Research-main">
                <center>
                    <h2>Saving Lives Through Technology</h2>
                    <br />
                </center>
                <div className="rchmain row row-cols-1 row-cols-md-2 g-1">
                    {
                        screenArray.map((contentValue, index) => {
                            return (
                                <>
                                    <div className="col-sm-6 mb-3 mb-sm-0" key={index} >
                                        <div className="card bg-transparent container-ai" id="carocard">
                                            <img src={image1} height="350px" className="d-block w-100 rounded-4" alt="..." />
                                            <div className="card-img-overlay bg-transparent container-text">
                                                {
                                                    contentValue.map((values, index) => {
                                                        return (
                                                            <>
                                                                <p className="card-text bg-transparent" key={index}>
                                                                    {values}
                                                                </p>
                                                            </>
                                                        )
                                                    })
                                                }
                                                <div className="btncont bg-transparent">
                                                    <div className="p-2 bg-transparent">
                                                        <Link  className="container-button" 
                                                        onClick={()=>{
                                                            navigate("/Researchview")
                                                        }}>
                                                            <FontAwesomeIcon icon={faCircleArrowRight} size="2xl" style={{ color: "#ffffff", }} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
                <div onClick={navigateRchViewAll} className="rchviewall">
                    <Button>View All &nbsp;<FontAwesomeIcon icon={faArrowRight} size="sm" style={{ color: "#ffffff", }} /></Button>
                </div>
            </div>
        </>
    )
}

export default Research
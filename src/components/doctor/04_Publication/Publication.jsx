// import React from 'react'
import "../../../Styles/doctor/04_Publication/Publication.css";
import getCardData from "../Global/getCardData";
import { useEffect, useState } from "react";
import Card_View from "../Global/Card_View";
import {Link, useNavigate} from 'react-router-dom'

const Publication = () => {
    const navigate = useNavigate()
    const [getPublication, setgetPublication] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getCardData("Publications")
                setgetPublication(data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    console.log(getPublication);

    const navigatePubView = ()=>{
        navigate("Pubview")
    }
    return (
        <>
            <div className="Publication-main">
                <div className="publication-heading">
                    <p> Publications </p>
                </div>

                <div className="publication-content">
                    {
                        getPublication.map((contentValue, index) => {
                            return (
                                    <div className="publication-card" key={index} onClick={navigatePubView}>
                                        <Card_View content={contentValue} />
                                    </div>
                            )
                        })
                    }
                </div>
                <div className="pub_viewall"><h6>View All</h6></div>
                
            </div>

        </>
    );
};

export default Publication;

// import React from 'react'
import "../../../Styles/doctor/04_Publication/Publication.css";
import getCardData from "../Global/getCardData";
import { useEffect, useState } from "react";
import Card_View from "../Global/Card_View";
import { Link } from 'react-router-dom'

const Publication = () => {
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
                                    <div className="publication-card" key={index}>
                                        <Card_View content={contentValue} />
                                    </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
};

export default Publication;

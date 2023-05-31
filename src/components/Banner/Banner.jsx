import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../Styles/Banner/Banner.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    const [banerShow, setBanerShow] = useState(true)
    const navigate = useNavigate()
    return (
        <>
            {
                banerShow &&
                <div className="banner-details" id="banner">
                    <h4>
                        Please fill registraion form to access all the response
                        <span onClick={() => navigate("/userDetails")}>    <u>Click here</u>&nbsp;&nbsp;&nbsp; </span>
                    </h4>
                    
                    <FontAwesomeIcon className="xmark" id="closemark" icon={faXmark} size="xl" style={{color: "#ffffff",}}
                    onClick={()=>
                    setBanerShow(false)}
                    />
                   


                </div>
            }
        </>

    );
};

export default Banner;

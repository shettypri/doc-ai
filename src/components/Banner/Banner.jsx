import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../Styles/Banner/Banner.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {fXmark} from '@fortawesome/free-solid-svg-icons'



const Banner = () => {
    const [banerShow, setBanerShow] = useState(true)
    const navigate = useNavigate()
    return (
        <>
            {
                banerShow &&
                <div className="banner-details">
                    <h4>
                        Please fill registraion form to access all the response
                        <span onClick={() => navigate("/userDetails")}>    <u>Click here </u> </span>
                    </h4>
                    <section>
                    <FontAwesomeIcon icon="fa-sharp fa-solid fa-xmark" size="xl" style={{color: "#ffffff",}} />
                    </section>


                </div>
            }
        </>

    );
};

export default Banner;

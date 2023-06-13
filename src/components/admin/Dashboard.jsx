// import React from 'react'
import "../../Styles/admin/Dashboard/Dashboard.css"
import {Link, useNavigate} from 'react-router-dom'
import publication from "../../assets/Admin/Dash-board/publication.jpg"
import research from "../../assets/Admin/Dash-board/research.jpg"
import account from "../../assets/Admin/Dash-board/settings.jpg"
import {useDispatch, useSelector} from "react-redux";
import {contactDetailsByIdReducer} from "../../app/Slice/contactSlice.js";
import {isRejected} from "@reduxjs/toolkit";
import {getPendingRequestReducers} from "../../App/Slice/adminSlice.js";
import data from "bootstrap/js/src/dom/data.js";

const Dashboard = () => {

    const {contactstate} = useSelector(
        state => state.contactReducer
    )
    const {contactDetailsByIdReducer} = useSelector(
        state => state.contactReducer
    )

    let count = 0;

    for (let i = 0; i < contactstate.data.length; i++) {
        if (contactstate.data[i].isResponde !== true) {
            count++;
        }
    }


    const navigate = useNavigate()
    return (
        <>
            <div className={"contact-btn"}>
                <button onClick={() => {
                    navigate('/Dashboard/contact_request')
                }}>
                    request {count}

                </button>
            </div>

            <div className="dash-board">

                <div className="card-dash">
                    <Link to='/Dashboard/Form'>
                        <div className="heading">
                            Publication
                        </div>
                        <img src={publication} alt="" height={'200px'} width="295px"/>
                    </Link>
                </div>

                <div className="card-dash">
                    <Link to='/Dashboard/researchForm'>
                        <div className="heading">
                            Research
                        </div>
                        <img src={research} alt="" height={"200px"} width={"295"}/>
                    </Link>
                </div>

                <div className="card-dash">
                    <Link to='/Account'>
                        <div className="heading">
                            Account
                        </div>
                        <img src={account} alt="" height={"200px"} width={"295"}/>
                    </Link>


                </div>
            </div>

        </>
    )
}

export default Dashboard
// import React from 'react'
import "../../Styles/admin/Dashboard/Dashboard.css"
import {Link, useNavigate} from 'react-router-dom'
import publication from "../../assets/Admin/Dash-board/publication.jpg"
import research from "../../assets/Admin/Dash-board/research.jpg"
import account from "../../assets/Admin/Dash-board/settings.jpg"
import {useDispatch} from "react-redux";
import {getPendingRequestReducers} from "../../App/Slice/adminSlice.js";

const Dashboard = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className={"contact-btn"}>
                <button onClick={()=>{
                    navigate('/Dashboard/contact_request')
                }}>
                    request
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
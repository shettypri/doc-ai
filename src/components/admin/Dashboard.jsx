// import React from 'react'
import "../../Styles/admin/Dashboard/Dashboard.css"
import {Link} from 'react-router-dom'
import publication from "../../assets/Admin/Dash-board/publication.jpg"
import research from "../../assets/Admin/Dash-board/research.jpg"
import account from "../../assets/Admin/Dash-board/account1.png"
import {useDispatch} from "react-redux";
import {getPendingRequestReducers} from "../../App/Slice/adminSlice.js";

const Dashboard = () => {
    console.log("render")

    return (
        <>
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
                    <div className="heading">
                        <Link to='/Account'>
                            Account
                            <img src={account} alt="" height={"200px"} width={"295"}/>
                        </Link>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Dashboard
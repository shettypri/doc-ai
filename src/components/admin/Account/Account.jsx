import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../../../Styles/admin/Account/Account.css"
import img from "../../../assets/Admin/Dash-board/doc.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {allAcceptedDoctorReducers, getPendingRequestReducers} from "../../../App/Slice/adminSlice.js";


const Account = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPendingRequestReducers("users"))
        dispatch(allAcceptedDoctorReducers())
    }, []);

    const {pendingDoctorRequest, acceptAlldocList,acceptAllDocLoading} = useSelector(
        state => state.adminReducer
    )



    const Accountslist = [
        {
            "name": "name1",
            "specialist": "specialist1",
            "image": img

        },
        {
            "name": "name2",
            "specialist": "specialist2",
            "image": img
        },

    ]

    const handleclick = (Event) => {
        console.log(Event.img);
        console.log("hello");
    }



    return (
        <>
            {acceptAllDocLoading &&
            <h1>
                Loading
            </h1>
            }
            <div className="list-main">

                <div className="doctor-add-btn">
                    <Link to='/Account/PendingReq'>
                        Requests {pendingDoctorRequest.length}
                    </Link>
                </div>


                <div className="account-card">
                    {
                        acceptAlldocList.map((doctor, index) => {
                            return (
                                <>
                                    <center>
                                        <div className="doctor-list" key={index}>
                                            <div className="delete-list">
                                                <Link><FontAwesomeIcon icon={faCircleXmark} size="xl"
                                                                       style={{color: "#ff0000",}}/></Link>
                                            </div>
                                            <div className="image-list">
                                                <img src={doctor.imageUrl} width={"150px"} height={"150px"}
                                                     onClick={handleclick}/>
                                            </div>
                                            <div className="doctor-details">
                                                <p>

                                                    {index + 1}) Dr. {
                                                    `${doctor.firstName} ${doctor.lastName}`
                                                }
                                                </p>
                                                <p>
                                                    {doctor.Specialization}
                                                </p>

                                            </div>

                                        </div>
                                    </center>
                                </>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}

export default Account
import React, {useEffect} from 'react'
import "../../../Styles/admin/Account/PendingReq.css"
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faXmark, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {acceptDoctorReducers, getPendingRequestReducers, rejectDoctorReducers} from "../../../App/Slice/adminSlice.js";
import Loading from '../../Alert/Loading';

const PendingReq = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch( getPendingRequestReducers("users"))
    }, []);

    let i=1;
    const {pendingRequestState} = useSelector(
        state => state.adminReducer
    )
    const acceptDoctor = (doctorId)=>{
        console.log("Clicked accept",doctorId)
        dispatch(acceptDoctorReducers(doctorId))
        dispatch(getPendingRequestReducers("users"))
    }

    const deleteDoctor = (doctorId)=>{
        console.log("Clicked Deleted",doctorId)
        dispatch(rejectDoctorReducers(doctorId))
        dispatch(getPendingRequestReducers("users"))
    }
    return (
        <>
            <div className='penreq'>
                <center>
                    <div className='back'>
                        <Link to="/Account">
                            <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#ffffff",}}/></Link>
                    </div>
                    <h2><u>Requests</u></h2>

                    {
                        pendingRequestState.loading &&
                        <Loading/>
                    }

                    <Card className='card'>
                        <table>
                            <thead>
                            <tr style={{textAlign:"center"}}>
                                <th>Sl.no</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>Accept</th>
                                <th>Reject</th>
                            </tr>
                            </thead>
                            { pendingRequestState.isDataFetched &&
                            <tbody>
                                {pendingRequestState.data.map((doctor,index) =>{
                                    return(
                                        <tr key={index} >
                                            <td>{i++}</td>
                                            <td>
                                                Dr {`${doctor.firstName} ${doctor.lastName}`}
                                            </td>
                                            <td>
                                                {doctor.phoneNumber}
                                            </td>
                                            <td
                                            onClick={
                                                () => acceptDoctor(doctor.id)
                                            }
                                            className={"doc-result-btn"}
                                            >
                                                <FontAwesomeIcon icon={faCheck} size="xl" style={{color: "greenyellow",}}/>
                                            </td>
                                            <td
                                                className={"doc-result-btn"}
                                            onClick={
                                                ()=>deleteDoctor(doctor.id)
                                            }
                                            >
                                                <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "red",}}/>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            }
                        </table>
                    </Card>

                </center>
            </div>
        </>
    )
}

export default PendingReq
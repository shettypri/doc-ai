import React, {useEffect} from 'react'
import "../../../Styles/admin/Account/PendingReq.css"
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faXmark, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {getPendingRequestReducers} from "../../../App/Slice/adminSlice.js";

const PendingReq = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch( getPendingRequestReducers("users"))
    }, []);


    let i=1;
    const {pendingDoctorRequest,isPendingFetched} = useSelector(
        state => state.adminReducer
    )
    const acceptDoctor = (doctorId)=>{
        console.log("Clicked accept",doctorId)
    }

    const deleteDoctor = (doctorId)=>{
        console.log("Clicked Deleted",doctorId)
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
                    <Card className='card'>
                        <table>
                            <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>Accept</th>
                                <th>Reject</th>
                            </tr>
                            </thead>
                            {isPendingFetched &&
                            <tbody>

                                {pendingDoctorRequest.map((doctor,index) =>{
                                    return(
                                        <tr key={index}>
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

                    {/* <div className="pendreq">
                    <table cols={3}>
                        <thead>
                            <tr style={{justifyContent:'center'}}>
                                <th>Requests</th>
                                <th></th>
                                <th>Accept</th>
                                <th></th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Card className='card'>
                                        <Card.Body className='cardbody'>This is some text within a card body.</Card.Body>
                                    </Card>
                                </td>
                                <td></td>
                                <td><FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", }} /></td>
                                <td></td>
                                <td><FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
                </center>
            </div>
        </>
    )
}

export default PendingReq
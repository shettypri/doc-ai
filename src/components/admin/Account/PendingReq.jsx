import React from 'react'
import "../../../Styles/admin/Account/PendingReq.css"
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const PendingReq = () => {
    return (
        <>
            <center>
            <Link to="/Account" style={{float:'left',paddingLeft:"100px",marginBottom:"50px"}}><FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#ffffff",}} /></Link>
                <h2><u>Requests</u></h2>
                <Card className='card'>
                    <table>
                        <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Requests</th>
                                <th>Accept</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dr</td>
                                <td><Link><FontAwesomeIcon icon={faCheck} size="xl" style={{ color: "#ffffff", }} /></Link></td>
                                <td><Link><FontAwesomeIcon icon={faXmark} size="xl" style={{ color: "#ffffff", }} /></Link></td>
                            </tr>
                        </tbody>
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
        </>
    )
}

export default PendingReq
import React from 'react'
import { Link } from 'react-router-dom'
import "../../../Styles/admin/Account/Account.css"
import img from "../../../assets/Admin/Dash-board/doc.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const Account = () => {
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

    const handleclick = Event=>{
        console.log(Event.img);
        console.log("hello");
    }


    return (
        <>
        <div className="list-main">

            <div className="doctor-add-btn">
                <Link to='/PendingReq'>
                Requests
                </Link>  
            </div>
            
            
            <div className="account-card">
            {
                Accountslist.map( (doctor, index) => {
                    return (
                        <>
                            <center>
                            <div className="doctor-list" key={index}>
                                <div className="delete-list">
                                <Link><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#ff0000",}} /></Link>
                                </div>
                                <div className="image-list">
                                    <img src={doctor.image} width={"150px"} height={"150px"}  onClick={handleclick}  />
                                </div>
                                <div className="doctor-details">
                                    <p>
                                        
                                         {index +1 }) Dr. {doctor.name}
                                    </p>
                                    <p>
                                        {doctor.specialist}
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
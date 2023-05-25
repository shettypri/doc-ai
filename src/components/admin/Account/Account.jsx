import React from 'react'
import { Link } from 'react-router-dom'
import "../../../Styles/admin/Account/Account.css"
import img from "../../../assets/Admin/Dash-board/doc.jpg"
import cancel from "../../../assets/Admin/Dash-board/close.png"


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
                <Link to=''>
                   Requests     
                </Link>  
            </div>
            
       
            <div className="account-card">
            {
                Accountslist.map( (doctor, index) => {
                    return (
                        <>
                            <div className="doctor-list" key={index}>
                                <div className="delete-list">
                                    <img src={cancel} width={"25px"} height={"25px"} />
                                </div>
                                <div className="image-list">
                                    <img src={doctor.image} width={"200px"} height={"200px"}  onClick={handleclick}  />
                                </div>
                                <div className="doctor-details">
                                    <p>
                                        
                                         {index +1 } Dr. {doctor.name}
                                    </p>
                                    <p>
                                        {doctor.specialist}
                                    </p>

                                </div>

                            </div>
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
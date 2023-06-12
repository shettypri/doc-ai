import React, {useEffect} from 'react';
import "../../../Styles/admin/contact_request/contact.css"
import Card from "react-bootstrap/Card";
import {useDispatch, useSelector} from "react-redux";
import {contactDetails, contactDetailsByIdReducer, GetContactFormData} from "../../../app/Slice/contactSlice.js";
import contact from "../../doctor/07_Contact/Contact.jsx";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft,faReply} from "@fortawesome/free-solid-svg-icons";


const ContactReq = () => {
    const dispatch=useDispatch()


    let i=1;

    const {contactstate}=useSelector(
        state => state.contactReducer

    )

    const handleSubmit=(contact)=>{
        console.log(contact)
        dispatch(contactDetailsByIdReducer(contact.id))
        dispatch(GetContactFormData("contacts"))
        return(
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${contact.email}`,"_blank")
        )
    }
    return (
        <>
            <div className={"contact-req-main"}>
                <center>
                    <div className='back'>
                        <Link to="/dashboard">
                            <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#ffffff",}}/></Link>
                    </div>
               <Card className="req-card">
                   <table>

                       <thead>
                       <tr>
                           <th>SL.NO</th>
                           <th>NAME</th>
                           <th>EMAIL</th>
                           <th>MESSAGE</th>
                           <th>RESPOND</th>

                       </tr>
                       </thead>
                       {contactstate.isResult &&
                       <tbody>
                       {contactstate.data.map((contact,index)=> {
                           return(
                               <tr key={index}>
                                   <td>{i++}</td>
                                   <td className={`${!(contact.isResponde) && 'font-contact-req'} `}>
                                       {contact.fullname}

                                   </td>
                                   <td className={`${!(contact.isResponde) && 'font-contact-req'} `}>
                                       {contact.email}

                                   </td>
                                   <td className={`${!(contact.isResponde) && 'font-contact-req'} `}>
                                       {contact.message}
                                   </td>

                                   <td>
                                       <FontAwesomeIcon icon={faReply} size="xl" style={{color: "#ff0000",}}
                                                        onClick={()=>handleSubmit(contact)}
                                       />

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

export default ContactReq;
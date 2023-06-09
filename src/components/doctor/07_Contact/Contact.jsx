import React from 'react'
import '../../../Styles/doctor/07_Contact/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import {contactDetails} from "../../../app/Slice/contactSlice.js";


const Contact = () => {
    const [contactInformation, setContactInformation] = useState({
        fullname:"",
        email:"",
        message:"",
        isResponde:false
    })
    const handeleChange =(e)=>{
        setContactInformation({
            ...contactInformation, [e.target.name]:e.target.value
        })
        if(e.target.name == 'message'){
            setCount(e.target.value.length)
        }
    }
    const dispatch=useDispatch()
    const submitConatch =()=>{

        console.log(contactInformation);
        dispatch(contactDetails(contactInformation))
    }
    
    const [count, setCount] = React.useState(0);
    return (
        <section className="contact-main">
            <div className="content">
                <p>Contact Us</p>
            </div>
            <div className="containercon">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLocationDot} size='lg'/>
                        </div>
                        <div className="text contact-details" >
                            <p>Address</p>
                            <p>abcd...</p>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} size='lg' />
                        </div>
                        <div className="text contact-details" >
                            <p>Email</p>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kavithapoojary48@gmail.com" target="_blank" style={{color:"white",textDecoration:"none"}}>kavithapoojary48@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="contactForm">
                    <form />
                    <h2>Send Message</h2>

                    <div className="inputbox">
                        <input type="text" name="fullname" 
                        required="required" 
                        className='inputbox-field' maxLength={50} 
                        onChange={handeleChange}/>
                        <span >Full Name</span>
                    </div>


                    <div className="inputbox">
                        <input type="text" name="email" 
                        onChange={handeleChange}
                        required="required" 
                            className='inputbox-field'
                        />
                        <span >Email</span>
                    </div>


                    <div className="inputbox">
                    <textarea id='messagefield' required="required" className='inputbox-field' 
                        name="message"
                            rows={4} maxLength={250} onChange={handeleChange}/>
                        <span >Type your Message...</span> <span id="count_message">{count}/250</span>
                    </div>

                    <div className="inputbox">
                        <button onClick={submitConatch}>
                            Submit
                        </button>
                    </div>
                    
                </div>
            </div><table>
            </table>
        </section>
    )
}

export default Contact
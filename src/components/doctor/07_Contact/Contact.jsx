import React from 'react'
import '../../../Styles/doctor/07_Contact/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    // const [state, setState] = useState(initState);
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
                            <FontAwesomeIcon icon={faPhoneVolume} size='lg'/>
                        </div>
                        <div className="text contact-details" >
                            <p>Phone No</p>
                            <p>507-475-6094</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} size='lg' />
                        </div>
                        <div className="text contact-details" >
                            <p>Email</p>
                            <p>kavithapoojary48@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="contactForm">
                    <form />
                    <h2>Send Message</h2>
                    <div className="inputbox">
                        <input type="text" name required="required" className='inputbox-field' maxLength={50} />
                        <span >Full Name</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" name required="required"
                            className='inputbox-field'
                        />
                        <span >Email</span>
                    </div>
                    <div className="inputbox">
                    
                        <textarea id='messagefield' required="required" className='inputbox-field'
                            rows={4} maxLength={250} onChange={e => setCount(e.target.value.length)}/>
                        <span >Type your Message...</span> <span id="count_message">{count}/250</span>
                    </div>

                    <div className="inputbox">
                        <button>
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
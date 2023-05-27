// import React from 'react'
import "../../../Styles/doctor/Navbar.css"
import navbarImage from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { signOut } from "firebase/auth"
import { auth } from "../../../config/firebase-config"
// import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    const navbarList = [
        "Research", "Publication", "About-Us", "Contact-Us", "Dashboard"
        // "login"
    ]
    const handleLogout = async()=>{
        try {
            const isSignOut = await signOut(auth)
            console.log("signOut done",isSignOut);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img src={navbarImage} alt="Logo" />
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <input type="checkbox" id="check" />
                        <div className="nav-box">
                            {
                                navbarList.map((listValue, index) => {
                                    return (
                                        <li className="p-2" key={index}>
                                            <Link to={listValue}>{listValue}</Link>
                                        </li>
                                    )
                                })

                            }

                            {/* Drop Down List for Admin and User*/}
                            <li className="p-2">
                                <Link >Login</Link>
                            </li>
                            <div className="dropdown1">
                                <li className="p-2">
                                    <Link >Admin <FontAwesomeIcon icon={faCaretDown} /></Link>
                                </li>
                                <div className="dropdown-options1">
                                    <Link >Dashboard </Link>
                                    <Link >Logout </Link>
                                </div>
                            </div>
                            <div className="dropdown2">
                                <li className="p-2">
                                    <Link >User <FontAwesomeIcon icon={faCaretDown} /></Link>
                                </li>
                                <div className="dropdown-options2">
                                    <Link to="{Projects}" >Projects</Link>
                                    <Link onClick={handleLogout}>Logout </Link>
                                </div>
                            </div>
                            {/* Drop Down List Ends */}

                            
                        </div>

                        <label htmlFor="check" className="open-menu"><FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", }} /></label>
                    </ul>
                </nav>
            </header >
        </>
    )
}

export default Navbar
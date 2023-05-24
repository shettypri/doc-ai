// import React from 'react'
import "../../../Styles/doctor/Navbar.css"
import navbarImage from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    const navbarList = [
        "Research", "Publication", "Projects", "About-Us", "Contact-Us","Dashboard"
        // "login"
    ]
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
                            
                        </div>
                        
                        <label htmlFor="check" className="open-menu"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></label>
                    </ul>   
                </nav>
            </header>
        </>
    )
}

export default Navbar
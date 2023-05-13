// import React from 'react'
import "../../../Styles/doctor/Navbar.css"
import navbarImage from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    const navbarList=[
        "Research",
        "Publication",
        "Projects",
        "About-Us",
        "Contact-Us"
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
                        <div className="d-flex flex-row">
                            {
                                navbarList.map((listValue,index)=>{
                                    return(
                                        <li className="p-2" key={index}>
                                            <Link to="/research">{listValue}</Link>
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
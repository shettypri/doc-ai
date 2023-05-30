// import React from 'react'
import "../../../Styles/doctor/Navbar.css"
import navbarImage from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import {Link, useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {isLogoutReducers, isUserLogInReducers} from "../../../App/Slice/userSlice.js";

const Navbar = () => {

    const navbarList = [
        "Research", "Publication", "About-Us", "Contact-Us"
        // "login"
    ]

    const dispatch = useDispatch()

    const handleLogout = async () => {
        sessionStorage.removeItem("key")
        console.log("logout clicked");
        await dispatch(isLogoutReducers())
        navigate('/')
    }


    const navigate = useNavigate()
    const {data, error, isLoggedIn, loading, newUser} = useSelector(
        state => state.userReducer
    )
    return (
        <>
            <header>
                {data.length == 0
                &&
                    <h3>
                        Please fill registraion form to accless all the response
                        <span  onClick={
                            ()=>
                                navigate("/userDetails")
                        }>
                             Click here
                        </span>
                    </h3>
                }
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img src={navbarImage} alt="Logo"/>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <input type="checkbox" id="check"/>
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
                            {
                                !(isLoggedIn) ?
                                    (<li className="p-2">
                                        <Link to={"/otplogin"}>Login</Link>
                                    </li>)
                                    : (
                                        <>
                                            {data.isAdmin &&
                                                (
                                                    <div className="dropdown1">
                                                        <li className="p-2">
                                                            <Link>Admin <FontAwesomeIcon icon={faCaretDown}/></Link>
                                                        </li>
                                                        <div className="dropdown-options1">
                                                            <Link to="/Dashboard">Dashboard </Link>
                                                            <Link onClick={handleLogout}>Logout </Link>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <div className="dropdown2">
                                                <li className="p-2">
                                                    <Link>
                                                        Doctor
                                                        <FontAwesomeIcon icon={faCaretDown}/></Link>
                                                </li>
                                                        <div className="dropdown-options2">
                                                            {
                                                                data.isDocAuthorized &&
                                                                (
                                                                    <>
                                                                        <Link to="{Projects}">Projects</Link>
                                                                    </>
                                                                )
                                                            }
                                                            <Link onClick={handleLogout}>Logout </Link>
                                                        </div>



                                            </div>
                                        </>
                                    )
                            }


                            {/* Drop Down List Ends */}

                        </div>

                        <label htmlFor="check" className="open-menu"><FontAwesomeIcon icon={faBars}
                                                                                      style={{color: "#ffffff",}}/></label>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
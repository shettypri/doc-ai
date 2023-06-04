// import React from 'react'
import "../../../Styles/doctor/Navbar.css"
import navbarImage from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {isLogoutReducers} from "../../../App/Slice/userSlice.js";
import Banner from "../../Banner/Banner.jsx"
import AdminConfimBanner from "../../Banner/AdminConfimBanner.jsx"
import { useEffect } from "react"
import { Link as Scroll } from 'react-scroll'


const Navbar = () => {

    const navbarList = [
        "Research", "Publication", "About", "Contact"
        // "login"
    ]
    const reactscroll = ["first", "second", "third", "fourth", "fifth"]

    useEffect(() => {
        if (sessionStorage.getItem("mobileNumber") != null) {
            sessionStorage.removeItem("mobileNumber")
        }
    }, []);

    const dispatch = useDispatch()

    const handleLogout = async () => {
        sessionStorage.removeItem("key")
        console.log("logout clicked");
        await dispatch(isLogoutReducers())
        navigate('/')
    }

    const navigate = useNavigate()
    const { data, error, isLoggedIn, loading, newUser } = useSelector(
        state => state.userReducer
    )
    console.log(data)
    const loc = useLocation()
    console.log(loc.pathname)

    return (
        <>
            <header>
                {data.length !== 0
                    &&
                    (<>
                        {
                            !data.isAdmin &&
                            (<>
                                {data.length === 0 &&
                                    (<Banner />)}
                                {!data.isDocAuthorized &&
                                    <AdminConfimBanner />
                                }

                            </>)
                        }

                    </>
                    )

                }
                <nav className={"navbar-tag"}>
                    <div className="logo">
                        {
                            loc.pathname !== "/" ?(
                                <Link to={"/"}>
                                    <img src={navbarImage} alt="Logo" style={{ cursor: "pointer" }} />
                                </Link>
                            ):(
                        <Scroll to="first" spy={true} smooth={true} offset={-500} duration={500}>
                            <img src={navbarImage} alt="Logo" style={{ cursor: "pointer" }} />
                        </Scroll>
                                )
                        }
                    </div>
                    <ul className="nav-links">
                        <input type="checkbox" id="check" />
                        <div className="nav-box">
                            {

                                    navbarList.map((listValue, index) => {
                                        return (
                                            <li className="p-2" key={index}>
                                                {
                                                    loc.pathname !== "/" ?(
                                                        <Link to={"/"}>{listValue}</Link>
                                                    ):(
                                                        <Scroll to={reactscroll[index + 1]}
                                                                spy={false} smooth={true} offset={-160}
                                                                duration={400}
                                                                style={{cursor:'pointer',color:'white'}}>
                                                            {listValue}
                                                        </Scroll>
                                                    )
                                                }
                                            </li>
                                        )
                                    })
                                // })


                            }
                            {/* navbar for home screen */}
                            {
                                // <div>
                                //     <li className="p-2">Research</li>
                                //     <li className="p-2">Publications</li>
                                //     <li className="p-2">About</li>
                                //     <li className="p-2">Contact</li>
                                // </div>
                            }

                            {/* Drop Down List for Admin and User*/}
                            {
                                !(isLoggedIn) ?
                                    (
                                        <li className="p-2">
                                            <Link to={"/otplogin"}>Login/Register</Link>
                                        </li>)
                                    : (
                                        <>
                                            {data.isAdmin ?
                                                (
                                                    <div className="dropdown1">
                                                        <li className="p-2">
                                                            <Link>Admin <FontAwesomeIcon icon={faCaretDown} /></Link>
                                                        </li>
                                                        <div className="dropdown-options1">
                                                            <Link to="/Dashboard">Dashboard </Link>
                                                            <Link onClick={handleLogout}>Logout </Link>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="dropdown2">
                                                        <li className="p-2">
                                                            <Link>
                                                                Doctor
                                                                <FontAwesomeIcon icon={faCaretDown} /></Link>
                                                        </li>
                                                        <div className="dropdown-options2">
                                                            {
                                                                data.isDocAuthorized &&
                                                                (
                                                                    <>
                                                                        <Link to="/Project">Projects</Link>
                                                                    </>
                                                                )
                                                            }
                                                            <Link onClick={handleLogout}>Logout </Link>
                                                        </div>



                                                    </div>
                                                )
                                            }

                                        </>
                                    )
                            }


                            {/* Drop Down List Ends */}

                        </div>

                        <label htmlFor="check" className="open-menu"><FontAwesomeIcon icon={faBars}
                            style={{ color: "#ffffff", }} /></label>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
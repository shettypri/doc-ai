// import React from 'react'
import "../../../Styles/doctor/Navbar.css"
import navbarImage from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import {Link, useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {isLogoutReducers, isUserLogInReducers} from "../../../App/Slice/userSlice.js";
import Banner from "../../Banner/Banner.jsx"
import AdminConfimBanner from "../../Banner/AdminConfimBanner.jsx"
import { useEffect } from "react"
import { Link as Scroll } from 'react-scroll'


const Navbar = () => {

    const navbarList = [
        "Research", "Publication", "About", "Contact"
        // "login"
    ]
    const reactscroll = ["first","second","third","fourth","fifth"]

    useEffect(() => {
        if(sessionStorage.getItem("mobileNumber") != null){
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
    const {data, error, isLoggedIn, loading, newUser} = useSelector(
        state => state.userReducer
    )
    console.log(data)
    return (
        <>
            <header>
                {data.length !== 0
                &&
              (  <>
                      {
                          ! data.isAdmin &&
                          ( <>
                                  {data.length === 0 &&
                              (<Banner/>)}
                              {!data.isDocAuthorized &&
                                  <AdminConfimBanner/>
                              }

                                  </>)
                      }

              </>
              )

                }
                <nav className={"navbar-tag"}>
                    <div className="logo">
                        <Scroll to="/" spy={true} smooth={true} offset={50} duration={500}>
                            <img src={navbarImage} alt="Logo"/>
                        </Scroll>
                    </div>
                    <ul className="nav-links">
                        <input type="checkbox" id="check"/>
                        <div className="nav-box">
                            {
                                // reactscroll.map((hashvalue)=>{
                                    navbarList.map((listValue, index) => {
                                        return (
                                            <li className="p-2" key={index}>
                                                {/*<Link to={listValue}>{listValue}</Link>*/}
                                                <Scroll to="first" spy={false} smooth={true} offset={850} duration={400} style={{cursor:'pointer',color:'white'}}>{listValue}</Scroll>
                                            </li>
                                        )
                                    })
                                // })
                                

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
                                                            <Link>Admin <FontAwesomeIcon icon={faCaretDown}/></Link>
                                                        </li>
                                                        <div className="dropdown-options1">
                                                            <Link to="/Dashboard">Dashboard </Link>
                                                            <Link onClick={handleLogout}>Logout </Link>
                                                        </div>
                                                    </div>
                                                ):(
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
                                                                                      style={{color: "#ffffff",}}/></label>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
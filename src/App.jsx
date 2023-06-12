import {BrowserRouter, HashRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Account from './components/admin/Account/Account'
import Dashboard from './components/admin/Dashboard'
import Navbar from './components/doctor/01_Navbar/Navbar.jsx'


import Register from './components/Register/Register'
import PendingReq from './components/admin/Account/PendingReq'
import FormPage from './components/admin/Form/Form'
import ResearchForm from './components/admin/Form/ResearchForm'
import UserLogin from './components/Login/UserLogin'
import UserDetails from './components/Register/UserDetails'
import Otp_Login from './components/Login/Otp_Login'

import { useState, useEffect } from 'react'
import Main from './components/doctor/00_Main/Main'

import Project from './components/doctor/05_Project/Project'
import {RiseLoader} from "react-spinners/";
import NotFound from './components/Global/NotFound'
import Pubview from './components/doctor/04_Publication/Pubview'
import PubviewAll from './components/doctor/04_Publication/PubviewAll'
import { useDispatch } from "react-redux";
import { isUserLogInReducers } from "./App/Slice/userSlice.js";
import Main2 from './components/doctor/00_Main/Main2'
import Researchview from './components/doctor/03_Research/Researchview'
import ResearchviewAll from './components/doctor/03_Research/ResearchviewAll'
import UpdateForm from './components/admin/Account/Form/UpdateForm'
import Contact from "./components/admin/Contact_request/Contact.jsx";




function App() {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 0)
    }, [])
    const navbarList = ["Research", "Publication", "Projects", "About-Us", "Contact-Us"]
    const dispatch = useDispatch()
    const userId = sessionStorage.getItem("key")
    if (userId == null) {
        console.log("not loged In")
    } else {
        console.log("loged in")
        dispatch(isUserLogInReducers(userId))
    }
    return (<>

            <BrowserRouter>
            <div>
                <Navbar />
            </div>
            {loading ?
                <div style={style}>
                    <RiseLoader
                        color={'#FFFFDB'}
                        loading={loading}
                        size={50}
                        // cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        speedMultiplier={'0.69'}
                    />
                </div>
                :
                <Routes>

                    {/* Testing path */}

                    <Route exact path='/UserLogin' element={<UserLogin />} />
                    <Route exact path='/UserDetails' element={<UserDetails />} />
                    <Route exact path='/otplogin' element={<Otp_Login />} />
                    <Route exact path='/404' element={<NotFound />} />
                    <Route exact path='/publication/:id' element={<Pubview />} />
                    <Route exact path='/PubviewAll' element={<PubviewAll />} />
                    <Route exact path='/Researchview' element={<Researchview />} />
                    <Route exact path='/ResearchviewAll' element={<ResearchviewAll />} />
                    <Route exact path='/UpdateForm' element={<UpdateForm />} />
                    <Route exact path='/Project' element={<Project />} />
                    {/* Testing path ends */}
                    {/* <Route exact path='/form' element={<FormPage />}/> */}

                    {/*Home Page Sibngle routes*/}
                    {/* <Route exact path="/" element={<Main />} /> */}
                    <Route exact path="/" element={<Main2 />} />
                    {/* <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/Research" element={<Research/>}/>
                        <Route exact path='/Publication' element={<Publication/>}/>
                        <Route exact path='/Contact-Us' element={<Contact/>}/> */}
                    {/* <Route exact path='/About-Us' element={<About />} /> */}

                    {/* Testing path */}
                    <Route exact path='/PendingReq' element={<PendingReq />} />
                    <Route exact path='/UserLogin' element={<UserLogin />} />
                    <Route exact path='/UserDetails' element={<UserDetails />} />
                    <Route exact path='/otplogin' element={<Otp_Login />} />
                    {/* Testing path ends */}
                    <Route exact path='/form' element={<FormPage />} />
                    {/*Admin Route*/}
                    <Route exact path='/Dashboard/*' element={<Dashboard />} />
                    <Route exact path='/Account' element={<Account />} />
                    <Route exact path='/Dashboard/Form' element={<FormPage />} />
                    <Route exact path='/Dashboard/researchForm' element={<ResearchForm />} />
                    <Route exact path='/Dashboard/contact_request' element={<Contact />}/>

                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />


                    <Route exact path='/Account/*' element={<Account />} />
                    <Route exact path='/Account/PendingReq' element={<PendingReq />} />

                </Routes>}

        </BrowserRouter>
    </>
    )
}

export default App

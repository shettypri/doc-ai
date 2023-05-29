import {BrowserRouter, HashRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Account from './components/admin/Account/Account'
import Dashboard from './components/admin/Dashboard'
import Navbar from './components/doctor/01_Navbar/Navbar'


import Register from './components/Register/Register'
import PendingReq from './components/admin/Account/PendingReq'
import FormPage from './components/admin/Form/Form'
import ResearchForm from './components/admin/Form/ResearchForm'
import UserLogin from './components/Login/UserLogin'
import UserDetails from './components/Register/UserDetails'
import UpdateForm from './components/admin/Account/Form/UpdateForm'

import {useState, useEffect} from 'react'
import {css} from '@emotion/react'
import About from './components/doctor/06_About_Us/About'
import Main from './components/doctor/00_Main/Main'
import Research from './components/doctor/03_Research/Research'
import Home from './components/doctor/02_Home/Home'
import Publication from './components/doctor/04_Publication/Publication'
import Contact from './components/doctor/07_Contact/Contact'

import {
    RingLoader,
    PropagateLoader,
    ScaleLoader,
    RiseLoader,
    SyncLoader,
    PuffLoader,
    HashLoader
} from "react-spinners/";
import NotFound from './components/Global/NotFound'
import BadRequest from './components/Global/BadRequest'


const override = css`
  display: block;
  flex: 1;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

function App() {
    const style = {position: "fixed", top: "50%", left: "57%", transform: "translate(-50%, -50%)", width: "500px"};
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    const navbarList = ["Research", "Publication", "Projects", "About-Us", "Contact-Us"]
    return (<>
            <BrowserRouter>
                <div>
                    <Navbar/>
                </div>
                {loading ?
                    <div style={style}>
                        <PuffLoader
                            color={'#FF335B'}
                            loading={loading}
                            size={200}
                            cssOverride={override}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            speedMultiplier={'1'}
                        />
                    </div>
                    :
                    <Routes>

                            {/* Testing path */}
                            <Route exact path='/PendingReq' element={<PendingReq />} />
                            <Route exact path='/UserLogin' element={<UserLogin />} />
                            <Route exact path='/UserDetails' element={<UserDetails />} />
                            <Route exact path='/otplogin' element={<Otp_Login />} />
                            <Route exact path='/404' element={<NotFound/>} />
                            {/* Testing path ends */}
                            {/* <Route exact path='/form' element={<Form />}/> */}
                          
                {/*Home Page Sibngle routes*/}
                {/* <Route exact path="/" element={<Main/>}/> */}
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Research" element={<Research/>}/>
                <Route exact path='/Publication' element={<Publication/>}/>
                <Route exact path='/Contact-Us' element={<Contact/>}/>
                <Route exact path='/About-Us' element={<About/>}/>

                        {/* Testing path */}
                        <Route exact path='/PendingReq' element={<PendingReq/>}/>
                        <Route exact path='/UserLogin' element={<UserLogin/>}/>
                        <Route exact path='/UserDetails' element={<UserDetails/>}/>
                        <Route exact path='/otplogin' element={<Otp_Login/>}/>
                        {/* Testing path ends */}
                        {/* <Route exact path='/form' element={<Form />}/> */}


                        <Route exact path='/login' element={<Login/>}/>
                        <Route exact path='/register' element={<Register/>}/>

                    
                        <Route exact path='/Account/*' element={<Account/>}/>
                        <Route exact path='/Account/PendingReq/PendingReq' element={<PendingReq/>}/>


                        {/* <Route exact path='/publisher'  element={<publisher/>}/>
        <Route exact path='/researcher'  element={<researcher/>}/> */}


                        {/* <Route exact path='/' */}
                    </Routes>}

            </BrowserRouter>
        </>
    )
}

export default App

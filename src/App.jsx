import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Account from './components/admin/Account/Account'
import Dashboard from './components/admin/Dashboard'
import Navbar from './components/doctor/01_Navbar/Navbar'
import Home from './components/doctor/02_Home/Home'
import Research from './components/doctor/03_Research/Research'
import Publication from './components/doctor/04_Publication/Publication'
import Contact from './components/doctor/07_Contact/Contact'

import Register from './components/Register/Register'
import PendingReq from './components/admin/Account/PendingReq'
import FormPage from './components/admin/Form/Form'
import ResearchForm from './components/admin/Form/ResearchForm'
import UserLogin from './components/Login/UserLogin'
import UserDetails from './components/Register/UserDetails'
import Otp_Login from './components/Login/Otp_Login'


function App() {
    const navbarList = [
        "Research", "Publication", "Projects", "About-Us", "Contact-Us"
    ]
    return (
        <>

            <BrowserRouter>
                <div>
                    <Navbar/>
                </div>
                <Routes>

        {/* Testing path */}
        <Route exact path='/PendingReq' element={<PendingReq />} />
        <Route exact path='/UserLogin' element={<UserLogin />} />
        <Route exact path='/UserDetails' element={<UserDetails />} />
        <Route exact path='/otplogin' element={<Otp_Login />} />
        {/* Testing path ends */}
        {/* <Route exact path='/form' element={<Form />}/> */}
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Research" element={<Research />} />
        <Route exact path='/Publication' element={<Publication />}/>
        <Route exact path='/Contact-Us' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/Dashboard/*' element={<Dashboard />} />
        <Route exact path='/Account'  element={<Account/>}/>
        <Route exact path='/Dashboard/Form'  element={<FormPage />}/>
        <Route exact path='/Dashboard/researchForm' element={<ResearchForm />} />


        {/* <Route exact path='/publisher'  element={<publisher/>}/>
        <Route exact path='/researcher'  element={<researcher/>}/> */}


                    {/* <Route exact path='/' */}
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App

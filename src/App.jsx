import { BrowserRouter, Form, Route, Routes, } from 'react-router-dom'
import './App.css'
import Navbar from './components/doctor/01_Navbar/Navbar'
import Home from './components/doctor/02_Home/Home'
import Research from './components/doctor/03_Research/Research'
import Publication from './components/doctor/04_Publication/Publication'
import Contact from './components/doctor/07_Contact/Contact'
import Login from './components/Login/Login'
import Account from './components/admin/Account/Account'
import Dashboard from './components/admin/Dashboard'

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
        <Route exact path='/form' element={<Form />}/>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Research" element={<Research />} />
        <Route exact path='/Publication' element={<Publication />}/>
        <Route exact path='/Contact-Us' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/Dashboard' element={<Dashboard />} />
        <Route exact path='/Account'  element={<Account/>}/>

        
        {/* <Route exact path='/publisher'  element={<publisher/>}/>
        <Route exact path='/researcher'  element={<researcher/>}/> */}


       
        {/* <Route exact path='/' */}
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App

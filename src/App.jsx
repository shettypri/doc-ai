import { BrowserRouter, Form, Route, Routes,  } from 'react-router-dom'
import './App.css'
import Navbar from './components/doctor/01_Navbar/Navbar'
import Home from './components/doctor/02_Home/Home'
import Research from './components/doctor/03_Research/Research'

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
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App

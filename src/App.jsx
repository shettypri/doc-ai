import { BrowserRouter, Form, Route, Routes,  } from 'react-router-dom'
import './App.css'
import Navbar from './components/doctor/01_Navbar/Navbar'
import Home from './components/doctor/02_Home/Home'

function App() {
  return (
    <>

    <BrowserRouter>
      <div>
      <Navbar/>
      </div>
      <Routes>
        <Route exact path='/form' element={<Form />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App

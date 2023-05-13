import { BrowserRouter, Form, Route, Routes,  } from 'react-router-dom'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import Dashboard from './components/admin/Dashboard'
import Navbar from './components/doctor/Navbar/Navbar'

function App() {
  return (
    <>

    <BrowserRouter>
      <div>
      <Navbar/>
      </div>
      <Routes>
        <Route exact path='/form' element={<Form />}/>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
